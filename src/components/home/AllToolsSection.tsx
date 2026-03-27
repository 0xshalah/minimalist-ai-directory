import { ToolCard } from "@/components/tools/ToolCard";
import { Tool } from "@/data/tools";
import Link from "next/link";

interface AllToolsSectionProps {
  tools: Tool[];
  searchQuery?: string;
  isSearchActive?: boolean;
}

export function AllToolsSection({ tools, searchQuery, isSearchActive }: AllToolsSectionProps) {
  return (
    <section>
      <h2 className="text-[20px] font-semibold text-[#030712] tracking-tight-custom mb-6">
        {isSearchActive ? `Search Results for "${searchQuery}"` : "Recently Added"}
      </h2>
      
      {tools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-[#E5E7EB] rounded-md bg-[#F9FAFB]">
          <span className="material-symbols-outlined text-[48px] text-[#9CA3AF] mb-4">search_off</span>
          <p className="text-[#030712] font-semibold text-[16px] mb-2">No tools found matching &quot;{searchQuery}&quot;</p>
          <p className="text-[#6B7280] text-[14px] mb-6 max-w-sm mx-auto">We couldn&apos;t find any tools matching your search criteria. Try adjusting your keywords or clearing the search.</p>
          <Link href="/" className="inline-flex h-[36px] px-4 bg-white hover:bg-gray-50 text-[#030712] border border-[#E5E7EB] rounded-md items-center justify-center text-[14px] font-medium transition-colors">
            Clear Search
          </Link>
        </div>
      )}
    </section>
  );
}
