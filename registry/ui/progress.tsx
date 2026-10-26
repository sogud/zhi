"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { cn } from "@/registry/lib/utils";

export function Progress({ className, ...props }: ProgressPrimitive.Root.Props) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={(state) => cn("w-full", typeof className === "function" ? className(state) : className)}
      {...props}
    >
      <ProgressPrimitive.Track className="h-1.5 overflow-hidden rounded-full bg-secondary">
        <ProgressPrimitive.Indicator className="h-full rounded-full bg-primary data-indeterminate:w-1/3 data-indeterminate:bg-muted-foreground" />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  );
}
