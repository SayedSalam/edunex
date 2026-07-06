"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left — education illustration on gradient */}
      <aside className="relative hidden overflow-hidden bg-brand-gradient p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-20" />
        <Link href="/" className="relative">
          <Logo className="[&_span]:text-white [&_.text-gradient]:text-white" />
        </Link>

        <div className="relative max-w-md">
          <h2 className="text-3xl font-extrabold leading-tight">
            Pick up where you left off.
          </h2>
          <p className="mt-4 text-white/80">
            Your courses, progress, streaks and certificates — all waiting for
            you inside.
          </p>

          <div className="mt-10 space-y-4">
            {[
              { label: "TypeScript & Next.js", pct: 68 },
              { label: "Product Design Mastery", pct: 34 },
              { label: "Photography Foundations", pct: 91 },
            ].map((c) => (
              <div key={c.label}>
                <div className="flex justify-between text-sm">
                  <span>{c.label}</span>
                  <span className="text-white/70">{c.pct}%</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-white"
                    style={{ width: `${c.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="relative text-sm text-white/60">
          “EDUNEX helped me switch careers in six months.” — Amina, Nigeria
        </p>
      </aside>

      {/* Right — glassmorphism auth card */}
      <main className="relative flex items-center justify-center bg-background p-6">
        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl lg:hidden" />

        <div className="relative w-full max-w-sm rounded-2xl border border-border bg-card/70 p-8 shadow-glow backdrop-blur-xl">
          <div className="lg:hidden">
            <Logo />
          </div>

          <h1 className="mt-6 text-2xl font-extrabold tracking-tight lg:mt-0">
            Welcome back
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Log in to continue learning.
          </p>

          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <Field label="Email" htmlFor="email">
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-11 w-full rounded-md border border-input bg-background pl-10 pr-3 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                />
              </div>
            </Field>

            <Field label="Password" htmlFor="password">
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-11 w-full rounded-md border border-input bg-background pl-10 pr-10 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
            </Field>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-muted-foreground">
                <input type="checkbox" className="size-4 rounded border-input accent-brand-600" />
                Remember me
              </label>
              <Link href="#" className="font-medium text-brand-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button variant="gradient" className="w-full" type="submit">
              Log in <ArrowRight className="size-4" />
            </Button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            or continue with
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" type="button">Google</Button>
            <Button variant="outline" type="button">GitHub</Button>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            New to EDUNEX?{" "}
            <Link
              href="#"
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "px-1.5 text-brand-600")}
            >
              Create an account
            </Link>
          </p>

          <Link
            href="/dashboard"
            className="mt-2 block text-center text-xs text-muted-foreground hover:text-foreground"
          >
            Skip to demo dashboard →
          </Link>
        </div>
      </main>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
      </label>
      {children}
    </div>
  );
}
