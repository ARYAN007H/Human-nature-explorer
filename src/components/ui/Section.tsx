import React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  width?: "narrow" | "default" | "wide";
  as?: keyof JSX.IntrinsicElements;
}

const widthClassMap: Record<NonNullable<SectionProps["width"]>, string> = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-6xl",
};

export const Section: React.FC<SectionProps> = ({
  width = "default",
  as: Component = "section",
  className = "",
  children,
  ...rest
}) => {
  const classes = [
    "w-full px-4 md:px-8 py-16 md:py-24",
    "mx-auto",
    widthClassMap[width],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Use createElement to avoid JSX intrinsic typing issues and allow dynamic tags
  return React.createElement(Component as any, { className: classes, ...rest }, children);
};

export default Section;


