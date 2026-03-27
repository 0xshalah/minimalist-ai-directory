import { cn } from "@/lib/utils";
import Link from "next/link";

interface CategoryPillProps {
  label: string;
  href: string;
  isActive?: boolean;
}

export function CategoryPill({ label, href, isActive }: CategoryPillProps) {
  return (
    <Link
      href={href}
      className={cn(
        "whitespace-nowrap px-4 py-2 border rounded-full text-[13px] font-medium transition-colors",
        isActive
          ? "bg-[#F9FAFB] text-[#030712] border-[#E5E7EB] hover:bg-white"
          : "bg-white text-[#6B7280] border-transparent hover:bg-[#F9FAFB]"
      )}
    >
      {label}
    </Link>
  );
}
