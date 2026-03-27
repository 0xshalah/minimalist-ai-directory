import { Tool } from "@/data/tools";
import { SITE_URL } from "@/lib/seo";

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Minimalist AI Directory",
    "url": SITE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function ItemListJsonLd({ tools, name }: { tools: Tool[], name?: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": name || "AI Tools List",
    "itemListElement": tools.map((tool, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": tool.name,
        "url": `${SITE_URL}/tools/${tool.slug}`,
        "applicationCategory": tool.category,
      }
    }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function SoftwareApplicationJsonLd({ tool }: { tool: Tool }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "description": tool.longDescription,
    "applicationCategory": tool.category,
    "offers": {
      "@type": "Offer",
      "price": tool.pricing === "Free" ? "0" : undefined,
      "priceCurrency": "USD"
    },
    "url": `${SITE_URL}/tools/${tool.slug}`
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function CollectionPageJsonLd({ name, description, url }: { name: string, description: string, url: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": name,
    "description": description,
    "url": url
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function BreadcrumbListJsonLd({ items }: { items: { name: string, url?: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.url && { "item": item.url })
    }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
