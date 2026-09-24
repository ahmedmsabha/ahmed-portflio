import type { ReactNode } from "react";
import { Reveal } from "@/components/motion";
import { cn } from "cn";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  index,
  tone = "plain",
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  index?: string;
  tone?: "plain" | "wash";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-20 md:py-28", tone === "wash" && "bg-muted/70")}
    >
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-balance md:text-5xl">
                {title}
              </h2>
            </div>
            {index ? (
              <span aria-hidden className="font-serif text-5xl text-primary/25 md:text-7xl">
                {index}
              </span>
            ) : null}
          </div>
          {intro ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {intro}
            </p>
          ) : null}
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
