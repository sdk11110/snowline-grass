# 雪线漫游 · Snowline Roam

这是复用 Hemu Ski 人物、地形和现有玩法逻辑后，整理出的**可编辑、可构建、可个性化定制工程**。

当前版本 **0.2.0**：新的等高线地图开场与纸张展开转场；保留雪岭，新增青岚草浪山谷、潮汐大浪冲浪。左上角「换个天地」可以重复切换目的地。

草场连续渲染已优化：固定世界格缓存、按帧增量生成与局部上传，不再每移动10米重建整片草丛。边缘按每根草渐隐，修复零高度草片造成的黑色断线；近景保留细节，中景采用更轻的几何。进入场地前分帧准备初始草圈，地形新增/移除时才更新季节材质。技术与实测记录见 [草场渲染优化](docs/MEADOW_RENDERING.md)。

## 三种目的地

- **雪岭**：原雪场、缆车、人物和玩法继续保留；默认滑行物理与原始基线对照一致。
- **青岚**：复用真实山体与路线，改为草浪、窄土径和夏季树色。草叶随同一大片风场弯动，人物附近会压伏；使用独立阻力和转向参数。
- **潮汐**：独立海湾、岛岸和浮标路线。主浪峰谷约 5 米，运动和渲染共用波面；有划水、压浪转向、制动、蓄力跳跃、落浪、水花与泡沫尾迹。R 返回当前起浪点。

不同目的地记住各自的时间、天气、人物与装备。海上首次使用现有女性轻装模型及防晒衣裤材质，配独立 2.4 米冲浪板；回雪场恢复进入前的角色和衣装。草场使用土黄外衣、鼠尾草绿长裤的材质与轮廓调整。原冬服融合的帽镜无法单独拆除，详细边界见 [场景改造说明](docs/EXPERIENCE.md)。

设计方向图见 [草浪与冲浪概念图](docs/art-direction/grass-and-surf-concept.png)，实际游戏截图单独保存在 `evidence/`，两者不混用。

打开：**http://127.0.0.1:5187/**。下次双击 **启动雪线漫游.cmd**。

## 先试个性化改造

点击右上角「定制」。可以直接修改天气、时间、人物、单双板、镜头、重力、阻力、转向、限速、画质和声音。
改动通过真实引擎接口应用，并读回运行值；不会只改面板数字。

「工程」页可以改雪场名称和强调色。「导出配置 / 导入配置」把你的设置保存为JSON，
浏览器也会记住本机设置。预设包含原版手感、轻松练习、月夜粉雪。

## 代码应该从哪里改

- `src/entry.js`：游戏源码与定制工坊的入口。
- `src/experience/destinations.js`：目的地名称、介绍、主题颜色和操作提示。
- `src/experience/opening.js`、`atlas.js`：自己的开场、纸张展开动效与真实地形等高线图。
- `src/experience/experience.js`：目的地切换、出生点、场景各自的天气与装备记忆。
- `src/experience/biomes.js`：草浪、山谷配色、海面、岛岸、浪花和尾迹。
- `src/experience/physics/`：共享海浪与独立冲浪求解器，草场与雪场的可逆切换。
- `src/experience/wardrobe.js`、`gear/surfboard.js`：目的地衣装与独立冲浪板。
- `src/experience/environment-audio.js`：随浪能量、速度和接触状态变化的环境声，沿用音效开关。
- `src/studio.js`：定制面板的界面、保存、导入导出。
- `src/customize/project-settings.js`：项目名称、强调色及配置文件规则。
- `src/customize/runtime-controls.js`：可定制参数与真实游戏接口的连接；新增控件应先在这里接实际功能。
- `src/recovered/physics/skier.js`：滑行、刻滑、跳跃、腾空、摔倒；文件顶部 `physicsTuning` 是新增的物理默认参数。
- `src/recovered/input/`：键盘、触屏、触屏HUD。
- `src/recovered/rider/`：人物模型、骨骼姿态、单双板、动作、雪球、骑乘转换。
- `src/recovered/camera/`：跟随、第一人称、鼠标环视、载具镜头。
- `src/recovered/weather/`：天气控制、太阳月亮、天空与降雪。
- `src/recovered/world/`：地形采样、雪道、森林、建筑、索道、水体、温泉、秋千、转经轮、载具。
- `src/recovered/animals/`：狗、狐狸、马、雪怪及四足骨骼。
- `src/recovered/navigation/`：地图、GPS、目的地、沙盘跳转。
- `src/recovered/game/`：渲染循环、会话、缆车/载具/温泉状态和场景交互。
- `src/recovered/audio/`、`effects/`、`render/`、`ui/`：声音、雪痕/特效、画风与界面。
- `src/recovered/diorama.js`：立体沙盘入口。
- `public/data/`：地图、雪道/索道线路、高度数据和原地形编辑结果。
- `public/models/`：复用的模型、动作和内嵌纹理；更换模型时同时检查骨架/动作接口。
- `src/vendor/three/`：独立存放的第三方基础库，通常无需修改。

更详细的玩法清单见 [PLAY_SYSTEMS.md](docs/PLAY_SYSTEMS.md)，来源和改造边界见 [PROVENANCE.md](docs/PROVENANCE.md)。

## 开发与构建

需要Node.js 20.19+。本机已准备好依赖；换电脑后先运行 `npm install`。

```sh
npm run dev
npm run build
npm run preview
npm run check
node tools/test-runtime-controls.mjs
node tools/test-physics.mjs
node tools/test-biome-physics.mjs
node tools/test-wave-mesh.mjs
node tools/test-meadow-stream.mjs
node tools/test-meadow-materials.mjs
```

开发地址5187，构建预览地址4187。`npm run build` 会从本项目源码生成 `dist/`，并输出source maps。
正常开发和构建无需读取原 `hemu-ski-local` 文件夹，也不依赖原站在线。

拆解阶段的临时分析、下载和恢复工具已清理。物理对照测试只保留必要的
`tools/fixtures/original-skier-class.txt` 基线，不依赖旧项目。编辑日常玩法请改 `src/`，不要在 `dist/` 上改后再丢失。

## 复用与“自己的工程”的含义

本次保留了原版玩法逻辑，恢复成具名模块，加入真实参数入口及新的定制层。
这不是作者原开发仓库的逐文件还原，也不把复用的代码和素材声称为全部原创。
你现在可以在独立工程里定位和修改各玩法、换人物/数据/画风，并从自己的源码重新构建。

原有大部分玩法代码都已保留，但保留代码不代表已逐条游玩验收所有雪道、载具、动物和特殊动作。
实际完成的构建、源码、控制器、物理及浏览器检查以 `evidence/` 记录为准。
