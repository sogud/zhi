import { useState } from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/registry/ui/collapsible";
import { Slider, SliderLabel, SliderValue, SliderControl, SliderTrack, SliderRange, SliderThumb } from "@/registry/ui/slider";
import { Toggle } from "@/registry/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/registry/ui/toggle-group";

export function CollapsibleDemo() {
  const [open, setOpen] = useState(false);
  return <div className="grid w-full gap-4"><Collapsible open={open} onOpenChange={setOpen}><CollapsibleTrigger>{open ? "收起" : "查看"}排版说明</CollapsibleTrigger><CollapsibleContent>正文使用舒适行距，长段落保持一致的左边界。</CollapsibleContent></Collapsible><Collapsible disabled><CollapsibleTrigger>历史版本（暂不可用）</CollapsibleTrigger><CollapsibleContent>暂无历史版本。</CollapsibleContent></Collapsible></div>;
}

export function SliderDemo() {
  const [size, setSize] = useState(16);
  const [range, setRange] = useState<readonly number[]>([20, 70]);
  return <div className="grid w-full max-w-sm gap-6"><Slider value={size} onValueChange={setSize} min={12} max={24}><div className="flex items-center justify-between"><SliderLabel>正文字号</SliderLabel><SliderValue>{(values) => `${values[0]} px`}</SliderValue></div><SliderControl><SliderTrack><SliderRange /></SliderTrack><SliderThumb index={0} /></SliderControl></Slider><Slider value={range} onValueChange={setRange} minStepsBetweenValues={5}><div className="flex items-center justify-between"><SliderLabel>阅读进度范围</SliderLabel><SliderValue>{(values) => `${values.join(" – ")}%`}</SliderValue></div><SliderControl><SliderTrack><SliderRange /></SliderTrack><SliderThumb index={0} aria-label="开始进度" /><SliderThumb index={1} aria-label="结束进度" /></SliderControl></Slider><Slider defaultValue={40} disabled><SliderLabel>锁定进度</SliderLabel><SliderControl><SliderTrack><SliderRange /></SliderTrack><SliderThumb index={0} /></SliderControl></Slider><p className="m-0 leading-7" style={{ fontSize: size }}>把注意力留给正在阅读的内容。</p></div>;
}

export function ToggleDemo() {
  const [pressed, setPressed] = useState(false);
  return <div className="grid gap-4"><div className="flex flex-wrap gap-2"><Toggle pressed={pressed} onPressedChange={setPressed}>加粗</Toggle><Toggle disabled>下划线</Toggle></div><p className="m-0 text-sm" style={{ fontWeight: pressed ? 700 : 400 }}>字重随选中状态改变。</p></div>;
}

export function ToggleGroupDemo() {
  const [alignment, setAlignment] = useState<string[]>(["left"]);
  const [formats, setFormats] = useState<string[]>([]);
  const current = alignment[0];
  const textAlign = current === "center" ? "center" : current === "right" ? "right" : "left";
  return <div className="grid w-full gap-4"><ToggleGroup value={alignment} onValueChange={setAlignment} aria-label="文字对齐"><ToggleGroupItem value="left">左对齐</ToggleGroupItem><ToggleGroupItem value="center">居中</ToggleGroupItem><ToggleGroupItem value="right">右对齐</ToggleGroupItem><ToggleGroupItem value="justify" disabled>两端对齐</ToggleGroupItem></ToggleGroup><ToggleGroup multiple value={formats} onValueChange={setFormats} aria-label="文字样式"><ToggleGroupItem value="bold">加粗</ToggleGroupItem><ToggleGroupItem value="italic">斜体</ToggleGroupItem></ToggleGroup><p className="m-0 text-sm leading-7" style={{ textAlign, fontWeight: formats.includes("bold") ? 700 : 400, fontStyle: formats.includes("italic") ? "italic" : "normal" }}>用合适的对齐方式组织文字。</p></div>;
}
