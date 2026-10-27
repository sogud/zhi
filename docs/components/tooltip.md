# Tooltip 文字提示

在悬停或键盘聚焦时补充简短说明。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/tooltip @zhi/button
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

<TooltipProvider delay={350}>
  <Tooltip>
    <TooltipTrigger render={<Button variant="outline" onClick={saveDraft} />}>保存草稿</TooltipTrigger>
    <TooltipContent>保存草稿</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

将 saveDraft 替换成项目的保存操作。触发器需要有实际动作；如果点击的目的只是查看说明，使用 Popover。

## 主要属性

| 位置 / 属性 | 类型 | 默认值 |
| --- | --- | --- |
| Tooltip: open / defaultOpen | boolean | false |
| Tooltip: onOpenChange | (open, details) => void | — |
| Tooltip: disabled | boolean | false |
| TooltipProvider: delay / closeDelay | number（毫秒） | Base UI 默认值 |
| TooltipContent: side / align | Base UI 定位属性 | top / center |
| TooltipContent: sideOffset / alignOffset | number | 8 / 0 |

## 组合与可访问性

一个 TooltipProvider 可以包住一组提示，共享等待时间。触发器通过 render 组合，键盘聚焦可打开提示，Escape 可关闭。触发器本身必须有清楚的名称；图标按钮仍需 aria-label。

Base UI 的 Tooltip 是视觉补充，不自动把内容作为屏幕阅读器描述，也不用于触摸操作。触发器名称必须单独完整提供；必要说明使用可见文字或 Popover。详见 [Base UI 使用指南](https://base-ui.com/react/components/tooltip#usage-guidelines)。

提示只放简短文字，不放按钮或输入框；需要操作时使用 [Popover](popover.md)。必要说明应直接显示，不能只藏在悬停提示里。原生 disabled 按钮不能获得焦点，不依赖它展示提示。

TooltipContent 包含 Portal 与自动避让定位，使用 4 px 微圆角；主题设置在文档根节点。

完整属性以[分发源码](../../registry/ui/tooltip.tsx)和已安装版本的类型定义为准。
