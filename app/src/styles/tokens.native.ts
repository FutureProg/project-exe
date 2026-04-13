/**
 * Native equivalents of the CSS design tokens in tokens.css.
 * Each value includes a comment with the OKLCH source token.
 * Update both files together when changing tokens.
 */

export const colors = {
  // --color-primary
  primary: "oklch(0.55 0.20 250)",
  // --color-primary-hover: color-mix(in oklch, primary 85%, black) → oklch(0.47 0.17 250)
  primaryHover: "oklch(0.47 0.17 250)",
  // --color-primary-subtle: color-mix(in oklch, primary 15%, transparent) → primary @ 15% opacity
  primarySubtle: "rgba(26, 108, 240, 0.15)",

  // --color-surface
  surface: "oklch(0.99 0.00 0)",
  // --color-surface-raised
  surfaceRaised: "oklch(0.97 0.00 0)",
  // --color-surface-overlay
  surfaceOverlay: "oklch(0.94 0.00 0)",

  // --color-text
  text: "oklch(0.13 0.00 0)",
  // --color-text-secondary
  textSecondary: "oklch(0.45 0.00 0)",
  // --color-text-disabled
  textDisabled: "oklch(0.70 0.00 0)",
  // --color-text-on-primary
  textOnPrimary: "oklch(1.00 0.00 0)",

  // --color-border
  border: "oklch(0.88 0.00 0)",

  // --color-error
  error: "oklch(0.55 0.22 25)",
  // --color-success
  success: "oklch(0.55 0.18 145)",
  // --color-warning
  warning: "oklch(0.75 0.18 75)",
} as const;

export const colorsDark = {
  // --color-primary [dark]
  primary: "oklch(0.65 0.18 250)",
  // --color-primary-hover: color-mix(in oklch, primary 85%, white) → oklch(0.70 0.15 250)
  primaryHover: "oklch(0.70 0.15 250)",
  // --color-primary-subtle: primary @ 15% opacity
  primarySubtle: "rgba(77, 143, 245, 0.15)",

  surface: "oklch(0.10 0.00 0)",
  surfaceRaised: "oklch(0.14 0.00 0)",
  surfaceOverlay: "oklch(0.18 0.00 0)",

  text: "oklch(0.95 0.00 0)",
  textSecondary: "oklch(0.65 0.00 0)",
  textDisabled: "oklch(0.42 0.00 0)",
  textOnPrimary: "oklch(1.00 0.00 0)",

  border: "oklch(0.25 0.00 0)",

  error: "oklch(0.70 0.18 25)",
  success: "oklch(0.70 0.15 145)",
  warning: "oklch(0.82 0.15 75)",
} as const;

export const space = {
  1:  4,
  2:  8,
  3:  12,
  4:  16,
  6:  24,
  8:  32,
  12: 48,
  16: 64,
  xs:   13,
  sm:   14,
  base: 16,
  lg:   18,
  xl:   20,
  "2xl": 24,
  "3xl": 30,
} as const;

export const fontSize = {
  xs:   13,
  sm:   14,
  base: 16,
  lg:   18,
  xl:   20,
  "2xl": 24,
  "3xl": 30,
} as const;

export const fontWeight = {
  normal:   "400" as const,
  medium:   "500" as const,
  semibold: "600" as const,
  bold:     "700" as const,
};

export const radius = {
  sm:   4,
  md:   8,
  lg:   12,
  xl:   16,
  full: 9999,
} as const;

// --duration-*
export const duration = {
  fast:   100,  // --duration-fast
  normal: 200,  // --duration-normal
  slow:   350,  // --duration-slow
} as const;

// Reanimated-compatible Bezier easing values matching --ease-* tokens.
// Usage: withTiming(val, { duration: duration.normal, easing: Easing.bezier(...easing.out) })
export const easing = {
  out:   [0.0, 0.0, 0.2, 1] as [number, number, number, number], // --ease-out
  inOut: [0.4, 0.0, 0.2, 1] as [number, number, number, number], // --ease-in-out
} as const;
