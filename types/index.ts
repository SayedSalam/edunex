export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type CategorySlug =
  | "programming"
  | "design"
  | "business"
  | "marketing"
  | "languages"
  | "photography";

export interface Instructor {
  id: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  students: number;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  thumbnail: string;
  category: CategorySlug;
  instructor: Instructor;
  rating: number;
  reviews: number;
  durationHours: number;
  lessons: number;
  level: CourseLevel;
  price: number;
  originalPrice?: number;
  bestseller?: boolean;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  icon: string; // lucide icon name
  courses: number;
  color: string; // tailwind gradient stops
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  avatar: string;
  before: string;
  after: string;
  quote: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

/* ---------- Student dashboard ---------- */

export interface EnrolledCourse {
  course: Course;
  progress: number; // 0-100
  lastLesson: string;
}

export interface WeeklyHours {
  day: string;
  hours: number;
}

export interface SkillGrowth {
  skill: string;
  value: number;
}
