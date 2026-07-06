"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, GraduationCap, Award, Users } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatCompact } from "@/lib/utils";

const stats = [
  { icon: Users, value: 2_400_000, label: "Learners worldwide" },
  { icon: GraduationCap, value: 18_000, label: "Expert-led courses" },
  { icon: Award, value: 640_000, label: "Certificates earned" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.4]" />
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl" />

      <div className="container relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm"
          >
            <span className="size-2 rounded-full bg-success-500" />
            New: AI-assisted learning paths are live
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Learn without limits.
            <br />
            <span className="text-gradient">Build your future.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 max-w-lg text-lg text-muted-foreground"
          >
            World-class courses in programming, design, business and more —
            taught by industry experts, with certificates that get you hired.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link href="/login" className={cn(buttonVariants({ variant: "gradient", size: "lg" }))}>
              Start learning <ArrowRight className="size-4" />
            </Link>
            <Link href="/login" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
              <PlayCircle className="size-4" /> Become an instructor
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                  {formatCompact(s.value)}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <HeroIllustration />
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative mx-auto w-full max-w-md"
    >
      {/* Main course preview card */}
      <div className="relative rounded-2xl border border-border bg-card p-4 shadow-glow">
        <div className="relative aspect-video overflow-hidden rounded-xl bg-brand-gradient">
          <div className="absolute inset-0 grid place-items-center">
            <PlayCircle className="size-14 text-white/90" />
          </div>
          <span className="absolute bottom-3 left-3 rounded-md bg-black/40 px-2 py-1 text-xs font-medium text-white backdrop-blur">
            42:18
          </span>
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-3 w-3/4 rounded-full bg-muted" />
          <div className="h-3 w-1/2 rounded-full bg-muted" />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex -space-x-2">
            {[47, 12, 32].map((n) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={n}
                src={`https://i.pravatar.cc/40?img=${n}`}
                alt=""
                className="size-7 rounded-full border-2 border-card"
              />
            ))}
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            +2.4k enrolled
          </span>
        </div>
      </div>

      {/* Floating achievement chip */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 top-16 flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 shadow-card"
      >
        <span className="grid size-8 place-items-center rounded-lg bg-success-50 text-success-600 dark:bg-success-500/15">
          <Award className="size-4" />
        </span>
        <div className="text-xs">
          <p className="font-semibold">Certificate earned</p>
          <p className="text-muted-foreground">TypeScript · A+</p>
        </div>
      </motion.div>

      {/* Floating streak chip */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -right-4 bottom-10 flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 shadow-card"
      >
        <span className="text-lg">🔥</span>
        <div className="text-xs">
          <p className="font-semibold">12-day streak</p>
          <p className="text-muted-foreground">Keep it going!</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
