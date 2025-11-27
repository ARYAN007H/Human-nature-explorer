import React from "react";
import { chapterLookup } from "../../constants/chapters";
import { colors } from "../../constants/designTokens";

interface Fallback2DProps {
  chapterId?: string;
}

export const Fallback2D: React.FC<Fallback2DProps> = ({ chapterId = "emotions" }) => {
  const chapter = chapterId ? chapterLookup[chapterId] : null;
  const bgColor = chapter?.color || colors.secondary.main;

  return (
    <div
      className="w-full h-full flex items-center justify-center p-8"
      style={{
        background: `linear-gradient(135deg, ${bgColor}40 0%, ${bgColor}20 100%)`,
      }}
    >
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">✨</div>
        <h3
          className="text-3xl font-serif font-bold mb-4"
          style={{ color: colors.primary.main }}
        >
          2D Experience
        </h3>
        <p className="mb-6" style={{ color: colors.neutral.gray }}>
          Your browser doesn't support WebGL 3D graphics, so we're showing a beautiful 2D version instead. The content
          and insights are the same.
        </p>
        <p className="text-sm" style={{ color: colors.neutral.gray }}>
          <strong>Tip:</strong> Try this on a device with better graphics support for the full 3D experience, or
          continue exploring in 2D.
        </p>
      </div>
    </div>
  );
};

export default Fallback2D;
