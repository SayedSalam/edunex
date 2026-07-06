import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/features/landing/hero";
import { Categories } from "@/features/landing/categories";
import { FeaturedCourses } from "@/features/landing/featured-courses";
import { WhyChoose } from "@/features/landing/why-choose";
import { Testimonials } from "@/features/landing/testimonials";
import { Pricing } from "@/features/landing/pricing";
import { CtaBanner } from "@/features/landing/cta";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Categories />
        <FeaturedCourses />
        <WhyChoose />
        <Testimonials />
        <Pricing />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
