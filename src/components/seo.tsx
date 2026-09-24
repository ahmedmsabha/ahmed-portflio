import { Head } from "vite-react-ssg";
import { almulhim, projects, schools } from "@/data/content";
import { site, siteUrl } from "@/data/site";
import { useCopy } from "@/i18n/use-copy";

export function Seo() {
  const { locale, ui, tx } = useCopy();
  const path = locale === "ar" ? "/ar" : "/";
  const canonical = `${siteUrl}${path}`;
  const name = `${ui.heroFirst} ${ui.heroLast}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name,
        jobTitle: ui.jobTitle,
        email: site.email,
        url: canonical,
        address: {
          "@type": "PostalAddress",
          addressLocality: locale === "ar" ? "غزة" : "Gaza",
          addressCountry: "PS",
        },
        affiliation: schools.map((school) => ({
          "@type": "CollegeOrUniversity",
          name: tx(school.school),
        })),
        sameAs: [site.github, site.linkedin],
        knowsAbout:
          locale === "ar"
            ? ["تطوير الويب", "تطوير الموبايل", "تعلّم الآلة", "كتابة القصص"]
            : ["Web development", "Mobile development", "Machine learning", "Fiction writing"],
      },
      {
        "@type": "WebSite",
        name,
        url: canonical,
        description: ui.metaDescription,
        inLanguage: locale,
      },
      {
        "@type": "ItemList",
        itemListElement: [almulhim, ...projects].map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.name,
          url: project.href,
        })),
      },
    ],
  };

  return (
    <Head htmlAttributes={{ lang: locale, dir: locale === "ar" ? "rtl" : "ltr" }}>
      <title>{ui.metaTitle}</title>
      <meta name="description" content={ui.metaDescription} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/`} />
      <link rel="alternate" hrefLang="ar" href={`${siteUrl}/ar`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/`} />
      <meta property="og:title" content={ui.metaTitle} />
      <meta property="og:description" content={ui.metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale === "ar" ? "ar_AR" : "en_US"} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${siteUrl}/og.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ui.metaTitle} />
      <meta name="twitter:description" content={ui.metaDescription} />
      <meta name="twitter:image" content={`${siteUrl}/og.png`} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Head>
  );
}
