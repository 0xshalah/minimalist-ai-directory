import { notFound } from "next/navigation";
import { getToolsByCategory, getAllCategories } from "@/data/tools";
import { normalizeCategorySlug } from "@/lib/seo";
import { ToolCard } from "@/components/tools/ToolCard";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { CollectionPageJsonLd, BreadcrumbListJsonLd } from "@/components/seo/json-ld";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import { Metadata } from "next";
import Link from "next/link";

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({
    slug: normalizeCategorySlug(cat),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const categories = getAllCategories();
  const activeCategory = categories.find(c => normalizeCategorySlug(c) === resolvedParams.slug);

  if (!activeCategory) return {};

  return constructMetadata({
    title: `${activeCategory} Tools | Minimalist AI Directory`,
    description: `Browse the best curated AI tools in the ${activeCategory} category.`,
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const categories = getAllCategories();
  const activeCategory = categories.find(c => normalizeCategorySlug(c) === resolvedParams.slug);

  if (!activeCategory) {
    notFound();
  }

  const tools = getToolsByCategory(resolvedParams.slug);

  return (
    <>
      <CollectionPageJsonLd 
        name={`${activeCategory} Tools`} 
        description={`Browse ${activeCategory} category tools.`} 
        url={`${SITE_URL}/category/${resolvedParams.slug}`} 
      />
      <BreadcrumbListJsonLd 
        items={[
          { name: "Home", url: SITE_URL },
          { name: activeCategory }
        ]} 
      />
      
      <Navbar />
      <main className="w-full pb-24 pt-8">
        <Container>
          <div className="mb-8">
            <h1 className="text-[32px] font-bold text-[#030712] tracking-tight-custom mb-2">
              {activeCategory} Tools
            </h1>
            <p className="text-[16px] text-[#6B7280]">
              Showing {tools.length} result{tools.length !== 1 && 's'} in this category.
            </p>
          </div>

          {tools.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-[#E5E7EB] rounded-md bg-[#F9FAFB]">
              <span className="material-symbols-outlined text-[48px] text-[#9CA3AF] mb-4">category</span>
              <p className="text-[#030712] font-semibold text-[16px] mb-2">No tools found in {activeCategory}</p>
              <p className="text-[#6B7280] text-[14px] mb-6 max-w-sm mx-auto">We are still curating and adding the best AI tools for this specific category. Check back soon!</p>
              <Link href="/" className="inline-flex h-[36px] px-4 bg-white hover:bg-gray-50 text-[#030712] border border-[#E5E7EB] rounded-md items-center justify-center text-[14px] font-medium transition-colors">
                Return Home
              </Link>
            </div>
          )}
        </Container>
      </main>
    </>
  );
}
