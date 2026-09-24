import { Reveal, Spotlight } from "@/components/motion";
import { Section } from "@/components/section";
import { useCopy } from "@/i18n/use-copy";

export function About() {
  const { ui } = useCopy();

  return (
    <Section id="about" index="02" eyebrow={ui.aboutEyebrow} title={ui.aboutTitle}>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {ui.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <Spotlight>
            <dl className="grid gap-6 border border-border bg-card p-6">
              {ui.aboutPanels.map((panel) => (
                <div key={panel.label}>
                  <dt className="eyebrow">{panel.label}</dt>
                  <dd className="mt-2 font-serif text-2xl">{panel.value}</dd>
                </div>
              ))}
            </dl>
          </Spotlight>
        </Reveal>
      </div>
    </Section>
  );
}
