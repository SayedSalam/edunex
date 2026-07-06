import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/mock-data/testimonials";
import { SectionHeading } from "./categories";

export function Testimonials() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Success stories"
          title="Careers, transformed"
          subtitle="Real learners who used EDUNEX to change what they do for a living."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-card"
            >
              <Quote className="size-8 text-brand-200 dark:text-brand-600/40" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold">
                    {t.name}{" "}
                    <span className="font-normal text-muted-foreground">
                      · {t.country}
                    </span>
                  </p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                    {t.before}
                    <ArrowRight className="size-3 text-brand-500" />
                    <span className="font-medium text-success-600">{t.after}</span>
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
