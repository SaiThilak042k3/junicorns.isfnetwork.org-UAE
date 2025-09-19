import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();

  return [
    {
      url: 'https://globalaisummit.isfnetwork.org/',
      lastModified,
    },
    {
      url: 'https://globalaisummit.isfnetwork.org/register',
      lastModified,
    },
    {
      url: 'https://globalaisummit.isfnetwork.org/isf-favicon.png',
      lastModified,
    },
    {
      url: 'https://globalaisummit.isfnetwork.org/sitemap.xml',
      lastModified,
    },
  ];
}
