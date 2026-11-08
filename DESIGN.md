---
name: 雪线漫游 · Snowline Roam
description: 纸上选择目的地，展开后进入山野
colors:
  primary: "#dcb847"
  ink: "#25343c"
  paper: "#faf7ef"
  muted: "#576a70"
  field: "#fffdf8"
  control: "#467a8a"
  focus: "#286788"
  error-ink: "#8f3b24"
  error-paper: "#f8e9dd"
  atlas-ink: "#263e35"
  atlas-action: "#315044"
  atlas-action-ink: "#f7f3e6"
  atlas-muted: "#53685d"
  atlas-focus: "#b85b32"
  snow-route: "#c25d38"
  snow-paper: "#f0eee3"
  meadow-route: "#477051"
  meadow-paper: "#eeeedd"
  ocean-route: "#217a89"
  ocean-paper: "#e6eeE7"
typography:
  title:
    fontFamily: "Patrick Hand, system-ui, sans-serif"
    fontSize: "25px"
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: "Patrick Hand, system-ui, sans-serif"
    fontSize: "16px"
    lineHeight: 1.4
  label:
    fontFamily: "Patrick Hand, system-ui, sans-serif"
    fontSize: "14px"
  small:
    fontFamily: "Patrick Hand, system-ui, sans-serif"
    fontSize: "12px"
rounded:
  control: "2px"
  panel: "3px"
spacing:
  compact: "8px"
  group: "12px"
  gutter: "17px"
components:
  destination-action:
    backgroundColor: "{colors.atlas-action}"
    textColor: "{colors.atlas-action-ink}"
    padding: "10px 23px"
  export-button:
    backgroundColor: "var(--lab-accent, #dcb847)"
    textColor: "var(--lab-accent-ink, #000000)"
    rounded: "{rounded.control}"
    padding: "6px 2px"
  secondary-button:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "6px 2px"
  select:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "6px 8px"
---

# Design System: 雪线漫游 · Snowline Roam

## Overview

**Creative North Star: "展开的山野地图"**

淡纸色、细墨线、等高线和手写字连接目的地选择与三维场景。开场中的地图是可进入世界的引子；进入以后，界面缩回边缘，把空间留给滑行、草浪和海面。

本记录合并既有定制面板的已确认规则与新开场、目的地工具栏。雪场保留既有卡通光照、环境与操作基线；新场景仍使用同一渲染器、人物系统和 toon 材质体系。草、水、衣装的细节由对应场景模块维护，不把一张概念图的细节冒充为已经完成的渲染规范。

**Key Characteristics:**

- 纸张与墨线贯穿开场和浮层。
- 目的地有各自的轻微纸色和路线色变化。
- 游戏场景居中，常用控制靠边。
- 定制值显示真实应用结果。
- 空间转场集中在进入世界的一个时刻。

## Colors

开场使用森林墨绿与带季节色调的纸张，定制面板保留原有暖纸、墨蓝和可换强调色。两组角色有各自作用域，不合并为一个不准确的通用色。

### Primary

- **工坊金色：** 定制面板的默认强调色，用于导出按钮及选中标签下沿；用户可以换成任意六位十六进制颜色。
- **森林行动色：** 开场主按钮的深色底，配暖纸色文字；hover 变亮，active 变深。

### Secondary

- **雪岭赭红、青岚草绿、潮汐海青：** 来自目的地配置，标识当前选择。切换目的地同步改变路线下沿与对应纸张底色，不改变所有控件的含义。

### Neutral

- **地图墨绿与地图纸：** 承载标题、目的地行、等高线图与开场说明。
- **工坊纸与墨蓝：** 承载设置面板、字段、操作栏与文字。
- **说明色与字段白：** 降低辅助说明的视觉重量，同时保留输入区域边界。
- **暖色错误组合：** 只用于已经实现的设置失败反馈，不借用目的地路线色表达失败。

**The Accent Foreground Rule.** 根据强调色的线性亮度，在纯黑与纯白中选对比度更高者；导出按钮 hover 不改变背景或文字亮度。

**The Scoped Palette Rule.** 目的地纸色只服务开场与目的地识别；工坊强调色只服务定制操作。新增场景不能永久改写雪场的原材质或色彩状态。

## Typography

**Body Font:** 本地资源提供 Patrick Hand 拉丁字形；面板正文、标签与小字采用 frontmatter 中的同一字体栈，中文落到可用回退字体。读回数值使用等宽数字。

面板从标题到标签、小字形成紧凑层级。开场的英文标识使用 Patrick Hand；当前中文大标题声明 `KaiTi / STKaiti / Patrick Hand / serif` 栈，尺寸为（clamp(46px, 5.4vw, 74px)），行高（1.17）。它是现有页面的字体事实，尚不是可移植的品牌展示字体规范。桌面副句与正文分别退到较小层级，目的地名称比玩法说明更醒目。

