import { useEffect, useRef } from "react";
import { ArrowDownRight, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { HeroLine, SplitWords } from "@/components/motion";
import { useCopy } from "@/i18n/use-copy";
import { cn } from "cn";

export function Hero() {
  const { locale, ui } = useCopy();
  const glow = useRef<HTMLDivElement>(null);
  const chips =
    locale === "ar"
      ? ["ذكاء", "ويب", "قصص"]
      : ["AI", "Web", "Fiction"];

  useEffect(() => {
    const node = glow.current;
    if (!node) return;
    const move = (event: PointerEvent) => {
      const rect = section?.getBoundingClientRect();
      if (!rect) return;
      node.style.opacity = "1";
      node.style.transform = `translate(${event.clientX - rect.left - 180}px, ${event.clientY - rect.top - 180}px)`;
    };
    const section = node.parentElement;
    section?.addEventListener("pointermove", move);
    return () => section?.removeEventListener("pointermove", move);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div aria-hidden className="mesh pointer-events-none absolute inset-0 -z-10 opacity-90" />
      <div ref={glow} aria-hidden className="pointer-glow -z-10" />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1.35fr_0.85fr] lg:items-center">
        <div>
          <HeroLine delay={0.05}>
            <p className="eyebrow inline-flex items-center gap-2">
              <span className="pulse-dot" aria-hidden />
              {ui.heroKicker}
            </p>
          </HeroLine>
          <HeroLine delay={0.12}>
            <h1 className="mt-5 font-serif text-5xl leading-[0.95] text-balance md:text-7xl">
              <SplitWords text={ui.heroFirst} />
              <span className="mt-1 block text-primary">
                <SplitWords text={ui.heroLast} />
              </span>
            </h1>
          </HeroLine>
          <HeroLine delay={0.2}>
            <p className="mt-6 max-w-xl font-serif text-2xl leading-snug text-balance md:text-3xl">
              {ui.heroHeadline}
            </p>
          </HeroLine>
          <HeroLine delay={0.28}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {ui.heroLede}
            </p>
          </HeroLine>
          <HeroLine delay={0.36} className="mt-8 flex flex-wrap gap-3">
            <a href="#research" className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}>
              {ui.readResearch}
              <ArrowDownRight className="rtl:-scale-x-100" />
            </a>
            <a
              href="#contact"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-11 px-5")}
            >
              <Mail />
              {ui.getInTouch}
            </a>
          </HeroLine>
        </div>
        <HeroLine delay={0.4}>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="orbit-stage" aria-hidden>
              <span className="orbit-ring orbit-ring-a" />
              <span className="orbit-ring orbit-ring-b" />
              <span className="orbit-ring orbit-ring-c" />
              {chips.map((chip, index) => (
                <span key={chip} className={index === 0 ? "sat" : index === 1 ? "sat sat-b" : "sat sat-c"}>
                  <span>{chip}</span>
                </span>
              ))}
            </div>
            <div className="float-card absolute inset-[22%] flex flex-col items-center justify-center border border-border bg-card/85 px-6 text-center shadow-xl backdrop-blur-md">
              <p className="font-serif text-6xl text-primary">{locale === "ar" ? "أ" : "A"}</p>
              <ul className="mt-4 w-full divide-y divide-border text-start">
                {ui.facts.map((fact, index) => (
                  <li key={fact} className="flex gap-3 py-2 text-sm leading-snug">
                    <span className="font-serif text-primary">0{index + 1}</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </HeroLine>
      </div>
    </section>
  );
}
