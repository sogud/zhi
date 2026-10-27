# Collapsible 折叠区域

由一个按钮展开补充内容，适合说明、筛选条件和辅助设置。多组独立章节优先使用 Accordion。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/collapsible
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

<Collapsible>
  <CollapsibleTrigger>查看排版说明</CollapsibleTrigger>
  <CollapsibleContent>正文保持舒适行距与一致的左边界。</CollapsibleContent>
</Collapsible>
```

## 主要属性

| 部件 | 属性 | 说明 |
| --- | --- | --- |
| Collapsible | open / defaultOpen | 受控 / 初始展开状态 |
| Collapsible | onOpenChange | `(open, details) => void` |
| Collapsible | disabled | 禁用展开操作 |
| CollapsibleContent | keepMounted | 关闭时保留 DOM，默认 false |
| CollapsibleContent | hiddenUntilFound | 允许浏览器页内查找展开内容，覆盖 keepMounted |

## 组合与可访问性

触发器是原生按钮，支持 Enter 和 Space，并自动关联区域、表达展开状态。按钮文字应说明展开的内容。重要内容不要只放在默认关闭的区域中；关闭时需要保留表单状态，可使用 `keepMounted`。组件默认没有展开动画。

完整属性以[分发源码](../../registry/ui/collapsible.tsx)和已安装版本的类型定义为准。
