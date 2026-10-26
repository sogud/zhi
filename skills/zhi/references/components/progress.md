# Progress 进度

呈现已知进度，或明确说明进度未知。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/progress
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { Progress } from "@/components/ui/progress"

<div>
  <p>素材整理 · 60%</p>
  <Progress value={60} aria-label="素材整理" />
</div>
```

## 主要属性

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| value | number or null | 必填 |
| min / max | number | 0 / 100 |
| aria-label / aria-labelledby | accessible name | — |

## 组合与可访问性

value 为 null 时显示静态短条，配合可见文字说明；组件同时处理进度语义和宽度。

完整属性以[分发源码](https://github.com/sogud/zhi/blob/main/registry/ui/progress.tsx)和已安装版本的类型定义为准。
