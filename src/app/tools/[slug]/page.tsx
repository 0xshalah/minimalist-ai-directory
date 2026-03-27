import Image from "next/image";
import { notFound } from "next/navigation";
import { tools, getToolBySlug } from "@/data/tools";
import { normalizeCategorySlug, SITE_URL, constructMetadata } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/layout/Container";
import { SoftwareApplicationJsonLd, BreadcrumbListJsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";
import Link from "next/link";

export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const tool = getToolBySlug(resolvedParams.slug);

  if (!tool) return {};

  return constructMetadata({
    title: `${tool.name} - ${tool.tagline} | AI Directory`,
    description: tool.description,
  });
}

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const tool = getToolBySlug(resolvedParams.slug);

  if (!tool) {
    notFound();
  }

  const catSlug = normalizeCategorySlug(tool.category);

  return (
    <>
      <SoftwareApplicationJsonLd tool={tool} />
      <BreadcrumbListJsonLd 
        items={[
          { name: "Home", url: SITE_URL },
          { name: tool.category, url: `${SITE_URL}/category/${catSlug}` },
          { name: tool.name }
        ]} 
      />
      
      <Navbar />
      <main className="w-full pb-24 pt-8">
        <Container>
          {/* Visual Breadcrumb Navigation */}
          <nav className="flex flex-wrap items-center gap-2 text-[13px] text-[#6B7280] mb-6">
            <Link href="/" className="hover:text-[#030712] transition-colors">Home</Link>
            <span className="text-[#D1D5DB]">/</span>
            <Link href={`/category/${normalizeCategorySlug(tool.category)}`} className="hover:text-[#030712] transition-colors">{tool.category}</Link>
            <span className="text-[#D1D5DB]">/</span>
            <span className="text-[#030712] font-medium">{tool.name}</span>
          </nav>

          {/* Main Info Card */}
          <div className="w-full bg-white border border-[#E5E7EB] rounded-lg p-6 sm:p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-[#F3F4F6] pb-8 mb-8">
              <div className="flex items-start gap-4">
                <div className={`relative w-16 h-16 rounded border border-[#E5E7EB] flex flex-shrink-0 items-center justify-center overflow-hidden ${tool.iconBgColor || "bg-[#F9FAFB]"}`}>
                  {tool.iconType === "image" && tool.iconValue ? (
                    <Image src={tool.iconValue} alt={`${tool.name} Logo`} fill className="object-cover" sizes="64px" />
                  ) : (
                    <span className={`material-symbols-outlined text-[32px] ${tool.iconTextColor || "text-gray-400"}`}>
                       {tool.iconValue}
                    </span>
                  )}
                </div>
                <div>
                  <h1 className="text-[24px] font-bold text-[#030712] tracking-tight-custom leading-tight flex items-center gap-2">
                    {tool.name}
                    {tool.verified && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[12px] font-medium bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
                        Verified
                      </span>
                    )}
                  </h1>
                  <p className="text-[16px] text-[#4B5563] mt-1">{tool.tagline}</p>
                </div>
              </div>
              <a 
                href={tool.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex h-[40px] px-6 bg-[#030712] hover:bg-gray-800 text-white rounded-md items-center justify-center text-[14px] font-medium tracking-[0.01em] transition-colors"
               >
                Visit Website
               </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-8">
                <section>
                  <h2 className="text-[18px] font-semibold text-[#030712] tracking-tight-custom mb-3">About {tool.name}</h2>
                  <p className="text-[15px] text-[#4B5563] leading-[1.7] whitespace-pre-line">
                    {tool.longDescription}
                  </p>
                </section>

                <section>
                  <h2 className="text-[18px] font-semibold text-[#030712] tracking-tight-custom mb-3">Core Features</h2>
                  <ul className="space-y-2">
                    {tool.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-[15px] text-[#4B5563]">
                        <span className="material-symbols-outlined text-[#059669] text-[20px] shrink-0">check_circle</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <section>
                    <h3 className="text-[16px] font-semibold text-[#030712] tracking-tight-custom mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#059669] text-[20px]">thumb_up</span>
                      Pros
                    </h3>
                    <ul className="space-y-2">
                      {tool.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-[14px] text-[#4B5563]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#059669] shrink-0 mt-2"></span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h3 className="text-[16px] font-semibold text-[#030712] tracking-tight-custom mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#DC2626] text-[20px]">thumb_down</span>
                      Cons
                    </h3>
                    <ul className="space-y-2">
                      {tool.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-[14px] text-[#4B5563]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0 mt-2"></span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#F9FAFB] rounded-md p-5 border border-[#E5E7EB]">
                  <h3 className="text-[14px] font-semibold text-[#030712] uppercase tracking-wider mb-4">Details</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="block text-[13px] text-[#6B7280] mb-1">Category</span>
                      <a href={`/category/${catSlug}`} className="inline-flex items-center px-2 py-1 rounded bg-white border border-[#E5E7EB] text-[#4B5563] text-[13px] font-medium hover:bg-gray-50">
                        {tool.category}
                      </a>
                    </div>
                    <div>
                      <span className="block text-[13px] text-[#6B7280] mb-1">Pricing Model</span>
                      <span className="text-[14px] font-medium text-[#030712]">{tool.pricing}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold text-[#030712] mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-[#F3F4F6] text-[#4B5563] text-[12px] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </Container>
      </main>
    </>
  );
}
