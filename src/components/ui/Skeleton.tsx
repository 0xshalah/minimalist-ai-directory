import { cn } from "@/lib/utils";

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-[#F3F4F6]", className)}
      {...props}
    />
  );
}
