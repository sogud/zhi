# RadioGroup 单选组

在一组互斥选项中选择一个。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/radio-group
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

<RadioGroup defaultValue="private" aria-label="可见范围" name="visibility">
  <label className="flex items-center gap-3"><RadioGroupItem value="private" />仅自己可见</label>
  <label className="flex items-center gap-3"><RadioGroupItem value="public" />公开分享</label>
</RadioGroup>
```

## 主要属性

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| value / defaultValue | option value | — |
| onValueChange | (value, details) => void | — |
| name | string | — |
| disabled | boolean | false |

## 组合与可访问性

组需要名称，每个选项也需要标签。方向键切换选项，禁用项不能选中。

完整属性以[分发源码](../../registry/ui/radio-group.tsx)和已安装版本的类型定义为准。
