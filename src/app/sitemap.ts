import { MetadataRoute } from 'next';
import { tools, getAllCategories } from '@/data/tools';
import { SITE_URL, normalizeCategorySlug } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const categories = getAllCategories().filter(c => c !== "All Tools");

  const categoryUrls = categories.map((cat) => ({
    url: `${SITE_URL}/category/${normalizeCategorySlug(cat)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const toolUrls = tools.map((tool) => ({
    url: `${SITE_URL}/tools/${tool.slug}`,
    lastModified: new Date(tool.addedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...categoryUrls,
    ...toolUrls,
  ];
}
