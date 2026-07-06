"use client";

import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { weeklyHours, completionData, skillGrowth } from "@/mock-data/dashboard";

const BRAND = "#4F46E5";
const ACCENT = "#F97316";
const SUCCESS = "#10B981";
const TRACK = "rgba(148,163,184,0.18)";

export function LearningCharts() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {/* Weekly hours */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Weekly learning hours</CardTitle>
          <p className="text-sm text-muted-foreground">
            {weeklyHours.reduce((a, b) => a + b.hours, 0).toFixed(1)}h this week
          </p>
        </CardHeader>
        <CardContent>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyHours} barCategoryGap={16}>
                <defs>
                  <linearGradient id="barFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={BRAND} />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}
                  fontSize={12}
                  stroke="currentColor"
                  className="text-muted-foreground"
                />
                <Tooltip
                  cursor={{ fill: TRACK }}
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid rgba(148,163,184,0.2)",
                    background: "hsl(var(--card))",
                    color: "hsl(var(--foreground))",
                    fontSize: 12,
                  }}
                  formatter={(v: number) => [`${v}h`, "Studied"]}
                />
                <Bar dataKey="hours" fill="url(#barFill)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Completion donut */}
      <Card>
        <CardHeader>
          <CardTitle>Course completion</CardTitle>
          <p className="text-sm text-muted-foreground">Across all enrolled</p>
        </CardHeader>
        <CardContent>
          <div className="relative h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={completionData}
                  dataKey="value"
                  innerRadius={62}
                  outerRadius={84}
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={2}
                  stroke="none"
                >
                  <Cell fill={SUCCESS} />
                  <Cell fill={TRACK} />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="pointer-events-none absolute inset-0 grid place-items-center">
              <div className="text-center">
                <p className="text-3xl font-extrabold">64%</p>
                <p className="text-xs text-muted-foreground">completed</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skill growth */}
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Skill growth</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGrowth.map((s) => (
              <div key={s.skill}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="font-medium">{s.skill}</span>
                  <span className="text-muted-foreground">{s.value}%</span>
                </div>
                <Progress value={s.value} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
