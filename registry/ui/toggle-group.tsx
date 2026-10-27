"use client";

import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import { Toggle } from "@/registry/ui/toggle";
import { cn } from "@/registry/lib/utils";

export function ToggleGroup<Value extends string = string>({ className, ...props }: ToggleGroupPrimitive.Props<Value>) {
  return <ToggleGroupPrimitive<Value> data-slot="toggle-group" className={(state) => cn("inline-flex flex-wrap gap-1 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch", typeof className === "function" ? className(state) : className)} {...props} />;
}

export const ToggleGroupItem = Toggle;
