"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cn } from "@/registry/lib/utils";

export const Tabs = TabsPrimitive.Root;

export function TabsList({ className, ...props }: TabsPrimitive.List.Props) {
  return <TabsPrimitive.List data-slot="tabs-list" className={(state) => cn("flex gap-6 border-b border-border data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-2 data-[orientation=vertical]:border-b-0 data-[orientation=vertical]:border-l", typeof className === "function" ? className(state) : className)} {...props} />;
}

export function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={(state) => cn(
        "-mb-px border-b-2 border-transparent bg-transparent px-1 py-3 text-sm text-muted-foreground hover:text-foreground data-active:border-primary data-active:text-foreground data-disabled:pointer-events-none data-disabled:opacity-45 focus-visible:rounded-control focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring data-[orientation=vertical]:-ml-px data-[orientation=vertical]:mb-0 data-[orientation=vertical]:border-b-0 data-[orientation=vertical]:border-l-2 data-[orientation=vertical]:px-3 data-[orientation=vertical]:text-left",
        typeof className === "function" ? className(state) : className,
      )}
      {...props}
    />
  );
}

export function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return <TabsPrimitive.Panel data-slot="tabs-content" className={(state) => cn("py-6 text-sm leading-7 text-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring", typeof className === "function" ? className(state) : className)} {...props} />;
}
