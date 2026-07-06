import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    period: "forever",
    tagline: "Start exploring at your own pace.",
    features: [
      "Access to 40+ free courses",
      "Community discussions",
      "Course previews & trailers",
      "Basic progress tracking",
    ],
    cta: "Get started",
  },
  {
    id: "premium",
    name: "Premium",
    price: 29,
    period: "per month",
    tagline: "Everything you need to go from curious to hired.",
    features: [
      "Unlimited access to all courses",
      "Verified certificates",
      "Downloadable resources & code",
      "Quizzes, exams & skill analysis",
      "Priority Q&A with instructors",
    ],
    highlighted: true,
    cta: "Start 7-day trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 0,
    period: "custom",
    tagline: "Scale learning across your whole team.",
    features: [
      "Everything in Premium",
      "Team dashboards & seat management",
      "Custom learning paths",
      "SSO & advanced security",
      "Dedicated success manager",
    ],
    cta: "Contact sales",
  },
];
