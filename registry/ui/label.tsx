import type { ComponentProps } from "react";
import { cn } from "@/registry/lib/utils";

export function Label({ className, ...props }: ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn("text-sm font-medium leading-5 text-foreground", className)}
      {...props}
    />
  );
}
