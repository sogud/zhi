"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { cn } from "@/registry/lib/utils";

export const DropdownMenu = MenuPrimitive.Root;
export const DropdownMenuTrigger = MenuPrimitive.Trigger;
export const DropdownMenuGroup = MenuPrimitive.Group;
export const DropdownMenuRadioGroup = MenuPrimitive.RadioGroup;

type DropdownMenuContentProps = MenuPrimitive.Popup.Props & Pick<MenuPrimitive.Positioner.Props, "side" | "align" | "sideOffset" | "alignOffset">;

export function DropdownMenuContent({ className, side = "bottom", align = "start", sideOffset = 6, alignOffset, ...props }: DropdownMenuContentProps) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset} collisionPadding={16} className="z-50">
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-content"
          className={(state) => cn(
            "max-h-[var(--available-height)] min-w-48 max-w-[calc(100vw-2rem)] overflow-y-auto rounded-panel border border-border bg-card p-1 text-card-foreground shadow-sm outline-none",
            typeof className === "function" ? className(state) : className,
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

const itemClasses = "relative flex min-h-9 cursor-default items-center gap-3 rounded-control px-3 py-2 text-sm outline-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-45";

export function DropdownMenuItem({ className, ...props }: MenuPrimitive.Item.Props) {
  return <MenuPrimitive.Item data-slot="dropdown-menu-item" className={(state) => cn(itemClasses, typeof className === "function" ? className(state) : className)} {...props} />;
}

export function DropdownMenuCheckboxItem({ className, children, ...props }: MenuPrimitive.CheckboxItem.Props) {
  return (
    <MenuPrimitive.CheckboxItem data-slot="dropdown-menu-checkbox-item" className={(state) => cn(itemClasses, "pl-8", typeof className === "function" ? className(state) : className)} {...props}>
      <MenuPrimitive.CheckboxItemIndicator className="absolute left-2 flex size-4 items-center justify-center" aria-hidden="true">✓</MenuPrimitive.CheckboxItemIndicator>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
}

export function DropdownMenuRadioItem({ className, children, ...props }: MenuPrimitive.RadioItem.Props) {
  return (
    <MenuPrimitive.RadioItem data-slot="dropdown-menu-radio-item" className={(state) => cn(itemClasses, "pl-8", typeof className === "function" ? className(state) : className)} {...props}>
      <MenuPrimitive.RadioItemIndicator className="absolute left-2 flex size-4 items-center justify-center" aria-hidden="true">●</MenuPrimitive.RadioItemIndicator>
      {children}
    </MenuPrimitive.RadioItem>
  );
}

export function DropdownMenuLabel({ className, ...props }: MenuPrimitive.GroupLabel.Props) {
  return <MenuPrimitive.GroupLabel data-slot="dropdown-menu-label" className={(state) => cn("px-3 py-2 text-xs leading-5 text-muted-foreground", typeof className === "function" ? className(state) : className)} {...props} />;
}

export function DropdownMenuSeparator({ className, ...props }: MenuPrimitive.Separator.Props) {
  return <MenuPrimitive.Separator data-slot="dropdown-menu-separator" className={(state) => cn("my-1 h-px bg-border", typeof className === "function" ? className(state) : className)} {...props} />;
}
