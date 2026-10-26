# Button 按钮

通过浓淡区分操作层级，让主要动作清楚可见.

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/button
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { Button } from "@/components/ui/button"

<div className="flex gap-3">
  <Button>保存修改</Button>
  <Button variant="outline">预览</Button>
  <Button variant="ghost" disabled>取消</Button>
</div>
```

## 主要属性

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| variant | default / outline / ghost / destructive / seal | default |
| size | default / sm | default |
| disabled | boolean | false |

## 组合与可访问性

链接通过 `render={<a href="/" />}` 和 `nativeButton={false}` 组合；图标按钮需要可访问名称。

完整属性以[分发源码](../../registry/ui/button.tsx)和已安装版本的类型定义为准。
