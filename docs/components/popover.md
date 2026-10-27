# Popover 浮层

在操作旁边展开轻量内容，适合局部设置和补充信息。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/popover @zhi/button
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { Popover, PopoverTrigger, PopoverContent, PopoverTitle, PopoverDescription, PopoverClose } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

<Popover>
  <PopoverTrigger render={<Button variant="outline" />}>阅读偏好</PopoverTrigger>
  <PopoverContent>
    <PopoverTitle>阅读偏好</PopoverTitle>
    <PopoverDescription>设置立即应用于当前页面。</PopoverDescription>
    <PopoverClose render={<Button />}>完成</PopoverClose>
  </PopoverContent>
</Popover>
```

## 主要属性

| 位置 / 属性 | 类型 | 默认值 |
| --- | --- | --- |
| Popover: open / defaultOpen | boolean | false |
| Popover: onOpenChange | (open, details) => void | — |
| Popover: modal | boolean / "trap-focus" | false |
| PopoverContent: side / align | Base UI 定位属性 | bottom / start |
| PopoverContent: sideOffset / alignOffset | number | 8 / 0 |
| PopoverContent: initialFocus / finalFocus | Base UI 焦点目标 | 自动 |

## 组合与可访问性

PopoverContent 包含 Portal、自动避让定位和可滚动浮层，默认宽 320 px、8 px 微圆角。默认允许操作页面其余部分；Escape 和外部点击可以关闭。提供标题，输入框仍需 Label。

需要限制交互时显式设置 modal，并保留 PopoverClose；Base UI 的 modal=true 在内容含有 Close 时才启用焦点限制。需要明确确认、取消的流程优先使用 [Dialog](dialog.md)。

主题设置在文档根节点。异步保存使用受控 open，并在成功后关闭，避免把点击“完成”误当保存成功。

完整属性以[分发源码](../../registry/ui/popover.tsx)和已安装版本的类型定义为准。
