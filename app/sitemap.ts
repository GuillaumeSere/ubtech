import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ubtech-walker.vercel.app'; 

  return [
    /* HOME */
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    /* PAGE ROBOTS (listing) */
    {
      url: `${baseUrl}/robots`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    /* PAGE UNITÉ PRO */
    {
      url: `${baseUrl}/units/walker-s2`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    /* UNITÉS (si pages séparées ensuite) */
    {
      url: `${baseUrl}/ia-education`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
