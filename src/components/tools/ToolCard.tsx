import Image from "next/image";
import Link from "next/link";
import { Tool } from "@/data/tools";
import { cn } from "@/lib/utils";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.id}`}
      className="tool-card block bg-white border border-[#E5E7EB] rounded-md p-4 group relative transition-transform duration-150 ease-in-out hover:-translate-y-[2px] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]"
    >
      <div className="flex items-start gap-4 mb-3">
        <div 
          className={cn(
            "relative w-10 h-10 rounded border border-[#E5E7EB] flex items-center justify-center flex-shrink-0 overflow-hidden",
            tool.iconBgColor || "bg-[#F9FAFB]"
          )}
        >
          {tool.iconType === "image" && tool.iconValue ? (
            <Image src={tool.iconValue} alt={`${tool.name} Logo`} fill className="object-cover" sizes="40px" />
          ) : (
            <span className={cn("material-symbols-outlined", tool.iconTextColor || "text-gray-400")}>
               {tool.iconValue}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[16px] font-semibold text-[#030712] truncate leading-tight group-hover:text-primary transition-colors">
            {tool.name}
          </h3>
          {tool.verified && (
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
                Verified
              </span>
            </div>
          )}
        </div>
      </div>
      <p className="text-[14px] text-[#6B7280] leading-[1.6] line-clamp-2 mb-4 h-[44px]">
        {tool.description}
      </p>
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#F3F4F6]">
        <span className="inline-flex items-center px-2 py-1 rounded bg-[#F3F4F6] text-[#4B5563] text-[12px] font-medium">
          {tool.category}
        </span>
        <span className="text-[12px] text-[#9CA3AF]">{tool.pricing}</span>
      </div>
    </Link>
  );
}
