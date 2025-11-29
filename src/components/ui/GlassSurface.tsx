import React from "react";

type GlassDepth = "1" | "2" | "3";
type GlassAccent = "none" | "blue" | "cyan" | "purple";
type GlassVariant = "panel" | "nav" | "card" | "hero";

export interface GlassSurfaceProps
  extends React.ComponentPropsWithoutRef<"div"> {
  depth?: GlassDepth;
  accent?: GlassAccent;
  variant?: GlassVariant;
  as?: keyof JSX.IntrinsicElements;
}

const depthClassMap: Record<GlassDepth, string> = {
  "1": "lg-glass-depth-1",
  "2": "",
  "3": "lg-glass-depth-3",
};

const variantClassMap: Record<GlassVariant, string> = {
  panel: "lg-glass-surface",
  nav: "lg-glass-surface",
  card: "lg-glass-surface",
  hero: "lg-glass-surface lg-glass-depth-3",
};

const accentClassMap: Record<GlassAccent, string> = {
  none: "",
  blue: "lg-glow-outline",
  cyan: "lg-glow-outline",
  purple: "lg-glow-outline",
};

export const GlassSurface = React.forwardRef<HTMLDivElement, GlassSurfaceProps>(
  (
    {
      depth = "2",
      accent = "none",
      variant = "panel",
      as: Component = "div",
      className = "",
      children,
      ...rest
    },
    ref
  ) => {
    const classes = [
      variantClassMap[variant],
      depthClassMap[depth],
      accentClassMap[accent],
      "will-change-transform",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // Use createElement to allow dynamic intrinsic element types and pass ref
    return React.createElement(
      Component as any,
      { ref: ref as any, className: classes, ...rest },
      children
    );
  }
);

GlassSurface.displayName = "GlassSurface";

export default GlassSurface;


