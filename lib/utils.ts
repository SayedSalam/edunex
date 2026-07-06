import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional class names, de-duping Tailwind conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Compact currency formatter used across pricing + dashboards. */
export function formatCurrency(value: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

/** e.g. 12480 -> "12.5k" for stat counters. */
export function formatCompact(value: number) {
  return new Intl.NumberFormat("en-US", { notation: "compact" }).format(value);
}
