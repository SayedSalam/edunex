import { UserCheck, Clock4, ShieldCheck, MessagesSquare } from "lucide-react";
import { SectionHeading } from "./categories";

const features = [
  {
    icon: UserCheck,
    title: "Expert instructors",
    body: "Learn from practitioners who ship real work at leading companies — not just theory.",
  },
  {
    icon: Clock4,
    title: "Flexible learning",
    body: "Study on your schedule, on any device. Pick up exactly where you left off.",
  },
  {
    icon: ShieldCheck,
    title: "Verified certificates",
    body: "Earn shareable certificates with QR verification that employers can trust.",
  },
  {
    icon: MessagesSquare,
    title: "Community support",
    body: "Get unstuck fast with active discussions and direct Q&A with instructors.",
  },
];

export function WhyChoose() {
  return (
    <section id="why" className="container py-20">
      <SectionHeading
        eyebrow="Why EDUNEX"
        title="Built for how you actually learn"
        subtitle="Everything is designed around one goal: turning curiosity into real, hireable skill."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-lg border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
          >
            <span className="grid size-12 place-items-center rounded-xl bg-brand-soft text-brand-600">
              <f.icon className="size-6" />
            </span>
            <h3 className="mt-4 font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
