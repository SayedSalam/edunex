import Image from "next/image";
import { Star, Clock, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, formatCompact } from "@/lib/utils";
import type { Course } from "@/types";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          {course.bestseller && <Badge variant="accent">Bestseller</Badge>}
          <Badge variant="outline" className="bg-background/80 backdrop-blur">
            {course.level}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Image
            src={course.instructor.avatar}
            alt={course.instructor.name}
            width={22}
            height={22}
            className="rounded-full"
          />
          <span>{course.instructor.name}</span>
        </div>

        <h3 className="line-clamp-2 font-semibold leading-snug transition-colors group-hover:text-brand-600">
          {course.title}
        </h3>

        <div className="mt-auto flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1 font-semibold text-amber-500">
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            {course.rating}
            <span className="font-normal text-muted-foreground">
              ({formatCompact(course.reviews)})
            </span>
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" /> {course.durationHours}h
          </span>
          <span className="inline-flex items-center gap-1">
            <BarChart3 className="size-3.5" /> {course.lessons}
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-brand-600">
              {formatCurrency(course.price)}
            </span>
            {course.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatCurrency(course.originalPrice)}
              </span>
            )}
          </div>
          <span className="text-xs font-medium text-muted-foreground capitalize">
            {course.category}
          </span>
        </div>
      </div>
    </article>
  );
}
