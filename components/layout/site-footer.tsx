import Link from "next/link";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Blog", "Contact"],
  },
  {
    title: "Courses",
    links: ["Programming", "Design", "Business", "Marketing", "Languages"],
  },
  {
    title: "Support",
    links: ["Help Center", "Community", "Instructor Hub", "System Status"],
  },
];

const socials = [
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
  { icon: Github, label: "GitHub" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Learn without limits. Build your future with courses taught by
              industry experts, wherever you are.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} EDUNEX. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">Terms</Link>
            <Link href="#" className="hover:text-foreground">Privacy</Link>
            <Link href="#" className="hover:text-foreground">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
