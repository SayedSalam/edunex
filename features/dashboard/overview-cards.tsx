import { BookOpen, Clock, Award, Flame, type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { overviewStats } from "@/mock-data/dashboard";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Clock,
  Award,
  Flame,
};

const accents: Record<string, string> = {
  enrolled: "bg-brand-soft text-brand-600",
  hours: "bg-accent-50 text-accent-600 dark:bg-accent-500/15",
  certificates: "bg-success-50 text-success-600 dark:bg-success-500/15",
  streak: "bg-orange-50 text-orange-600 dark:bg-orange-500/15",
};

export function OverviewCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {overviewStats.map((stat) => {
        const Icon = iconMap[stat.icon] ?? BookOpen;
        return (
          <Card key={stat.key} className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="mt-2 text-3xl font-extrabold tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.trend}</p>
              </div>
              <span
                className={`grid size-11 place-items-center rounded-xl ${accents[stat.key]}`}
              >
                <Icon className="size-5" />
              </span>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
