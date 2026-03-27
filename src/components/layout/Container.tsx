import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("w-full max-w-[1024px] mx-auto px-4 sm:px-6", className)}>
      {children}
    </div>
  );
}
