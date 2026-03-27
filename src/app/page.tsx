import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { AllToolsSection } from "@/components/home/AllToolsSection";
import { CategoryPill } from "@/components/ui/CategoryPill";
import { WebSiteJsonLd, ItemListJsonLd } from "@/components/seo/json-ld";
import { getAllTools, getAllCategories, getRecentTools } from "@/data/tools";
import { normalizeCategorySlug } from "@/lib/seo";

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const resolvedParams = await searchParams;
  const q = typeof resolvedParams?.q === 'string' ? resolvedParams.q : '';

  const allTools = getAllTools();
  const categories = getAllCategories();
  
  let displayedTools = [];
  if (q) {
    const lowerQ = q.toLowerCase();
    displayedTools = allTools.filter(t => 
      t.name.toLowerCase().includes(lowerQ) ||
      t.tagline.toLowerCase().includes(lowerQ) ||
      t.longDescription.toLowerCase().includes(lowerQ) ||
      t.category.toLowerCase().includes(lowerQ) ||
      t.tags.some(tag => tag.toLowerCase().includes(lowerQ))
    );
  } else {
    displayedTools = getRecentTools();
  }

  return (
    <>
      <WebSiteJsonLd />
      <ItemListJsonLd tools={allTools} />
      
      <Navbar />
      <main className="w-full pb-24">
        <Container>
          {!q && <HeroSection />}
          
          {/* Categories Nav (Horizontal Scroll) */}
          <nav className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-8 border-b border-[#E5E7EB] mt-8">
            {categories.map((cat) => (
              <CategoryPill 
                key={cat}
                label={cat} 
                href={cat === "All Tools" ? "/" : `/category/${normalizeCategorySlug(cat)}`} 
                isActive={cat === "All Tools" && !q} 
              />
            ))}
          </nav>

          {!q && <FeaturedSection />}
          <AllToolsSection tools={displayedTools} searchQuery={q} isSearchActive={!!q} />
        </Container>
      </main>
    </>
  );
}
