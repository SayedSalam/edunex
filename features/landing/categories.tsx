import {
  Code2,
  Palette,
  Briefcase,
  TrendingUp,
  Languages,
  Camera,
  type LucideIcon,
} from "lucide-react";
import { categories } from "@/mock-data/categories";
import { formatCompact } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Palette,
  Briefcase,
  TrendingUp,
  Languages,
  Camera,
};

export function Categories() {
  return (
    <section id="categories" className="container py-20">
      <SectionHeading
        eyebrow="Explore"
        title="Find your path"
        subtitle="Six worlds of knowledge, thousands of courses. Pick where you want to grow."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] ?? Code2;
          return (
            <a
              key={cat.slug}
              href={`#courses`}
              className="group flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span
                className={`grid size-12 place-items-center rounded-xl bg-gradient-to-br ${cat.color} text-white transition-transform group-hover:scale-110`}
              >
                <Icon className="size-6" />
              </span>
              <span className="text-sm font-semibold">{cat.name}</span>
              <span className="text-xs text-muted-foreground">
                {formatCompact(cat.courses)} courses
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
