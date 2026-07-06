import type { EnrolledCourse, SkillGrowth, WeeklyHours } from "@/types";
import { courses } from "./courses";

export const student = {
  name: "Hatem",
  avatar: "https://i.pravatar.cc/120?img=68",
  streak: 12,
};

export const overviewStats = [
  { key: "enrolled", label: "Enrolled Courses", value: 6, icon: "BookOpen", trend: "+2 this month" },
  { key: "hours", label: "Hours Learned", value: 148, icon: "Clock", trend: "+9h this week" },
  { key: "certificates", label: "Certificates Earned", value: 3, icon: "Award", trend: "1 pending" },
  { key: "streak", label: "Current Streak", value: 12, icon: "Flame", trend: "days in a row" },
];

export const enrolledCourses: EnrolledCourse[] = [
  { course: courses[0], progress: 68, lastLesson: "12. Server Actions & Mutations" },
  { course: courses[1], progress: 34, lastLesson: "5. Auto Layout in Figma" },
  { course: courses[3], progress: 91, lastLesson: "18. Editing a Portrait Series" },
];

export const weeklyHours: WeeklyHours[] = [
  { day: "Mon", hours: 1.5 },
  { day: "Tue", hours: 2.2 },
  { day: "Wed", hours: 0.8 },
  { day: "Thu", hours: 3.0 },
  { day: "Fri", hours: 1.9 },
  { day: "Sat", hours: 2.6 },
  { day: "Sun", hours: 3.4 },
];

export const skillGrowth: SkillGrowth[] = [
  { skill: "React", value: 82 },
  { skill: "TypeScript", value: 74 },
  { skill: "UI Design", value: 61 },
  { skill: "Marketing", value: 48 },
  { skill: "Photography", value: 88 },
];

export const completionData = [
  { name: "Completed", value: 64 },
  { name: "Remaining", value: 36 },
];
