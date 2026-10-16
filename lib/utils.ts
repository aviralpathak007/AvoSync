export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** Shared easing for scroll reveals and UI transitions. */
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;
