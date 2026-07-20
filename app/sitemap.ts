import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://freelancertax.pk";

  const routes = [
    "",
    "/freelancer-tax-calculator",
    "/salary-tax-calculator-pakistan",
    "/payoneer-vs-bank-wire-pakistan",
    "/pseb-registration-guide",
    "/about",
    "/privacy-policy",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
