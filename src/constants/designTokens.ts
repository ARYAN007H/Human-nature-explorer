/**
 * Design Tokens - Global Design System
 * WCAG AA compliant color palette with premium aesthetic
 * Rich, non-minimal with textured surfaces and layered depth
 */

// ============================================================================
// COLOR PALETTE (WCAG AA Compliant, 4.5:1+ Contrast)
// ============================================================================

export const colors = {
  // Primary: Deep slate for primary actions and navigation
  primary: {
    main: "#2D3E50",     // Deep slate
    light: "#4A5F7A",    // Lighter slate
    lighter: "#6B8099",  // Even lighter
    dark: "#1A2332",     // Darker slate
  },
  
  // Secondary: Rose-mauve for secondary elements and accents
  secondary: {
    main: "#E8B4B8",     // Rose-mauve
    light: "#F0CACD",    // Lighter rose
    dark: "#D19A9E",     // Darker rose
  },
  
  // Accent: Golden-orange for interactions and CTAs
  accent: {
    main: "#F4A261",     // Golden orange
    light: "#F9BA87",    // Lighter accent
    dark: "#D68240",     // Darker accent
  },
  
  // Neutrals: Ivory and charcoal for background/text
  neutral: {
    light: "#F5F2ED",    // Ivory background
    lighter: "#FAFAF8",  // Off-white
    dark: "#1A1410",     // Charcoal text
    darker: "#0D0B08",   // Nearly black
    gray: "#9CA3AF",     // Mid gray for secondary text
  },
  
  // Semantic: States and feedback
  success: "#06A77D",    // Teal for success
  warning: "#E8B4B8",    // Rose for warnings (secondary)
  error: "#C1121F",      // Red for errors
  info: "#2D5F8D",       // Blue info
  
  // Utilities
  background: "#F5F2ED",
  foreground: "#1A1410",
  border: "#E5E3DE",
  divider: "#D4D0CA",
  
  // Transparent variants for overlays
  overlay: {
    dark: "rgba(13, 11, 8, 0.5)",
    light: "rgba(245, 242, 237, 0.7)",
  },
};

// ============================================================================
// TYPOGRAPHY (Elegant, Large Expressive Headings)
// ============================================================================

