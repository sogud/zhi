"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/registry/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-control border border-transparent px-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-45 motion-reduce:transition-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground enabled:hover:bg-primary-hover",
        outline:
          "border-input bg-transparent text-foreground enabled:hover:bg-accent",
        ghost: "bg-transparent text-foreground enabled:hover:bg-accent",
        destructive:
          "bg-destructive text-destructive-foreground enabled:hover:opacity-90",
        seal:
          "border-[var(--zhi-palette-seal)] bg-[var(--zhi-palette-seal)] text-white shadow-[inset_0_0_0_2px_var(--zhi-palette-seal),inset_0_0_0_3px_#ffffff66] enabled:hover:opacity-90",
      },
      size: {
        default: "h-[var(--zhi-control-md)]",
        sm: "h-[var(--zhi-control-sm)] px-2 text-xs",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
