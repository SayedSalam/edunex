import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaBanner() {
  return (
    <section className="container pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-8 py-16 text-center text-white shadow-glow sm:px-16">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-20" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Your future self starts learning today
          </h2>
          <p className="mt-4 text-white/85">
            Join 2.4 million learners building real skills on EDUNEX. First
            course is on us.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/login"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-brand-700 hover:bg-white/90"
              )}
            >
              Start learning free <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/40 text-white hover:bg-white/10"
              )}
            >
              Become an instructor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
