# 开始使用

纸 · Zhi 通过 shadcn Registry 分发源码。组件安装进你的项目，使用时直接导入 Button、Input 等名称。

## 准备项目

需要 React、Tailwind CSS v4 和已配置的 shadcn `components.json`。在使用组件的应用目录执行命令，并沿用项目已有的包管理器和路径别名。已有项目可以先用 `pnpm dlx shadcn@latest info` 检查配置；新项目先按 [shadcn 官方文档](https://ui.shadcn.com/docs/installation)初始化。

## 配置 Registry

在 `components.json` 中合并下面的 registries 配置，保留其他已有字段：

```json
{
  "registries": {
    "@zhi": "https://sogud.github.io/zhi/r/{name}.json"
  }
}
```

`@zhi` 是你在项目里配置的 Registry 名称，不需要加入 npm 或 GitHub 组织。

## 添加组件

```sh
pnpm dlx shadcn@latest add @zhi/button @zhi/input
```

```tsx
import { Button } from "@/components/ui/button"

<Button>保存修改</Button>
```

CLI 按 components.json 的 aliases 写入组件和工具函数，并添加依赖、字体、主题变量及 MIT 许可。上面的导入路径是默认别名示例，以你的项目实际配置为准。这里没有额外的 Zhi npm 运行时包。

## 切换主题

```html
<html data-theme="xuanzhi">
```

白纸 `baizhi`、宣纸 `xuanzhi`、墨纸 `mozhi`、青竹 `qingzhu` 共用组件结构。主题设置在文档根节点，让 Select 和 Dialog 的 Portal 也能继承颜色。默认主题为白纸。用 `bg-background text-foreground font-sans` 等语义类设置应用页面，组件不会替你的应用设置页面布局。

## 更新与定制

安装后的源码由你的项目管理。先查看差异，保留项目改动，再决定如何更新：

```sh
pnpm dlx shadcn@latest add @zhi/button --dry-run
```

样式优先使用组件现有 variant、size 和语义颜色。具体组合见[组件目录](components.md)。

## 纸面与界栏

`.zhi-paper` 叠加细微纸纹，Card 与浮层默认使用。多行书写区可选择 `.zhi-paper-ruled` 添加 24 px 淡界栏；纸纹和界栏不会改变输入行为。按钮默认直角，`variant="seal"` 提供朱色双边印章效果。
