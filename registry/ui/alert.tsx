import type { ComponentProps } from "react";
import { cn } from "@/registry/lib/utils";

export function Alert({ className, variant = "default", ...props }: ComponentProps<"div"> & { variant?: "default" | "destructive" }) {
  return (
    <div
      data-slot="alert"
      role="note"
      className={cn(
        "rounded-control border border-border border-l-2 bg-card p-4 text-sm leading-6 text-card-foreground",
        variant === "destructive" && "border-destructive text-destructive",
        className,
      )}
      {...props}
    />
  );
}

export function AlertTitle({ className, ...props }: ComponentProps<"h4">) {
  return <h4 data-slot="alert-title" className={cn("m-0 mb-1 text-sm font-medium", className)} {...props} />;
}

export function AlertDescription({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="alert-description" className={cn("text-sm leading-6", className)} {...props} />;
}
