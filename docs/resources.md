# 设计资源

代码、设计规范和原创素材一起开放。设计 tokens 是唯一颜色、尺寸和文字规格来源；素材使用 MIT 许可，字体另遵循 SIL OFL 1.1。

## 下载

- [设计资源 ZIP](https://sogud.github.io/zhi/downloads/zhi-design.zip)：tokens、主题预览、组件 SVG、Figma 变量快照及许可。
- [Zhi Skill ZIP](https://sogud.github.io/zhi/downloads/zhi-skill.zip)：Skill 入口、安装和组件参考、tokens、主题 CSS 与原始组件 SVG。
- [tokens.json](../design/tokens.json)：颜色、间距、尺寸、圆角与文字规格。
- [设计语言](design.md)：白纸、宣纸、墨纸与青竹的使用原则，及直角纸面、印记和自然元素的边界。

## 原创自然素材

- [竹](../design/motifs/bamboo.svg)：竹节与少量叶片。
- [云](../design/motifs/cloud.svg)：舒展的横向线条。
- [雨](../design/motifs/rain.svg)：细短斜线。
- [雪](../design/motifs/snow.svg)：稀疏点状细节。

这些 SVG 是 Zhi 的原创素材，使用 MIT 许可。它们是历史探索中保留的可选素材，不代表 Zhi 默认风格，也不与具体组件绑定；使用时隐藏装饰语义、避免遮挡文字与操作，不用持续粒子动画表达加载状态。

## 预览

- [白纸](../design/catalog-baizhi.png)
- [宣纸](../design/catalog-xuanzhi.png)
- [墨纸](../design/catalog-mozhi.png)
- [青竹](../design/catalog-qingzhu.png)

四张渲染预览覆盖当前 16 个组件与四个主题。原有 SVG 图板保留早期圆角设计，覆盖最初的 Button、Input、Checkbox、Switch，可以导入矢量编辑器，文字需要 Noto Sans SC / Noto Serif SC 字体。

## Figma

[打开纸 · Zhi 设计文件](https://www.figma.com/design/XWvrkynXWsb4ezYtAGu6SV?node-id=4-2)。文件访问权限由 Figma 的共享设置决定。

当前 Figma 文件是最初四个组件、三个主题及旧圆角的历史设计。其余十二个组件已有 React 源码；当前圆角规则、青竹主题与新素材尚未同步到 Figma 主组件。SVG 不保留 Figma 的组件关系、自动布局和变量绑定；当前没有原生 .fig 归档。

## 修改与分发

保留 MIT 许可即可修改和分发原创资源。在 Zhi 仓库修改 design/tokens.json 后运行 `pnpm tokens:build`。Skill 的 references 与 assets 由项目来源构建生成，更新原始设计或文档后再生成，不手工修改副本。字体文件不包含在 Skill 中；文档站字体通过 Fontsource 依赖加载，许可随站点构建发布。
