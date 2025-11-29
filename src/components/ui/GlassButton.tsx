import React from "react";

type GlassButtonVariant = "primary" | "secondary" | "ghost" | "icon";
type GlassButtonAccent = "blue" | "cyan" | "purple";

export interface GlassButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  variant?: GlassButtonVariant;
  accent?: GlassButtonAccent;
  as?: keyof JSX.IntrinsicElements;
}

const baseClass =
  "inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-full text-sm font-semibold focus-visible:outline-none will-change-transform";

const variantClassMap: Record<GlassButtonVariant, string> = {
  primary:
    "lg-glass-surface lg-glass-depth-2 lg-glow-outline text-[rgba(5,5,5,0.96)]",
  secondary:
    "lg-glass-surface lg-glass-depth-1 text-[rgba(5,5,5,0.9)] border border-[rgba(255,255,255,0.32)]",
  ghost:
    "border border-[rgba(255,255,255,0.26)] bg-[rgba(0,0,0,0.26)] text-[rgba(245,245,247,0.9)] hover:bg-[rgba(0,0,0,0.36)] transition-colors",
  icon:
    "lg-glass-surface lg-glass-depth-1 lg-glow-outline h-9 w-9 p-0 rounded-full text-[rgba(245,245,247,0.96)]",
};

const accentRingMap: Record<GlassButtonAccent, string> = {
  blue: "focus-visible:ring-[rgba(77,169,255,0.8)]",
  cyan: "focus-visible:ring-[rgba(90,240,217,0.8)]",
  purple: "focus-visible:ring-[rgba(167,139,250,0.8)]",
};

export const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  (
    { variant = "primary", accent = "blue", className = "", children, as: Component = "button", ...rest },
    ref
  ) => {
    const classes = [
      baseClass,
      variantClassMap[variant],
      accentRingMap[accent],
      "focus-visible:ring-2 focus-visible:ring-offset-0 active:scale-[0.97] transition-all duration-200",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return React.createElement(
      Component as any,
      { ref, className: classes, ...rest },
      children
    );
  }
);

GlassButton.displayName = "GlassButton";

export default GlassButton;


