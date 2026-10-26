"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { cn } from "@/registry/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return <AccordionPrimitive.Item data-slot="accordion-item" className={(state) => cn("border-b border-border", typeof className === "function" ? className(state) : className)} {...props} />;
}

export function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="m-0 text-sm font-medium">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={(state) => cn(
          "group flex w-full items-center justify-between gap-4 rounded-control bg-transparent py-4 text-left text-foreground hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring data-disabled:opacity-45",
          typeof className === "function" ? className(state) : className,
        )}
        {...props}
      >
        {children}
        <svg className="size-4 shrink-0 group-data-panel-open:rotate-180" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m4 6 4 4 4-4" /></svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({ className, ...props }: AccordionPrimitive.Panel.Props) {
  return <AccordionPrimitive.Panel data-slot="accordion-content" className={(state) => cn("pb-5 pr-8 text-sm leading-7 text-muted-foreground", typeof className === "function" ? className(state) : className)} {...props} />;
}
