"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  BookOpen,
  Compass,
  Award,
  Calendar,
  MessagesSquare,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { student } from "@/mock-data/dashboard";
import { cn } from "@/lib/utils";

const navItems: { label: string; icon: LucideIcon; active?: boolean }[] = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "My Courses", icon: BookOpen },
  { label: "Explore", icon: Compass },
  { label: "Certificates", icon: Award },
  { label: "Live Classes", icon: Calendar },
  { label: "Community", icon: MessagesSquare },
  { label: "Settings", icon: Settings },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background lg:grid lg:grid-cols-[260px_1fr]">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 border-r border-border bg-card transition-transform lg:static lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <Link href="/">
            <Logo />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X className="size-5" />
          </Button>
        </div>

        <nav className="flex flex-col gap-1 p-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                item.active
                  ? "bg-brand-soft text-brand-700 dark:text-brand-300"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="size-[18px]" />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mx-3 mt-4 rounded-xl bg-brand-gradient p-4 text-white">
          <p className="text-sm font-semibold">Go Premium</p>
          <p className="mt-1 text-xs text-white/80">
            Unlock all courses and certificates.
          </p>
          <Link
            href="/#pricing"
            className="mt-3 inline-block rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-brand-700"
          >
            Upgrade
          </Link>
        </div>
      </aside>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main column */}
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-lg lg:px-8">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
          </Button>

          <div className="relative hidden max-w-md flex-1 sm:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search courses, lessons…"
              className="h-10 w-full rounded-md border border-input bg-card pl-10 pr-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            />
          </div>

          <div className="ml-auto flex items-center gap-1.5">
            <ThemeToggle />
            <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
              <Bell className="size-5" />
              <span className="absolute right-2 top-2 size-2 rounded-full bg-accent-500" />
            </Button>
            <Image
              src={student.avatar}
              alt={student.name}
              width={36}
              height={36}
              className="rounded-full border border-border"
            />
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
