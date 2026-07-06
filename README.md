# 🎓 EDUNEX — Smart Learning Management System

A premium, front-end-only EdTech platform built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Recharts**. Uses realistic mock data and a scalable, feature-based architecture ready for backend integration.

> **Learn Without Limits. Build Your Future.**

## ✅ What's built in this foundation

This is a working vertical slice that establishes the design system and the patterns every other page will follow:

- **Design system** — exact brand tokens (Educational Indigo `#4F46E5`, Motivational Orange `#F97316`, Emerald `#10B981`), light/dark mode via CSS variables, Inter + Cairo fonts wired for LTR/RTL.
- **Landing page** — hero with animated illustration & live stats, categories, featured courses, why-choose, success stories, pricing, CTA, footer.
- **Authentication** — split-layout login with glassmorphism card, password toggle, social auth, and progress preview.
- **Student dashboard** — sidebar shell, overview stat cards, weekly-hours bar chart, completion donut, skill-growth bars, and a "continue learning" list.
- **Shared UI kit** — Button, Card, Badge, Progress (shadcn-style), theme toggle, and the EDUNEX logo mark.

## 🚀 Getting started

```bash
npm install
npm run dev
# open http://localhost:3000
```

Pages: `/` (landing) · `/login` (auth) · `/dashboard` (student dashboard).

## 📁 Architecture

```
app/                     # App Router routes
  (auth)/login/          # auth route group
  (dashboard)/dashboard/ # app route group
  layout.tsx             # fonts + theme provider
  page.tsx               # landing
  globals.css            # design tokens
components/
  ui/                    # primitives (button, card, badge, progress)
  layout/                # header, footer, dashboard shell
  logo, theme-provider, theme-toggle
features/                # feature-scoped composition
  landing/               # hero, categories, courses, pricing…
  dashboard/             # cards, charts, continue-learning
lib/                     # utils (cn, formatters)
types/                   # shared domain types
mock-data/               # courses, categories, testimonials, dashboard…
public/                  # static assets
```

## 🗺️ Roadmap (next increments)

Not yet built — each is a self-contained next step:

1. **Course experience** — details page (trailer, curriculum, reviews) + video learning page (player, lesson sidebar, notes/discussion/resources/transcript tabs).
2. **Quiz & exam system** — MCQ / true-false / short-answer, timer, instant scoring.
3. **Certificates** — certificate page with QR verification + confetti on completion.
4. **Instructor dashboard** — course management, uploads, analytics.
5. **Admin dashboard** — platform KPIs, user/content management, financial reports.
6. **Community, live classes, payments & subscriptions, settings, notifications.**
7. **i18n** — full Arabic RTL / English LTR switching with `next-intl`.

## 🎨 Brand tokens

| Token | Light | Dark |
|-------|-------|------|
| Background | `#F8FAFC` | `#020617` |
| Card | `#FFFFFF` | `#0F172A` |
| Text primary | `#111827` | `#F8FAFC` |
| Text secondary | `#64748B` | `#94A3B8` |

Brand: Indigo `#4F46E5` · Orange `#F97316` · Emerald `#10B981`.

---

Front-end only. All data is mocked in `/mock-data` and typed in `/types` for a clean swap to real APIs later.
