import { skillBands } from "@/data/content";
import { Reveal, Spotlight } from "@/components/motion";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { useCopy } from "@/i18n/use-copy";

const tools = skillBands.flatMap((band) => band.items);
const marquee = [...tools, ...tools];

export function Skills() {
  const { ui, tx } = useCopy();

  return (
    <Section
      id="skills"
      index="03"
      tone="wash"
      eyebrow={ui.skillsEyebrow}
      title={ui.skillsTitle}
      intro={ui.skillsIntro}
    >
      <div className="mb-4 overflow-hidden border-y border-border py-3">
        <div className="marquee-track flex w-max gap-3">
          {marquee.map((item, index) => (
            <Badge key={`${item}-${index}`} variant="secondary" className="h-7 px-3">
              {item}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mb-8 overflow-hidden border-b border-border py-3">
        <div className="marquee-track-slow flex w-max gap-8 text-sm text-muted-foreground">
          {[...tools, ...tools].map((item, index) => (
            <span key={`slow-${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {skillBands.map((band, index) => (
          <Reveal key={band.title.en} delay={index * 0.06}>
            <Spotlight>
              <article className="h-full bg-card p-6 ring-1 ring-foreground/10 transition-transform duration-300 hover:-translate-y-1">
                <p className="eyebrow">{tx(band.status)}</p>
                <h3 className="mt-2 font-serif text-2xl">{tx(band.title)}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {band.items.map((item) => (
                    <li key={item}>
                      <Badge variant="outline">{item}</Badge>
                    </li>
                  ))}
                </ul>
              </article>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
