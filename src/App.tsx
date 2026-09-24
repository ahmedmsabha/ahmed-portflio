import { Link } from "react-router-dom";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Credentials } from "@/components/sections/credentials";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Research } from "@/components/sections/research";
import { Skills } from "@/components/sections/skills";
import { ScrollProgress } from "@/components/motion";
import { Seo } from "@/components/seo";
import { useCopy } from "@/i18n/use-copy";

export default function App() {
  const { ui } = useCopy();

  return (
    <>
      <Seo />
      <ScrollProgress />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-50 focus:bg-background focus:px-3 focus:py-2"
      >
        {ui.skip}
      </a>
      <Header />
      <nav
        aria-label={ui.navLabel}
        className="fixed end-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 xl:flex"
      >
        {ui.nav.map((item) => (
          <a key={item.href} href={item.href} className="rail-dot" title={item.label}>
            <span className="sr-only">{item.label}</span>
          </a>
        ))}
      </nav>
      <main id="main">
        <Hero />
        <div className="overflow-hidden border-y border-border bg-foreground py-3 text-background">
          <div className="marquee-track-slow flex w-max gap-10">
            {[...ui.facts, ...ui.facts, ...ui.facts, ...ui.facts].map((fact, index) => (
              <span key={`${fact}-${index}`} className="font-serif text-lg">
                {fact}
                <span className="mx-10 text-primary">✦</span>
              </span>
            ))}
          </div>
        </div>
        <Education />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Research />
        <Credentials />
        <Contact />
      </main>
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-sm text-muted-foreground">
          <p>
            {ui.heroFirst} {ui.heroLast}
          </p>
          <p>{ui.footer}</p>
          <Link to={ui.langHref} hrefLang={ui.langHref === "/ar" ? "ar" : "en"} className="link-draw text-foreground">
            {ui.langLabel}
          </Link>
        </div>
      </footer>
    </>
  );
}
