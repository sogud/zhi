# Checkbox 复选框

选择独立选项，支持受控与非受控状态。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/checkbox
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { Checkbox } from "@/components/ui/checkbox"

<label className="flex items-center gap-3">
  <Checkbox defaultChecked name="remember" />
  保留阅读进度
</label>
```

## 主要属性

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| checked / defaultChecked | boolean | — |
| onCheckedChange | (checked, details) => void | — |
| disabled | boolean | false |

## 组合与可访问性

用标签关联控件。焦点状态和选中标记共同表达状态。

完整属性以[分发源码](https://github.com/sogud/zhi/blob/main/registry/ui/checkbox.tsx)和已安装版本的类型定义为准。
