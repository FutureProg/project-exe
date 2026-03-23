/**
 * Native equivalents of the CSS design tokens in tokens.css.
 * Each value includes a comment with the OKLCH source token.
 * Update both files together when changing tokens.
 */

export const colors = {
  // --color-primary: oklch(0.55 0.20 250)
  primary: "#1a6cf0",
  // --color-primary-hover: color-mix(in oklch, primary 85%, black)
  primaryHover: "#155ac8",
  // --color-primary-subtle: color-mix(in oklch, primary 15%, transparent)
  primarySubtle: "rgba(26, 108, 240, 0.15)",

  // --color-surface: oklch(0.99 0.00 0)
  surface: "#fcfcfc",
  // --color-surface-raised: oklch(0.97 0.00 0)
  surfaceRaised: "#f7f7f7",
  // --color-surface-overlay: oklch(0.94 0.00 0)
  surfaceOverlay: "#f0f0f0",

  // --color-text: oklch(0.13 0.00 0)
  text: "#1e1e1e",
  // --color-text-secondary: oklch(0.45 0.00 0)
  textSecondary: "#6b6b6b",
  // --color-text-disabled: oklch(0.70 0.00 0)
  textDisabled: "#aaaaaa",
  // --color-text-on-primary: oklch(1.00 0.00 0)
  textOnPrimary: "#ffffff",

  // --color-border: oklch(0.88 0.00 0)
  border: "#dedede",

  // --color-error: oklch(0.55 0.22 25)
  error: "#e03e2b",
  // --color-success: oklch(0.55 0.18 145)
  success: "#27924e",
  // --color-warning: oklch(0.75 0.18 75)
  warning: "#c98a00",
} as const;

export const colorsDark = {
  // --color-primary: oklch(0.65 0.18 250) [dark]
  primary: "#4d8ff5",
  primaryHover: "#6ba3f7",
  primarySubtle: "rgba(77, 143, 245, 0.15)",

  surface: "#191919",
  surfaceRaised: "#222222",
  surfaceOverlay: "#2b2b2b",

  text: "#f2f2f2",
  textSecondary: "#a0a0a0",
  textDisabled: "#5c5c5c",
  textOnPrimary: "#ffffff",

  border: "#3a3a3a",

  error: "#f07060",
  success: "#4caf7d",
  warning: "#f0b840",
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
