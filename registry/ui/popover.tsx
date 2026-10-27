"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import { cn } from "@/registry/lib/utils";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverClose = PopoverPrimitive.Close;

type PopoverContentProps = PopoverPrimitive.Popup.Props & Pick<PopoverPrimitive.Positioner.Props, "side" | "align" | "sideOffset" | "alignOffset">;

export function PopoverContent({ className, side = "bottom", align = "start", sideOffset = 8, alignOffset, ...props }: PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset} collisionPadding={16} className="z-50">
        <PopoverPrimitive.Popup
          data-slot="popover-content"
          className={(state) => cn(
            "max-h-[var(--available-height)] w-80 max-w-[calc(100vw-2rem)] overflow-y-auto rounded-panel border border-border bg-card p-6 text-card-foreground shadow-sm outline-none",
            typeof className === "function" ? className(state) : className,
          )}
          {...props}
        />
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  );
}

export function PopoverTitle({ className, ...props }: PopoverPrimitive.Title.Props) {
  return <PopoverPrimitive.Title data-slot="popover-title" className={(state) => cn("m-0 text-base font-medium leading-6", typeof className === "function" ? className(state) : className)} {...props} />;
}

export function PopoverDescription({ className, ...props }: PopoverPrimitive.Description.Props) {
  return <PopoverPrimitive.Description data-slot="popover-description" className={(state) => cn("mb-5 mt-2 text-sm leading-6 text-muted-foreground", typeof className === "function" ? className(state) : className)} {...props} />;
}
