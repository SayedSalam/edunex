import Link from "next/link";
import { Check } from "lucide-react";
import { pricingPlans } from "@/mock-data/pricing";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn, formatCurrency } from "@/lib/utils";
import { SectionHeading } from "./categories";

export function Pricing() {
  return (
    <section id="pricing" className="container py-20">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple plans that grow with you"
        subtitle="Start free. Upgrade when you're ready to go all in."
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "relative flex flex-col rounded-2xl border p-8 shadow-card transition-all",
              plan.highlighted
                ? "border-brand-600 bg-card shadow-glow lg:-translate-y-2"
                : "border-border bg-card"
            )}
          >
            {plan.highlighted && (
              <Badge
                variant="accent"
                className="absolute -top-3 left-1/2 -translate-x-1/2"
              >
                Most popular
              </Badge>
            )}

            <h3 className="text-lg font-bold">{plan.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>

            <div className="mt-5 flex items-baseline gap-1">
              {plan.id === "enterprise" ? (
                <span className="text-4xl font-extrabold tracking-tight">Custom</span>
              ) : (
                <>
                  <span className="text-4xl font-extrabold tracking-tight">
                    {formatCurrency(plan.price)}
                  </span>
                  <span className="text-sm text-muted-foreground">/{plan.period}</span>
                </>
              )}
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-success-500" />
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/login"
              className={cn(
                buttonVariants({
                  variant: plan.highlighted ? "gradient" : "outline",
                }),
                "mt-8 w-full"
              )}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
