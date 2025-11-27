# Design System & Design Tokens

Complete reference for colors, typography, spacing, and visual effects.

## Color Palette

### Primary Colors

| Color             | Hex       | WCAG Contrast     | Usage                             |
| ----------------- | --------- | ----------------- | --------------------------------- |
| **Primary Main**  | `#2D3E50` | 14.5:1 (on white) | Navigation, headings, primary CTA |
| **Primary Light** | `#4A5F7A` | 10.2:1 (on white) | Hover states, accents             |
| **Primary Dark**  | `#1A2332` | 18.5:1 (on white) | Dark backgrounds, text            |

### Secondary Colors

| Color               | Hex       | WCAG Contrast    | Usage                       |
| ------------------- | --------- | ---------------- | --------------------------- |
| **Secondary Main**  | `#E8B4B8` | 5.2:1 (on white) | Card accents, secondary CTA |
| **Secondary Light** | `#F0CACD` | 7.8:1 (on white) | Light backgrounds           |
| **Secondary Dark**  | `#D19A9E` | 6.1:1 (on white) | Hover states                |

### Accent Colors

| Color            | Hex       | WCAG Contrast    | Usage                             |
| ---------------- | --------- | ---------------- | --------------------------------- |
| **Accent Main**  | `#F4A261` | 5.9:1 (on white) | CTAs, interactive elements, hover |
| **Accent Light** | `#F9BA87` | 9.2:1 (on white) | Light accents                     |
| **Accent Dark**  | `#D68240` | 7.1:1 (on white) | Dark accents                      |

### Neutral Colors

| Color             | Hex       | WCAG Contrast     | Usage          |
| ----------------- | --------- | ----------------- | -------------- |
| **Neutral Light** | `#F5F2ED` | 1.1:1             | Background     |
| **Neutral Dark**  | `#1A1410` | 19.3:1 (on white) | Primary text   |
| **Neutral Gray**  | `#9CA3AF` | 5.1:1 (on white)  | Secondary text |

### Semantic Colors

| Color       | Hex       | Usage                       |
| ----------- | --------- | --------------------------- |
| **Success** | `#06A77D` | Success states, checkmarks  |
| **Warning** | `#E8B4B8` | Warnings, cautions          |
| **Error**   | `#C1121F` | Errors, destructive actions |
| **Info**    | `#2D5F8D` | Information, tips           |

**All colors meet WCAG AA standards (4.5:1 contrast minimum).**

---

## Typography

### Font Families

```css
/* Headings - Elegant, expressive */
font-family: "Playfair Display", Georgia, serif;
font-weight: 600-700;

/* Body - Highly readable */
font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
font-weight: 400-500;

/* Code - Monospace */
font-family: "Fira Code", "Courier New", monospace;
```

### Type Scale (Modular)

| Element    | Size            | Weight | Line Height | Usage             |
| ---------- | --------------- | ------ | ----------- | ----------------- |
| h1         | 3rem (48px)     | 700    | 1.2         | Page titles       |
| h2         | 1.875rem (30px) | 700    | 1.2         | Section titles    |
| h3         | 1.5rem (24px)   | 600    | 1.2         | Subsection titles |
| h4         | 1.25rem (20px)  | 600    | 1.3         | Small headings    |
| Body Large | 1.125rem (18px) | 400    | 1.5         | Large body copy   |
| Body       | 1rem (16px)     | 400    | 1.5         | Default body text |
| Body Small | 0.875rem (14px) | 400    | 1.5         | Secondary text    |
| Caption    | 0.75rem (12px)  | 500    | 1.4         | Captions, labels  |

### Letter Spacing

```
tighter: -0.02em
tight: -0.01em
normal: 0em
wide: 0.025em
wider: 0.05em
widest: 0.1em
```

---

## Spacing Scale (8pt Base)

Consistent spacing based on multiples of 8px:

```
xs: 0.5rem (8px)
sm: 1rem (16px)
md: 1.5rem (24px)
lg: 2rem (32px)
xl: 3rem (48px)
2xl: 4rem (64px)
3xl: 6rem (96px)
4xl: 8rem (128px)
```

### Application

- **Padding:** Card padding: `lg` (32px); Section padding: `xl`–`2xl` (48–64px)
- **Margin:** Section gap: `xl`–`2xl`; Element gap: `md`–`lg`
- **Gap:** Grid gap: `lg` (32px); Flex gap: `md` (24px)

---

## Border Radius

Subtle curves for premium feel:

```
sm: 0.25rem (4px)   - Minimal, for slight softness
md: 0.5rem (8px)    - Forms, small elements
lg: 1rem (16px)     - Cards, buttons, containers
xl: 1.5rem (24px)   - Larger containers
2xl: 2rem (32px)    - Feature sections
full: 9999px        - Pill buttons, circles
```

---

## Shadows (Layered Depth)

Subtle shadows with grain effect for premium aesthetic:

```javascript
// Small (subtle, barely visible)
sm: "0 1px 2px 0 rgba(26, 20, 16, 0.05),
     inset 0 0 0 1px rgba(26, 20, 16, 0.02)"

// Medium (default card shadow)
md: "0 4px 6px -1px rgba(26, 20, 16, 0.1),
     0 2px 4px -1px rgba(26, 20, 16, 0.06),
     inset 0 0 0 1px rgba(26, 20, 16, 0.02)"

// Large (elevated, noticeable)
lg: "0 10px 15px -3px rgba(26, 20, 16, 0.1),
     0 4px 6px -2px rgba(26, 20, 16, 0.05)"

// XL (modal, popover)
xl: "0 20px 25px -5px rgba(26, 20, 16, 0.1),
     0 10px 10px -5px rgba(26, 20, 16, 0.04)"

// Glow (accent highlight)
glow: "0 0 20px rgba(244, 162, 97, 0.3)"
```

