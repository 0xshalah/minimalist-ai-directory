import { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://minimalistaidirectory.com";

export function constructMetadata({
  title = "Minimalist AI Directory",
  description = "A hyper-curated, distraction-free index of AI workflows. No marketing noise, just utility.",
  image = "/og-image.jpg",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@minimalistaidir",
    },
    icons,
    metadataBase: new URL(SITE_URL),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export function normalizeCategorySlug(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}
