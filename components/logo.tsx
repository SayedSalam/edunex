import { cn } from "@/lib/utils";

/**
 * EDUNEX mark — an open book whose right page lifts into a growth arrow,
 * built from pixel squares. Minimal, futuristic, memorable.
 */
export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        className="size-8 shrink-0"
        role="img"
        aria-label="EDUNEX logo"
      >
        <defs>
          <linearGradient id="edunex-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="60%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
        {/* open book base */}
        <path
          d="M4 9c4-2 8-2 12 0v17c-4-2-8-2-12 0V9Z"
          fill="url(#edunex-g)"
          opacity="0.92"
        />
        <path
          d="M28 9c-2.4-1.2-4.9-1.7-7.3-1.5L16 9v17c4-2 8-2 12 0V9Z"
          fill="url(#edunex-g)"
          opacity="0.55"
        />
        {/* pixel growth arrow rising from the page */}
        <rect x="18.5" y="15" width="3" height="3" rx="0.6" fill="#F97316" />
        <rect x="21.8" y="11.5" width="3" height="3" rx="0.6" fill="#F97316" />
        <rect x="25.1" y="8" width="3" height="3" rx="0.6" fill="#10B981" />
      </svg>
      {showWordmark && (
        <span className="text-lg font-extrabold tracking-tight">
          EDU<span className="text-gradient">NEX</span>
        </span>
      )}
    </span>
  );
}
