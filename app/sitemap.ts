import type { MetadataRoute } from "next";

const paths = [
  "/",
  "/profile",
  "/belly-dance",
  "/yoga",
  "/events",
  "/gallery",
  "/studio-rental",
  "/access",
  "/schedule",
  "/trial",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://evastudio.vercel.app";
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
