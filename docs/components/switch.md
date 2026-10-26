# Switch 开关

切换即时生效的二元偏好。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/switch
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { Switch } from "@/components/ui/switch"

<label className="flex items-center gap-3">
  <Switch defaultChecked name="focus" />
  专注模式
</label>
```

## 主要属性

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| checked / defaultChecked | boolean | — |
| onCheckedChange | (checked, details) => void | — |
| disabled | boolean | false |

## 组合与可访问性

标签保持稳定；不要用开关代替提交按钮。

完整属性以[分发源码](../../registry/ui/switch.tsx)和已安装版本的类型定义为准。
