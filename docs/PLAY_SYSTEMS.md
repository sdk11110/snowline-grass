# 玩法系统与定制入口

本工程沿用 Hemu Ski 已发布版本的人物、地形、模型、音频和玩法逻辑，恢复为可编辑模块后增加定制边界。原始资产及其内嵌纹理的来源与哈希见根目录 `ASSET_PROVENANCE.json`；不将它们称为本工程原创资产。

## 保留的玩法类别

以下类别来自原游戏源码与 `window.__game` 接口清单；保留代码不等于已逐项完成实际游玩验收。

- 滑行：单板、双板、蹬地与撑杖、压低重心、刻滑、刹车、蓄力跳跃、空中转体及前滚、摔倒和恢复；另有真实刻滑模式。
- 步行与人物：男滑手、女滑手、经典人物；步行、跑步、单双板切换、第一与第三人称、鼠标环视。经典人物不能使用需要完整骨架的步行与第一人称能力。
- 动作：十个独立动作资源，包括舞蹈、月球漫步、挥杆、火球、回旋踢、弹吉他、跪下等；从原动作菜单选择，支持三个快捷槽位。
- 山地交通：缆车、吊椅、站台进出与沿线行驶；皮卡、雪地摩托、Jetson 飞行器和湖中划船，保留各自驾驶逻辑。
- 动物：与狗互动及投掷雪球、狐狸活动、骑马，以及捕捉和乘坐雪怪。
- 场景互动：温泉入水与离池、秋千、转经轮、NPC 对话、探索发现记录。
- 导航：迷你地图、全屏地图、目的地与路线规划、雪道信息、立体沙盘与返回原位置。
- 环境与表现：时间推进、日出日落、月夜、晴天、多云、降雪、暴风雪、自然变化天气及夜间极光；画质、音乐和音效设置。

## 控制器接口

`src/customize/runtime-controls.js` 导出 `DEFAULT_SETTINGS`、`CONTROL_SCHEMA` 和 `createRuntimeControls`。面板只负责展示与保存配置，实际改动通过控制器进入游戏。

```js
const controls = createRuntimeControls(() => window.__game, savedSettings);
// 等游戏准备完毕后应用初始化配置。
const initialResult = await controls.apply();
const result = await controls.apply({ timeOfDay: 18.5, weather: 'snow' });
const current = controls.snapshot();
await controls.reset();
```

- 构造函数没有副作用。无参数 `apply()` 应用默认值与传入的初始化配置；`apply(patch)` 只应用指定字段。
- `apply()` 和 `reset()` 返回 Promise，包含 `applied`、`unsupported`、`errors` 三个数组。每条记录带 `key`；成功记录同时带 `requested` 和实际读回的 `actual`。
- `snapshot()` 返回 `ready`、`settings`、`capabilities`、`pending`、`readErrors` 与 `lastReport`。`settings` 来自当前引擎，不从保存的配置反推。
- 不支持的入口、非法范围、加载失败、运行状态拒绝与读回不一致都会明确记录。控制器不会给对象添加无效同名字段冒充已生效。
- 人物切换先于雪具和镜头应用。更换人物的异步加载完成后，才判断新人物能否使用第一人称。连续调用按顺序执行，避免模型加载竞态。

## 真实定制参数

环境控制直接使用原 `weather.hour`、`weather.running`、`weather.aurora`、`weather.set()` 与 `weather.settle()`。默认 10:30、晴天、昼夜流动开启、极光关闭。

镜头使用引擎导出的 `getCameraMode()` 和 `setCameraMode()`；第一人称必须有男或女模型的头部骨骼。鼠标环视使用原 `mouseLook.set()`。普通跟随镜头每帧会重算 FOV，因此这里没有暴露会被下一帧覆盖的伪 FOV 控件。

人物与雪具使用引擎的统一 `setRider()`、`setGear()` 入口，分别保留原人物切换流程和人物/物理雪具同步。默认男滑手、单板。

滑手物理由 `phys.tuning` 中实际接入求解过程的参数控制：

- `gravityScale`：重力倍率，默认 1。作用于地面重力投影、腾空和离地过程。
- `dragScale`：阻力倍率，默认 1。作用于滑手的地面、腾空和摔倒阻力。
- `steeringScale`：转向倍率，默认 1。作用于滑手地面和空中转向。
- `maxSpeed`：滑行速度上限，单位米/秒；默认 0，表示保持原版无上限。正值启用明确的滑手限速。
- `realisticRiding`：原 `phys.realistic`，默认关闭。

这些参数只调整滑手。车辆、马、雪怪、划船、粒子系统和天气各有独立物理或运动逻辑，不能把滑手重力倍率描述为全世界重力。

图形设置使用原 `graphics.setMode()`，保留自动、低、中、高与原菜单自定义五种模式。音乐与音效使用 `sound.setMusic()`、`sound.setSfx()`；声音仍受浏览器的用户手势播放规则约束。

## 资源与数据关系

`public/data` 保留原地形、地图及编辑后的地形数据，`public/models` 保留桌面与手机版 GLB，`public/audio` 保留实际外部声音文件。字体位于 `public/assets`。模型纹理已经内嵌于 GLB。

public 目录只放静态资产，不放原编译版 JavaScript、CSS 或 HTML。原逻辑由源码模块参与构建。数据中的 OpenStreetMap 与地形来源声明保留；原站单项模型和字体的具体授权状态不因代码恢复而改变。
