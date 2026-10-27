# ToggleGroup 切换按钮组

为相关工具按钮提供共享状态与方向键导航，支持单选和多选。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/toggle-group
```

先按[安装指南](../installation.md)配置 Registry。该条目会同时安装 Toggle。

## 用法

```tsx
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

<ToggleGroup defaultValue={["left"]} aria-label="文字对齐">
  <ToggleGroupItem value="left">左对齐</ToggleGroupItem>
  <ToggleGroupItem value="center">居中</ToggleGroupItem>
  <ToggleGroupItem value="right">右对齐</ToggleGroupItem>
</ToggleGroup>

<ToggleGroup multiple defaultValue={[]} aria-label="文字样式">
  <ToggleGroupItem value="bold">加粗</ToggleGroupItem>
  <ToggleGroupItem value="italic">斜体</ToggleGroupItem>
</ToggleGroup>
```

## 主要属性

| 部件 | 属性 | 说明 |
| --- | --- | --- |
| ToggleGroup | value / defaultValue | 选中项的字符串数组，单选也使用数组 |
| ToggleGroup | onValueChange | `(values, details) => void` |
| ToggleGroup | multiple | 默认 false；true 时允许多选 |
| ToggleGroup | orientation | horizontal（默认）或 vertical |
| ToggleGroup | loopFocus | 方向键焦点循环，默认 true |
| ToggleGroup / ToggleGroupItem | disabled | 禁用整组或单个选项 |
| ToggleGroupItem | value | 组内唯一字符串 |

## 组合与可访问性

通过 `aria-label` 或 `aria-labelledby` 命名整组。方向键移动焦点，Enter 或 Space 切换状态；禁用项会跳过。图标按钮需要独立的可访问名称。

单选组允许再次点击当前项得到空数组；如果业务要求始终选中一项，在受控 `onValueChange` 中忽略空数组。不要使用 Radix 的 `type="single"` 或字符串 `value`。`ToggleGroupItem` 复用 Toggle，选中状态由组管理。

完整属性以[分发源码](../../registry/ui/toggle-group.tsx)和已安装版本的类型定义为准。