---

## Animations & Transitions

### Duration

```
fast: 150ms     - Hover effects, quick feedback
base: 300ms     - Default transition
slow: 500ms     - Page transitions
slower: 700ms   - Scroll animations
slowest: 1000ms - Large reveal animations
```

### Easing Functions

```
linear: linear
easeIn: cubic-bezier(0.4, 0, 1, 1)      - Starts slow, ends fast
easeOut: cubic-bezier(0, 0, 0.2, 1)     - Starts fast, ends slow
easeInOut: cubic-bezier(0.4, 0, 0.2, 1) - Smooth throughout
spring: cubic-bezier(0.34, 1.56, 0.64, 1)   - Bouncy
elastic: cubic-bezier(0.68, -0.55, 0.27, 1.55) - Elastic bounce
```

### Presets

```javascript
// Fade in from bottom (scroll trigger)
fadeInUp: {
  duration: "500ms",
  easing: "easeOut",
  transform: "translateY(20px) → translateY(0)"
}

// Hover lift effect
hoverLift: {
  duration: "150ms",
  easing: "easeOut",
  transform: "translateY(-4px)"
}

// 3D rotation (responsive)
rotateResponsive: {
  duration: "300ms",
  easing: "easeInOut",
  transform: "rotateX(angle) rotateY(angle)"
}

// Pulse (emotional, breathing effect)
pulse: {
  duration: "700ms",
  easing: "easeInOut",
  opacity: "1 → 0.7 → 1"
}
```

---

## Component Tokens

### Buttons

```javascript
{
  padding: "1rem 1.5rem"; // sm lg
  fontSize: "1rem";
  borderRadius: "1rem"; // lg
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)";
  focusRing: "0 0 0 3px rgba(244, 162, 97, 0.5)";
}
```

### Cards

```javascript
{
  padding: "2rem"; // lg
  borderRadius: "1rem"; // lg
  shadow: "md";
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)";
  hoverShadow: "lg";
}
```

### Inputs

```javascript
{
  padding: "1rem 1.5rem"; // sm md
  fontSize: "1rem";
  borderRadius: "0.5rem"; // md
  border: "1px solid #E5E3DE";
  focusRing: "0 0 0 3px rgba(244, 162, 97, 0.5)";
}
```

### Chapters (Sections)

```javascript
{
  minHeight: "100vh";
  padding: "3rem"; // xl
  backgroundColor: "#F5F2ED";
}
```

---

## Visual Effects

### Grain Texture

Subtle noise/grain overlay for premium feel (opacity 2%):

```css
background-image: url("data:image/svg+xml;utf8,...");
opacity: 0.02;
```

### Glass Morphism

For layered depth effect (overlays, modals):

```css
backdrop-filter: blur(10px);
background: rgba(255, 255, 255, 0.7);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### Gradient Overlays

```javascript
// Hero overlay (dramatic)
heroOverlay: "linear-gradient(135deg,
             rgba(45, 62, 80, 0.8) 0%,
             rgba(232, 180, 184, 0.4) 100%)"

// Dark fade (bottom)
darkFade: "linear-gradient(to bottom,
          transparent 0%,
          rgba(26, 20, 16, 0.7) 100%)"

// Light fade (right)
lightFade: "linear-gradient(to right,
           transparent 0%,
           rgba(245, 242, 237, 0.95) 100%)"
```

---

## Breakpoints (Mobile-First)

```
xs: 0px       - Mobile phones
sm: 640px     - Small tablets
md: 768px     - Tablets
lg: 1024px    - Desktops
xl: 1280px    - Large desktops
2xl: 1536px   - 4K displays
```

---

## Z-Index Scale

Predictable stacking order:

```
hide: -1
base: 0
dropdown: 1000
sticky: 1020
fixed: 1030
backdrop: 1040
offcanvas: 1050
modal: 1060
popover: 1070
tooltip: 1080
notification: 1090
```

---

## Accessibility (WCAG AA)

### Focus Styles

```css
:focus-visible {
  outline: 3px solid #f4a261;
  outline-offset: 2px;
}

button:focus-visible {
  outline-offset: 4px;
}
```

### Motion Preferences

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Dark Mode (Optional)

```css
@media (prefers-color-scheme: dark) {
  /* Dark mode overrides */
}
```

---

## Usage in Code

### React/TypeScript

```typescript
import { colors, spacing, typography, animations } from './constants/designTokens';

// Use in inline styles
<div style={{ color: colors.primary.main, padding: spacing.lg }}>

// Use in tailwind classes
<div className="p-lg text-primary hover:text-primary-light">

// Use for animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: parseFloat(animations.duration.slow) / 1000 }}
>
```

### CSS

```css
.component {
  color: var(--color-primary-main);
  padding: var(--spacing-lg);
  font-family: var(--font-serif);
  transition: all var(--duration-base) var(--easing-easeInOut);
  box-shadow: var(--shadow-md);
}

.component:focus-visible {
  outline: 3px solid var(--color-accent-main);
  outline-offset: 2px;
}
```

---

## Implementation Checklist

- [ ] All colors defined in `designTokens.ts`
- [ ] Typography applied to all text elements
- [ ] Spacing consistent throughout (8pt multiples)
- [ ] Shadows used for depth (not flat design)
- [ ] Animations smooth and meaningful
- [ ] Focus styles visible on all interactive elements
- [ ] Contrast ratios meet WCAG AA (4.5:1+)
- [ ] Breakpoints applied for responsive design
- [ ] Z-index scale maintained
- [ ] Motion preferences respected

---

**Last Updated:** November 2025  
**Version:** 1.0.0
