# Select 选择器

从选项列表中选择，保持紧凑的表单布局。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/select
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

<Select defaultValue="comfortable" items={{ comfortable: "舒适", compact: "紧凑" }}>
  <SelectTrigger aria-label="阅读密度"><SelectValue /></SelectTrigger>
  <SelectContent>
    <SelectItem value="comfortable">舒适</SelectItem>
    <SelectItem value="compact">紧凑</SelectItem>
  </SelectContent>
</Select>
```

## 主要属性

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| value / defaultValue | option value | — |
| onValueChange | (value, details) => void | — |
| items | value-to-label record or items array | — |
| name / disabled | Base UI root props | — |

## 组合与可访问性

通过 items 映射显示名称。SelectContent 包含 Portal、定位与列表。禁用项可以被键盘聚焦以便发现，但不能选中。主题设置在文档根节点。

完整属性以[分发源码](../../registry/ui/select.tsx)和已安装版本的类型定义为准。
