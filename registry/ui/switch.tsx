"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import { cn } from "@/registry/lib/utils";

export function ZSwitch({ className, ...props }: SwitchPrimitive.Root.Props) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "relative inline-flex h-5 w-8 shrink-0 items-center rounded-full border border-input bg-muted p-[2px] data-checked:border-primary data-checked:bg-primary focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring disabled:opacity-45",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb className="block size-[14px] rounded-full bg-foreground transition-transform data-checked:translate-x-3 data-checked:bg-primary-foreground motion-reduce:transition-none" />
    </SwitchPrimitive.Root>
  );
}
