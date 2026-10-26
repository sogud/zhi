"use client";

import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { cn } from "@/registry/lib/utils";

export function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return <RadioGroupPrimitive data-slot="radio-group" className={(state) => cn("grid gap-3", typeof className === "function" ? className(state) : className)} {...props} />;
}

export function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={(state) => cn(
        "inline-flex size-4 shrink-0 items-center justify-center rounded-full border border-input bg-card text-primary focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring data-checked:border-primary data-disabled:opacity-45",
        typeof className === "function" ? className(state) : className,
      )}
      {...props}
    >
      <RadioPrimitive.Indicator className="size-2 rounded-full bg-current" />
    </RadioPrimitive.Root>
  );
}
