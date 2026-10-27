# Slider 滑块

调节连续数值或区间，适合字号、音量和范围筛选。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/slider
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import {
  Slider, SliderLabel, SliderValue, SliderControl,
  SliderTrack, SliderRange, SliderThumb,
} from "@/components/ui/slider"

<Slider defaultValue={16} min={12} max={24}>
  <div className="flex justify-between">
    <SliderLabel>正文字号</SliderLabel>
    <SliderValue>{(values) => `${values[0]} px`}</SliderValue>
  </div>
  <SliderControl>
    <SliderTrack><SliderRange /></SliderTrack>
    <SliderThumb index={0} />
  </SliderControl>
</Slider>

<Slider defaultValue={[20, 70]} minStepsBetweenValues={5}>
  <SliderLabel>阅读进度范围</SliderLabel>
  <SliderControl>
    <SliderTrack><SliderRange /></SliderTrack>
    <SliderThumb index={0} aria-label="开始进度" />
    <SliderThumb index={1} aria-label="结束进度" />
  </SliderControl>
</Slider>
```

## 主要属性

| 部件 | 属性 | 说明 |
| --- | --- | --- |
| Slider | value / defaultValue | 单值 number 或区间 number[] |
| Slider | onValueChange | `(value, details) => void`；拖动或键盘变化时调用 |
| Slider | onValueCommitted | 完成本次操作时调用，适合延后保存 |
| Slider | min / max / step | 默认 0 / 100 / 1；min 与 max 不得相等 |
| Slider | orientation | horizontal（默认）或 vertical |
| Slider | disabled | 禁用全部滑块 |
| Slider | minStepsBetweenValues | 区间手柄间的最小步数，默认 0 |
| Slider | thumbCollisionBehavior | push（默认）、swap 或 none |
| Slider | name / form | 原生表单字段和归属表单 |
| SliderThumb | index | 与数值数组下标一致；区间与服务端渲染必须提供 |
| SliderThumb | aria-label / getAriaValueText | 单独命名手柄，提供带单位的读数 |

`SliderRange` 是 Base UI Indicator 的样式包装。竖向布局设置 `orientation="vertical"`，并为根节点提供所需高度，如 `className="h-48"`；标签与读数可放在外部，通过每个手柄的 `aria-label` 关联含义。

## 组合与可访问性

`SliderLabel` 自动关联手柄；区间的两个手柄需要“开始”“结束”等不同名称。方向键按 step 调整，Home / End 移到可用边界，Page Up / Page Down 按 largeStep 调整。手柄焦点轮廓作用于内部 range input。不要隐藏数值含义；精确输入频繁时，另外提供数字输入框。

完整属性以[分发源码](https://github.com/sogud/zhi/blob/main/registry/ui/slider.tsx)和已安装版本的类型定义为准。
