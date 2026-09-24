import { experience } from "@/data/content";
import { Reveal } from "@/components/motion";
import { Section } from "@/components/section";
import { useCopy } from "@/i18n/use-copy";

export function Experience() {
  const { ui, tx } = useCopy();

  return (
    <Section id="experience" index="05" eyebrow={ui.expEyebrow} title={ui.expTitle}>
      <ol className="relative ps-8">
        <span className="timeline-line" aria-hidden />
        {experience.map((job, index) => (
          <Reveal key={`${job.role.en}-${typeof job.org === "string" ? job.org : job.org.en}`} delay={index * 0.04}>
            <li className="relative pb-10 last:pb-0">
              <span
                aria-hidden
                className="absolute top-1.5 -start-8 size-3 translate-x-px rounded-full bg-primary ring-4 ring-background rtl:-translate-x-px"
              />
              <p className="text-sm text-primary">{tx(job.dates)}</p>
              <h3 className="mt-1 font-serif text-2xl">{tx(job.role)}</h3>
              <p className="mt-1 text-sm">
                {tx(job.org)} · {tx(job.kind)}
              </p>
              <p className="text-sm text-muted-foreground">{tx(job.place)}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{tx(job.summary)}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
