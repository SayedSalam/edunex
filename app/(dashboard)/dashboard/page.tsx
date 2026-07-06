import { DashboardShell } from "@/components/layout/dashboard-shell";
import { OverviewCards } from "@/features/dashboard/overview-cards";
import { LearningCharts } from "@/features/dashboard/learning-charts";
import { ContinueLearning } from "@/features/dashboard/continue-learning";
import { student } from "@/mock-data/dashboard";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">
            Welcome back, {student.name} 👋
          </h1>
          <p className="mt-1 text-muted-foreground">
            You&apos;re on a {student.streak}-day streak. Keep the momentum going.
          </p>
        </div>

        <OverviewCards />
        <ContinueLearning />
        <LearningCharts />
      </div>
    </DashboardShell>
  );
}
