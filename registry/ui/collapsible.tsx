"use client";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import { cn } from "@/registry/lib/utils";

export const Collapsible = CollapsiblePrimitive.Root;

export function CollapsibleTrigger({ className, ...props }: CollapsiblePrimitive.Trigger.Props) {
  return <CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" className={(state) => cn("inline-flex min-h-9 items-center gap-2 rounded-control px-3 text-sm font-medium text-foreground hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring data-disabled:opacity-45", typeof className === "function" ? className(state) : className)} {...props} />;
}

export function CollapsibleContent({ className, ...props }: CollapsiblePrimitive.Panel.Props) {
  return <CollapsiblePrimitive.Panel data-slot="collapsible-content" className={(state) => cn("pt-3 text-sm leading-7 text-muted-foreground", typeof className === "function" ? className(state) : className)} {...props} />;
}
