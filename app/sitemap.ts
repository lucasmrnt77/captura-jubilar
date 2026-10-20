import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://eventojubilar.metodoconsistente.com/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
