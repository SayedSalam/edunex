import Image from "next/image";
import { Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { enrolledCourses } from "@/mock-data/dashboard";

export function ContinueLearning() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>Continue learning</CardTitle>
        <a href="#" className="text-sm font-medium text-brand-600 hover:underline">
          View all
        </a>
      </CardHeader>
      <CardContent className="space-y-4">
        {enrolledCourses.map(({ course, progress, lastLesson }) => (
          <div
            key={course.id}
            className="flex flex-col gap-4 rounded-lg border border-border p-3 sm:flex-row sm:items-center"
          >
            <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-md sm:w-40">
              <Image
                src={course.thumbnail}
                alt={course.title}
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="truncate font-semibold">{course.title}</h4>
              <p className="mt-0.5 truncate text-sm text-muted-foreground">
                Up next: {lastLesson}
              </p>
              <div className="mt-3 flex items-center gap-3">
                <Progress value={progress} className="flex-1" />
                <span className="text-xs font-medium text-muted-foreground">
                  {progress}%
                </span>
              </div>
            </div>

            <Button variant="default" size="sm" className="sm:self-center">
              <Play className="size-4" /> Resume
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
