# Alert 提示

在上下文中呈现说明、状态或错误。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/alert
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

<Alert>
  <AlertTitle>草稿已保存</AlertTitle>
  <AlertDescription>可以放心离开，稍后继续编辑。</AlertDescription>
</Alert>
```

## 主要属性

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| variant | default / destructive | default |
| role | note / status / alert | note |

## 组合与可访问性

静态提示使用默认 note；一般动态更新使用 status；紧急更新再使用 alert。错误同时提供可操作的文字说明。

完整属性以[分发源码](https://github.com/sogud/zhi/blob/main/registry/ui/alert.tsx)和已安装版本的类型定义为准。
