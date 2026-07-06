import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredCourses } from "@/mock-data/courses";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CourseCard } from "./course-card";
import { SectionHeading } from "./categories";

export function FeaturedCourses() {
  return (
    <section id="courses" className="bg-muted/40 py-20">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Featured"
            title="Courses learners love"
            subtitle="Hand-picked, top-rated courses to kick-start your journey."
            center={false}
          />
          <Link
            href="#"
            className={cn(buttonVariants({ variant: "outline" }), "shrink-0")}
          >
            Browse all courses <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
