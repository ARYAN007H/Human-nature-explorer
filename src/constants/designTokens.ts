/**
 * Design Tokens - Apple San Francisco Design System
 * Based on Apple's official design language and HIG
 * Includes backward-compatible structure for existing components
 */

// ============================================================================
// TYPOGRAPHY - SF (San Francisco) System
// ============================================================================

export const typography = {
  fontFamily: {
    display: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    serif: "'Playfair Display', Georgia, serif",
    mono: "'Fira Code', 'Courier New', monospace",
  },

  fontSize: {
    xs: "0.75rem",    // 12px
    sm: "0.875rem",   // 14px
    base: "1rem",     // 16px
    lg: "1.125rem",   // 18px
    xl: "1.25rem",    // 20px
    "2xl": "1.5rem",  // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem",    // 48px
    "6xl": "3.75rem", // 60px
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.2,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },

  letterSpacing: {
    tighter: "-0.02em",
    tight: "-0.01em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
  },
};

// ============================================================================
// COLOR PALETTE - APPLE SYSTEM COLORS (Backward Compatible)
// ============================================================================

// Liquid-Glass Apple palette – aligned with CSS variables
export const colors = {
  base: {
    white: "#FFFFFF",
    black: "#0B0B0B",
  },
  text: {
    primary: "#050505",
    secondary: "#1A1A1C",
    tertiary: "#5A5A5E",
  },
  glass: {
    tint: "rgba(255, 255, 255, 0.14)",
    tintSoft: "rgba(255, 255, 255, 0.10)",
    tintStrong: "rgba(255, 255, 255, 0.18)",
    dark: "rgba(7, 7, 7, 0.18)",
  },
  neon: {
    blue: "#4DA9FF",
    cyan: "#5AF0D9",
    purple: "#A78BFA",
    pink: "#FF357F",
  },
  accent: {
    warm: "#FF9500",
  },
  border: {
    subtle: "#252525",
    divider: "#1C1C1E",
  },
};

// ============================================================================
// SPACING - 4pt Baseline Grid (Apple Standard)
// ============================================================================

export const spacing = {
  0: "0",
  1: "0.25rem",  // 4px
  2: "0.5rem",   // 8px
  3: "0.75rem",  // 12px
  4: "1rem",     // 16px
  5: "1.25rem",  // 20px
  6: "1.5rem",   // 24px
  8: "2rem",     // 32px
  10: "2.5rem",  // 40px
  12: "3rem",    // 48px
  16: "4rem",    // 64px
  20: "5rem",    // 80px
  24: "6rem",    // 96px
};

// ============================================================================
// SHADOWS - APPLE ELEVATION SYSTEM
// ============================================================================

export const shadows = {
  xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
  sm: "0 2px 8px rgba(0, 0, 0, 0.08)",
  md: "0 4px 12px rgba(0, 0, 0, 0.12)",
  lg: "0 8px 24px rgba(0, 0, 0, 0.15)",
  xl: "0 16px 40px rgba(0, 0, 0, 0.2)",
  none: "none",
};

// ============================================================================
// BORDER RADIUS - APPLE CONSISTENT CURVES
// ============================================================================

export const borderRadius = {
  sm: "0.5rem",    // 8px
  md: "0.75rem",   // 12px
  lg: "1rem",      // 16px
  xl: "1.5rem",    // 24px
  "2xl": "2rem",   // 32px
  full: "9999px",
};

// ============================================================================
// TRANSITIONS - APPLE 200MS STANDARD
// ============================================================================

export const transitions = {
  fast: "100ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  base: "200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  slow: "300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
};

// ============================================================================
// Z-INDEX SCALE
// ============================================================================

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  backdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};

// ============================================================================
// BREAKPOINTS - RESPONSIVE DESIGN
// ============================================================================

export const breakpoints = {
  xs: "0px",       // Mobile
  sm: "640px",     // Small tablet
  md: "768px",     // Tablet
  lg: "1024px",    // Desktop
  xl: "1280px",    // Large desktop
  "2xl": "1536px", // 4K
};
