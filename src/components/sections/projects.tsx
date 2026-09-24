import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { almulhim, projects, type ProjectTag } from "@/data/content";
import { Spotlight } from "@/components/motion";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCopy } from "@/i18n/use-copy";

type Filter = "all" | "ai" | "web" | "mobile";

export function Projects() {
  const { ui, tx } = useCopy();
  const [filter, setFilter] = useState<Filter>("all");
  const visible = projects.filter((project) => filter === "all" || project.tags.includes(filter as ProjectTag));
  const showFlagship = filter !== "ai";

  return (
    <Section
      id="projects"
      index="04"
      eyebrow={ui.projectsEyebrow}
      title={ui.projectsTitle}
      intro={ui.projectsIntro}
    >
      <Tabs value={filter} onValueChange={(value) => setFilter(value as Filter)}>
        <TabsList className="h-auto flex-wrap">
          {ui.filters.map((item) => (
            <TabsTrigger key={item.id} value={item.id} className="px-3">
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <AnimatePresence initial={false}>
        {showFlagship ? (
          <motion.article
            key="almulhim"
            layout
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="conic-frame mt-6"
          >
            <div className="bg-foreground p-6 text-background md:p-8">
              <p className="text-xs tracking-[0.2em] text-background/70 uppercase rtl:tracking-normal rtl:text-sm">
                {ui.flagship}
              </p>
              <h3 className="mt-2 font-serif text-3xl md:text-4xl">
                {almulhim.name} <span lang="ar">الملهم</span>
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-background/80 md:text-base">
                {tx(almulhim.summary)}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {almulhim.stack.map((item) => (
                  <li key={item}>
                    <Badge className="bg-background text-foreground">{item}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ) : null}
      </AnimatePresence>

      <motion.ul layout className="mt-4 grid gap-4 md:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <motion.li
              key={project.name}
              layout
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35 }}
            >
              <Spotlight>
                <article className="flex h-full flex-col bg-card p-5 ring-1 ring-foreground/10">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-2xl leading-tight">{project.name}</h3>
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-1 text-sm text-primary hover:underline"
                      >
                        {ui.code}
                        <ArrowUpRight className="size-4 rtl:-scale-x-100" />
                      </a>
                    ) : null}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{tx(project.summary)}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <li key={item}>
                        <Badge variant="outline">{item}</Badge>
                      </li>
                    ))}
                  </ul>
                </article>
              </Spotlight>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </Section>
  );
}
