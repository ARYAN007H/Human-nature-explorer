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

// Backward-compatible color structure for existing components
export const colors = {
  // Legacy primary/secondary/accent structure mapped to Apple colors
  primary: {
    main: "#0A84FF",
    hover: "#0071E3",
    active: "#005FCC",
    light: "#E3F2FD",
  },
  secondary: {
    main: "#FF9500",
    hover: "#E68600",
    active: "#CC7700",
    light: "#FFF3E0",
  },
  accent: {
    main: "#FF2D55",
    hover: "#E63946",
    active: "#CC2244",
    light: "#FCE4EC",
  },
  neutral: {
    dark: "#000000",
    gray: "#8E8E93",
    light: "#F5F5F7",
    white: "#FFFFFF",
  },
  border: "#E5E5EA",
  divider: "#D1D1D6",

  // Light Mode (detailed)
  light: {
    // Backgrounds
    bg: "#FFFFFF",
    bgSecondary: "#F5F5F7",
    bgTertiary: "#EBEBF0",

    // Text
    text: "#000000",
    textSecondary: "#3A3A3C",
    textTertiary: "#8E8E93",
    textQuaternary: "#D1D1D6",

    // Semantic Colors (Apple)
    red: "#FF3B30",
    orange: "#FF9500",
    yellow: "#FFD000",
    green: "#00C853",
    cyan: "#00B0FF",
    blue: "#0A84FF",
    purple: "#5856D6",
    pink: "#FF2D55",

    // Primary & Accent
    primary: "#0A84FF",
    primaryHover: "#0071E3",
    primaryActive: "#005FCC",
    accent: "#FF9500",
    accentHover: "#E68600",
    accentActive: "#CC7700",

    // Borders
    border: "#E5E5EA",
    divider: "#D1D1D6",
  },

  // Dark Mode (detailed)
  dark: {
    // Backgrounds
    bg: "#000000",
    bgSecondary: "#1C1C1E",
    bgTertiary: "#2C2C2E",

    // Text
    text: "#FFFFFF",
    textSecondary: "#F5F5F7",
    textTertiary: "#8E8E93",
    textQuaternary: "#424245",

    // Semantic Colors (Apple Dark)
    red: "#FF453A",
    orange: "#FF9F0A",
    yellow: "#FFD60A",
    green: "#00D084",
    cyan: "#00B0FF",
    blue: "#0A84FF",
    purple: "#5856D6",
    pink: "#FF375F",

    // Primary & Accent
    primary: "#0A84FF",
    primaryHover: "#1B95E8",
    primaryActive: "#2BA3F5",
    accent: "#FF9F0A",
    accentHover: "#FFB020",
    accentActive: "#FFC332",

    // Borders
    border: "#424245",
    divider: "#3A3A3C",
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
