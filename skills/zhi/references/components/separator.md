# Separator 分隔线

区分内容分组，而不增加视觉噪声。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/separator
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { Separator } from "@/components/ui/separator"

<div>
  <p>作品信息</p>
  <Separator />
  <p>阅读偏好</p>
</div>
```

## 主要属性

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| orientation | horizontal / vertical | horizontal |

## 组合与可访问性

纵向分隔线需要父容器提供明确高度。组件带有 separator 语义。

完整属性以[分发源码](https://github.com/sogud/zhi/blob/main/registry/ui/separator.tsx)和已安装版本的类型定义为准。
