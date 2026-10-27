import type { ComponentProps } from "react";
import { cn } from "@/registry/lib/utils";

export function Skeleton({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="skeleton" aria-hidden="true" className={cn("rounded-control bg-secondary", className)} {...props} />;
}
