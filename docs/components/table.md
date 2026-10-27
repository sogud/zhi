# Table 表格

用原生表格语义展示可对照的数据，数值列保持右对齐。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/table
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import {
  Table, TableHeader, TableBody, TableRow,
  TableHead, TableCell, TableCaption,
} from "@/components/ui/table"

<Table>
  <TableCaption>本周阅读清单。</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead scope="col">作品</TableHead>
      <TableHead scope="col" className="text-right">字数</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableHead scope="row">一页之间</TableHead>
      <TableCell className="text-right tabular-nums">1,280</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## 主要属性

| 部件 | 原生元素 | 说明 |
| --- | --- | --- |
| Table | table | 外层容器在内容过宽时横向滚动 |
| TableHeader / TableBody / TableFooter | thead / tbody / tfoot | 表头、数据及汇总 |
| TableRow | tr | 可用 data-state="selected" 显示已有选择状态 |
| TableHead | th | 列标题使用 scope="col"，行标题使用 scope="row" |
| TableCell | td | 支持 colSpan、rowSpan 与 className |
| TableCaption | caption | 说明这张表展示什么 |

## 组合与可访问性

所有部件接受对应原生元素属性。保留 caption 和明确的表头关系；不要仅靠颜色区分状态。数字列的表头与内容一起右对齐，可用 `tabular-nums` 方便比较。

组件只提供表格结构和样式，不包含排序、筛选、分页、虚拟滚动或选择状态管理。需要排序时由业务层实现操作、数据排序和 `aria-sort`。窄屏保留数据列，通过外层容器横向滚动，不隐藏关键字段。

完整属性以[分发源码](../../registry/ui/table.tsx)为准。
