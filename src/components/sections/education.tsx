import { awards, schools } from "@/data/content";
import { Reveal, Spotlight } from "@/components/motion";
import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCopy } from "@/i18n/use-copy";

export function Education() {
  const { ui, tx } = useCopy();

  return (
    <Section
      id="education"
      index="01"
      tone="wash"
      eyebrow={ui.eduEyebrow}
      title={ui.eduTitle}
      intro={ui.eduIntro}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {schools.map((school, index) => (
          <Reveal key={school.degree.en} delay={index * 0.08}>
            <Spotlight>
              <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
                <CardHeader>
                  <Badge variant="outline">{tx(school.note)}</Badge>
                  <CardTitle className="font-serif text-2xl leading-snug">{tx(school.degree)}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="text-foreground">{tx(school.school)}</p>
                  <p className="mt-1">{tx(school.dates)}</p>
                </CardContent>
              </Card>
            </Spotlight>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {awards.map((award, index) => (
          <Reveal key={award.title.en} delay={0.1 + index * 0.06}>
            <article className="h-full border-t-2 border-primary/40 pt-4">
              <p className="font-serif text-lg leading-snug">{tx(award.title)}</p>
              <p className="mt-2 text-sm text-muted-foreground">{tx(award.org)}</p>
              <p className="mt-1 text-sm text-primary">{award.year}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