窄屏开场标题为（48px）、副句为（27px）；目的地名称和说明仍有明显层级。不要把英文手写字体的已加载状态等同于完整中文字库已经加载。

## Layout

目的地选择为全屏纸面：宽屏左侧标题与行动、右侧地图，下方是三项连续目的地行。分隔线组织内容，不把每个目的地做成独立浮卡。宽度不超过（760px）时改为单列，地图退到文字后方并降低透明度，目的地纵向排列；内容超出高度时允许纵向滚动。短横屏另有高度不超过（700px）的压缩规则。

进入场景后，左上工具栏承载目的地切换；原路线标签位于下方，定制入口位于右上。玩法提示靠下沿，场景保持中央可见。海上隐藏不适用的雪场小地图、GPS 和雪场沙盘入口。

定制面板初始收起，展开后为右上固定浮层，宽（318px），最大高度为视口高度减（28px），内部页滚动。宽度不超过（700px）时外边距（10px），面板宽度不超过视口减（20px）。头部、连接状态、预设、五类标签、内容、反馈、操作栏顺序保持稳定。

## Elevation & Depth

墨线确定边界，柔和投影把新增纸面工具与三维场景分开。开场折痕只有轻微亮暗；进入时纸张向两侧展开，揭示后面的真实世界。定制面板保留原先的柔和投影，不将三维世界的光照规则套在界面浮层上。

### Shadow Vocabulary

- **面板：** （0 8px 28px #14232c30）。
- **定制入口：** （0 4px 12px #20303924）。
- **目的地工具栏：** （0 3px 10px #263e3524）。

## Shapes

新增界面以近方形纸面、细实线与少量微圆角为主。工坊控件、面板沿用 frontmatter 的小半径；字段和分隔线比浮层外框更细。品牌山形、波线与方向箭头使用同类细线 SVG，保留圆润端点和转角。目的地选中状态用下沿及浅底色表达。

## Components

### Buttons

开场主行动是有明确箭头的深绿按钮；准备期间禁用并显示真实加载状态，失败时给出重试说明。它不沿用工坊的用户强调色。工坊导出为强调操作，导入与恢复为浅色次级操作；保留 hover 和清楚的键盘焦点。

### Inputs / Fields

字段标签与实际控件关联。滑块显示实际读回数值，选择器与复选框沿用同一控制色。禁用状态降低透明度，未支持或失败的改动不能伪装成成功。编辑控件时阻止同时触发人物转向。

### Navigation

目的地使用连续三项按钮与 `aria-pressed` 标识当前选择；名称、玩法、地形说明有层级。工坊的五类标签保留所选纸底与强调下沿，并支持左右键切换。

### Scene Toolbar and Help

工具栏复用纸面、细线山形与小字号目的地名称。玩法提示随雪地、草地、海洋改变，海上文字使用划水、压板与回起浪点的语言。面板可收起，不以大面积常驻工具遮住角色和路线。

### Atlas and Departure

雪岭、青岚的等高线在地形就绪后读取现有高度场；潮汐地图是程序生成的波形示意，虚线路径也是开场图形，不作为 GPS 导航数据。绘图只在选择或尺寸变化时重画。

进入世界的纸张展开为主要动效（880ms，cubic-bezier(.16,1,.3,1)），地图同步放大淡出（680ms）。请求减少动态时改为（180ms）的透明度过渡；“直接进入”可中断展开。重新选择目的地时清理旧动画与输入状态，避免过场结束后仍残留按键。

工坊展开只在未请求减少动态时使用（0.18s ease-out）的轻微上移淡入。焦点在开场为（3px）轮廓、偏移（6px），在工坊为（3px）轮廓、偏移（3px）。

## Do's and Don'ts

### Do

- **Do** 保留纸张、细墨线、线性图标及清楚的选中状态。
- **Do** 让游戏中央保持可见，常用控制停在边缘，定制面板可以收起。
- **Do** 将任意工坊强调色与其黑白前景计算规则一同使用。
- **Do** 保留减少动态、跳过过场及重新进入的行为。
- **Do** 分开存放概念设计图与真实运行截图，并保留资源来源。

### Don't

- **Don't** 把开场布局、纸张折叠或某种目的地色套到所有新界面。
- **Don't** 为不适用的场景显示仍会操作雪场的导航入口。
- **Don't** 把未生效设置、过程性调试内容或待修的草与水花表现写成规范。
- **Don't** 将复用人物的材质改色说成重新制作了独立服装网格。

扩展属性记录于 `docs/design-tokens.json`，该文件延续项目已使用的 sidecar 路径。未规范化：平台楷体中文展示字缺少项目自带字库；关闭按钮的乘号字形与原游戏菜单的硬偏移块影属于当前实现细节，不作为新界面的字体、图标或阴影模板。