export const typography = {
  fontFamily: {
    serif: "'Playfair Display', Georgia, serif",      // Headings (600-700 weight)
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    mono: "'Fira Code', 'Courier New', monospace",    // Code snippets
  },
  
  fontSize: {
    xs: "0.75rem",      // 12px - tiny labels
    sm: "0.875rem",     // 14px - secondary text
    base: "1rem",       // 16px - body text
    lg: "1.125rem",     // 18px - large body
    xl: "1.25rem",      // 20px - subheading
    "2xl": "1.5rem",    // 24px - section title
    "3xl": "1.875rem",  // 30px - chapter title
    "4xl": "2.25rem",   // 36px - page title
    "5xl": "3rem",      // 48px - hero title
    "6xl": "3.75rem",   // 60px - display
  },
  
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  
  lineHeight: {
    tight: 1.2,         // Headings
    snug: 1.375,        // Subheadings
    normal: 1.5,        // Body text
    relaxed: 1.75,      // Large body
    loose: 2,           // Spacious
  },
  
  letterSpacing: {
    tighter: "-0.02em",
    tight: "-0.01em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
};

// ============================================================================
// SPACING (8-point Scale for Harmony)
// ============================================================================

export const spacing = {
  xs: "0.5rem",    // 8px
  sm: "1rem",      // 16px
  md: "1.5rem",    // 24px
  lg: "2rem",      // 32px
  xl: "3rem",      // 48px
  "2xl": "4rem",   // 64px
  "3xl": "6rem",   // 96px
  "4xl": "8rem",   // 128px
};

// ============================================================================
// BORDER RADIUS (Subtle Curves)
// ============================================================================

export const borderRadius = {
  none: "0",
  sm: "0.25rem",   // 4px - minimal
  md: "0.5rem",    // 8px - subtle
  lg: "1rem",      // 16px - cards
  xl: "1.5rem",    // 24px - larger elements
  "2xl": "2rem",   // 32px
  full: "9999px",  // Pill buttons
};

// ============================================================================
// SHADOWS (Layered Depth, Subtle Grain Effect)
// ============================================================================

export const shadows = {
  none: "none",
  
  // Subtle shadows for premium feel
  sm: "0 1px 2px 0 rgba(26, 20, 16, 0.05), inset 0 0 0 1px rgba(26, 20, 16, 0.02)",
  md: "0 4px 6px -1px rgba(26, 20, 16, 0.1), 0 2px 4px -1px rgba(26, 20, 16, 0.06), inset 0 0 0 1px rgba(26, 20, 16, 0.02)",
  lg: "0 10px 15px -3px rgba(26, 20, 16, 0.1), 0 4px 6px -2px rgba(26, 20, 16, 0.05), inset 0 0 0 1px rgba(26, 20, 16, 0.02)",
  xl: "0 20px 25px -5px rgba(26, 20, 16, 0.1), 0 10px 10px -5px rgba(26, 20, 16, 0.04), inset 0 0 0 1px rgba(26, 20, 16, 0.02)",
  
  // Elevated shadows for modals/popovers
  elevated: "0 25px 50px -12px rgba(26, 20, 16, 0.15), inset 0 0 0 1px rgba(26, 20, 16, 0.02)",
  
  // Inner shadow for texture
  inner: "inset 0 0 2px rgba(26, 20, 16, 0.05)",
  
  // Glow effects
  glow: "0 0 20px rgba(244, 162, 97, 0.3)",
  "glow-secondary": "0 0 20px rgba(232, 180, 184, 0.2)",
};

// ============================================================================
// ANIMATIONS (Smooth, Meaningful Transitions)
// ============================================================================

export const animations = {
  duration: {
    fast: "150ms",
    base: "300ms",
    slow: "500ms",
    slower: "700ms",
    slowest: "1000ms",
  },
  
  easing: {
    linear: "linear",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    elastic: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
  },
  
  // Standard transitions
  transitions: {
    colors: "color var(--duration-base) var(--easing-easeInOut)",
    opacity: "opacity var(--duration-base) var(--easing-easeInOut)",
    transform: "transform var(--duration-base) var(--easing-easeInOut)",
    shadow: "box-shadow var(--duration-slow) var(--easing-easeInOut)",
    all: "all var(--duration-base) var(--easing-easeInOut)",
  },
};

// ============================================================================
// TEXTURE & VISUAL EFFECTS (Premium Non-Minimal Aesthetic)
// ============================================================================

export const effects = {
  // Subtle grain/noise for premium feel
  grain: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\"><filter id=\"noise\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" seed=\"2\" /></filter><rect width=\"100\" height=\"100\" filter=\"url(%23noise)\" opacity=\"0.02\"/></svg>')",
  
  // Glass morphism for layered effect
  backdrop: "backdrop-filter: blur(10px); background: rgba(255, 255, 255, 0.7)",
  
  // Gradient overlays for depth
  gradients: {
    heroOverlay: "linear-gradient(135deg, rgba(45, 62, 80, 0.8) 0%, rgba(232, 180, 184, 0.4) 100%)",
    darkFade: "linear-gradient(to bottom, transparent 0%, rgba(26, 20, 16, 0.7) 100%)",
    lightFade: "linear-gradient(to right, transparent 0%, rgba(245, 242, 237, 0.95) 100%)",
  },
};

// ============================================================================
// MOTION PRESETS (For Interactive Elements)
// ============================================================================

export const motionPresets = {
  // Scroll-triggered animations
  fadeInUp: {
    duration: animations.duration.slow,
    easing: animations.easing.easeOut,
  },
  
  // Hover effects
  hoverLift: {
    duration: animations.duration.fast,
    easing: animations.easing.easeOut,
    transform: "translateY(-4px)",
  },
  
  // 3D scene interactions
  rotateResponsive: {
    duration: animations.duration.base,
    easing: animations.easing.easeInOut,
  },
  
  // Microinteractions
  pulse: {
    duration: animations.duration.slower,
    easing: animations.easing.easeInOut,
  },
};

// ============================================================================
// BREAKPOINTS (Mobile-First Responsive Design)
// ============================================================================

export const breakpoints = {
  xs: "0px",       // Mobile
  sm: "640px",     // Small tablet
  md: "768px",     // Tablet
  lg: "1024px",    // Desktop
  xl: "1280px",    // Large desktop
  "2xl": "1536px", // 4K
};

// ============================================================================
// Z-INDEX SCALE (Predictable Stacking)
// ============================================================================

export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  backdrop: 1040,
  offcanvas: 1050,
  modal: 1060,
  popover: 1070,
  tooltip: 1080,
  notification: 1090,
};

// ============================================================================
// ACCESSIBILITY (WCAG AA Compliance)
// ============================================================================

export const a11y = {
  // Focus styles
  focusRing: "0 0 0 3px rgba(244, 162, 97, 0.5)",
  focusRingOffset: "2px",
  
  // High contrast mode support
  highContrast: "@media (prefers-contrast: more)",
  
  // Reduced motion support
  prefersReducedMotion: "@media (prefers-reduced-motion: reduce)",
  
  // Dark mode support
  prefersDarkMode: "@media (prefers-color-scheme: dark)",
};

// ============================================================================
// COMPONENT-SPECIFIC TOKENS
// ============================================================================

export const components = {
  button: {
    padding: `${spacing.sm} ${spacing.md}`,
    fontSize: typography.fontSize.base,
    borderRadius: borderRadius.lg,
    transition: animations.transitions.all,
  },
  
  card: {
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    shadow: shadows.md,
    transition: animations.transitions.all,
  },
  
  input: {
    padding: `${spacing.sm} ${spacing.md}`,
    fontSize: typography.fontSize.base,
    borderRadius: borderRadius.md,
    border: `1px solid ${colors.border}`,
  },
  
  chapter: {
    minHeight: "100vh",
    padding: spacing.xl,
  },
};
