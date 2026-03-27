import Link from "next/link";
import { ToolCard } from "@/components/tools/ToolCard";
import { getFeaturedTools } from "@/data/tools";

export function FeaturedSection() {
  const tools = getFeaturedTools();

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[20px] font-semibold text-[#030712] tracking-tight-custom">Featured</h2>
        <Link href="/featured" className="text-[14px] text-primary hover:underline font-medium">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}
