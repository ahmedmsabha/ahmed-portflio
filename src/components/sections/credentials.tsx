import { certificateGroups, volunteering } from "@/data/content";
import { Reveal, Spotlight } from "@/components/motion";
import { Section } from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCopy } from "@/i18n/use-copy";

export function Credentials() {
  const { ui, tx } = useCopy();

  return (
    <Section
      id="credentials"
      index="07"
      eyebrow={ui.credEyebrow}
      title={ui.credTitle}
      intro={ui.credIntro}
    >
      <Accordion multiple defaultValue={certificateGroups.map((group) => group.label.en)} className="border-t border-border">
        {certificateGroups.map((group) => (
          <AccordionItem key={group.label.en} value={group.label.en}>
            <AccordionTrigger className="font-serif text-xl hover:no-underline">{tx(group.label)}</AccordionTrigger>
            <AccordionContent>
              <ul className="divide-y divide-border">
                {group.items.map((item) => (
                  <li key={item.id} className="grid gap-1 py-3 md:grid-cols-[1fr_auto] md:items-baseline">
                    <div>
                      <p className="text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.issuer} · {tx(item.issued)}
                      </p>
                    </div>
                    <p className="font-mono text-xs text-muted-foreground">{item.id}</p>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div id="community" className="mt-14 scroll-mt-24">
        <h3 className="font-serif text-3xl">{ui.volunteering}</h3>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {volunteering.map((item, index) => (
            <Reveal key={item.title.en} delay={index * 0.04}>
              <Spotlight>
                <li className="h-full border border-border bg-card p-5 transition-transform duration-300 hover:-translate-y-1">
                  <p className="font-serif text-xl">{tx(item.title)}</p>
                  <p className="mt-1 text-sm">{tx(item.org)}</p>
                  {item.dates ? <p className="text-sm text-primary">{tx(item.dates)}</p> : null}
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tx(item.summary)}</p>
                </li>
              </Spotlight>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
