"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Courses", href: "#courses" },
  { label: "Categories", href: "#categories" },
  { label: "Why EDUNEX", href: "#why" },
  { label: "Pricing", href: "#pricing" },
];

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" aria-label="EDUNEX home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-1.5 md:flex">
          <Button variant="ghost" size="icon" aria-label="Change language">
            <Globe className="size-5" />
          </Button>
          <ThemeToggle />
          <Link href="/login" className={buttonVariants({ variant: "ghost", size: "sm" })}>
            Log in
          </Link>
          <Link href="/login" className={buttonVariants({ variant: "gradient", size: "sm" })}>
            Start learning
          </Link>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants({ variant: "outline" }), "flex-1")}
              >
                Log in
              </Link>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants({ variant: "gradient" }), "flex-1")}
              >
                Start learning
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
