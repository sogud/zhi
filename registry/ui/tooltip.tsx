"use client";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import { cn } from "@/registry/lib/utils";

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

type TooltipContentProps = TooltipPrimitive.Popup.Props & Pick<TooltipPrimitive.Positioner.Props, "side" | "align" | "sideOffset" | "alignOffset">;

export function TooltipContent({ className, side = "top", align = "center", sideOffset = 8, alignOffset, ...props }: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset} collisionPadding={16} className="z-50">
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          className={(state) => cn(
            "max-h-[var(--available-height)] max-w-[min(20rem,calc(100vw-2rem))] overflow-y-auto rounded-control bg-primary px-3 py-2 text-xs leading-5 text-primary-foreground",
            typeof className === "function" ? className(state) : className,
          )}
          {...props}
        />
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  );
}
