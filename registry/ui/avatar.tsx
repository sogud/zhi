"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { cn } from "@/registry/lib/utils";

export function Avatar({ className, ...props }: AvatarPrimitive.Root.Props) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={(state) => cn("relative inline-flex size-9 shrink-0 overflow-hidden rounded-full bg-secondary text-secondary-foreground", typeof className === "function" ? className(state) : className)}
      {...props}
    />
  );
}

export function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={(state) => cn("size-full object-cover", typeof className === "function" ? className(state) : className)}
      {...props}
    />
  );
}

export function AvatarFallback({ className, ...props }: AvatarPrimitive.Fallback.Props) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={(state) => cn("flex size-full items-center justify-center text-sm font-medium", typeof className === "function" ? className(state) : className)}
      {...props}
    />
  );
}
