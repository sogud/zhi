"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { cn } from "@/registry/lib/utils";

export function Toggle<Value extends string = string>({ className, ...props }: TogglePrimitive.Props<Value>) {
  return <TogglePrimitive<Value> data-slot="toggle" className={(state) => cn("inline-flex min-h-9 min-w-9 items-center justify-center gap-2 rounded-control border border-transparent bg-transparent px-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground data-pressed:border-border data-pressed:bg-secondary data-pressed:text-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring data-disabled:pointer-events-none data-disabled:opacity-45", typeof className === "function" ? className(state) : className)} {...props} />;
}
