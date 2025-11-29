import React from "react";
import GlassSurface, { GlassSurfaceProps } from "./GlassSurface";

export interface GlassCardProps extends Omit<GlassSurfaceProps, "variant"> {
  as?: GlassSurfaceProps["as"];
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  depth = "2",
  ...rest
}) => {
  return (
    <GlassSurface
      depth={depth}
      variant="card"
      className={["p-6 md:p-8", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </GlassSurface>
  );
};

export default GlassCard;


