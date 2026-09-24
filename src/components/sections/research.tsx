import { paper } from "@/data/content";
import { Reveal } from "@/components/motion";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { useCopy } from "@/i18n/use-copy";

export function Research() {
  const { ui, tx } = useCopy();

  return (
    <Section
      id="research"
      index="06"
      tone="wash"
      eyebrow={ui.researchEyebrow}
      title={ui.researchTitle}
      intro={ui.researchIntro}
    >
      <Reveal>
        <article className="relative overflow-hidden border border-border bg-card p-6 ps-8 shadow-lg md:p-10 md:ps-12">
          <span aria-hidden className="absolute inset-y-0 start-0 w-1.5 bg-primary" />
          <div className="flex flex-wrap items-center gap-3">
            <Badge>{tx(paper.status)}</Badge>
            <p className="text-sm text-muted-foreground">{tx(paper.dates)}</p>
          </div>
          <h3 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">{tx(paper.title)}</h3>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{tx(paper.summary)}</p>
        </article>
      </Reveal>
    </Section>
  );
}
