"use client";

import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import { cn } from "@/registry/lib/utils";

export function Slider<Value extends number | readonly number[] = number | readonly number[]>({ className, ...props }: SliderPrimitive.Root.Props<Value>) {
  return <SliderPrimitive.Root<Value> data-slot="slider" className={(state) => cn("flex w-full flex-col gap-2 data-disabled:opacity-45 data-[orientation=vertical]:h-40 data-[orientation=vertical]:w-auto", typeof className === "function" ? className(state) : className)} {...props} />;
}

export function SliderLabel({ className, ...props }: SliderPrimitive.Label.Props) {
  return <SliderPrimitive.Label data-slot="slider-label" className={(state) => cn("text-sm font-medium text-foreground", typeof className === "function" ? className(state) : className)} {...props} />;
}

export function SliderValue({ className, ...props }: SliderPrimitive.Value.Props) {
  return <SliderPrimitive.Value data-slot="slider-value" className={(state) => cn("text-sm tabular-nums text-muted-foreground", typeof className === "function" ? className(state) : className)} {...props} />;
}

export function SliderControl({ className, ...props }: SliderPrimitive.Control.Props) {
  return <SliderPrimitive.Control data-slot="slider-control" className={(state) => cn("relative flex h-9 w-full touch-none items-center select-none data-[orientation=vertical]:h-full data-[orientation=vertical]:w-9 data-[orientation=vertical]:justify-center", typeof className === "function" ? className(state) : className)} {...props} />;
}

export function SliderTrack({ className, ...props }: SliderPrimitive.Track.Props) {
  return <SliderPrimitive.Track data-slot="slider-track" className={(state) => cn("h-1 w-full rounded-full bg-border data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1", typeof className === "function" ? className(state) : className)} {...props} />;
}

export function SliderRange({ className, ...props }: SliderPrimitive.Indicator.Props) {
  return <SliderPrimitive.Indicator data-slot="slider-range" className={(state) => cn("rounded-full bg-primary", typeof className === "function" ? className(state) : className)} {...props} />;
}

export function SliderThumb({ className, ...props }: SliderPrimitive.Thumb.Props) {
  return <SliderPrimitive.Thumb data-slot="slider-thumb" className={(state) => cn("block size-4 rounded-full border border-primary bg-card has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-ring", typeof className === "function" ? className(state) : className)} {...props} />;
}
