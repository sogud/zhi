# Accordion 折叠面板

按需展开次要内容，保持页面清楚。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/accordion
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

<Accordion defaultValue={["themes"]}>
  <AccordionItem value="themes">
    <AccordionTrigger>可以切换主题吗？</AccordionTrigger>
    <AccordionContent>可以，设置根节点的 data-theme 即可。</AccordionContent>
  </AccordionItem>
</Accordion>
```

## 主要属性

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| value / defaultValue | array of item values | — |
| onValueChange | (values, details) => void | — |
| multiple | boolean | false |

## 组合与可访问性

根值是数组。AccordionTrigger 包含 h3 标题和方向图标；AccordionItem 可用 disabled。

完整属性以[分发源码](../../registry/ui/accordion.tsx)和已安装版本的类型定义为准。
