"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cn } from "@/registry/lib/utils";

export const Select = SelectPrimitive.Root;
export const SelectValue = SelectPrimitive.Value;
export const SelectGroup = SelectPrimitive.Group;
export const SelectLabel = SelectPrimitive.GroupLabel;

export function SelectTrigger({ className, children, ...props }: SelectPrimitive.Trigger.Props) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={(state) => cn(
        "flex h-[var(--zhi-control-md)] w-full items-center justify-between gap-3 rounded-control border border-input bg-card px-3 text-sm text-foreground data-placeholder:text-muted-foreground data-disabled:opacity-45 aria-invalid:border-destructive focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring",
        typeof className === "function" ? className(state) : className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m4 6 4 4 4-4" /></svg>
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

export function SelectContent({ className, children, ...props }: SelectPrimitive.Popup.Props) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner sideOffset={6} alignItemWithTrigger={false} className="z-50">
        <SelectPrimitive.Popup
          data-slot="select-content"
          className={(state) => cn(
            "max-h-[var(--available-height)] min-w-[var(--anchor-width)] max-w-[calc(100vw-2rem)] overflow-y-auto rounded-control border border-border bg-card p-1 text-card-foreground shadow-md outline-none",
            typeof className === "function" ? className(state) : className,
          )}
          {...props}
        >
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

export function SelectItem({ className, children, ...props }: SelectPrimitive.Item.Props) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={(state) => cn(
        "relative flex min-h-9 cursor-default items-center rounded-control py-2 pl-8 pr-3 text-sm outline-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-45",
        typeof className === "function" ? className(state) : className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemIndicator className="absolute left-2 flex size-4 items-center justify-center" aria-hidden="true">✓</SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}
