import React from "react";
import { Link } from "react-router-dom";
import { Chapter } from "../../constants/chapters";
import GlassSurface from "../ui/GlassSurface";

interface ChapterCardProps {
  chapter: Chapter;
}

export const ChapterCard: React.FC<ChapterCardProps> = ({ chapter }) => {
  return (
    <Link to={`/chapter/${chapter.id}`} className="group block will-change-transform">
      <GlassSurface
        variant="card"
        depth="1"
        className="p-6 md:p-7 cursor-pointer transition-transform group-hover:-translate-y-[2px]"
        style={{
          borderLeft: `3px solid ${chapter.color}`,
        }}
      >
      {/* Badge */}
      <div className="mb-4">
        <span
          className="text-xs font-semibold uppercase px-3 py-1 rounded-full"
          style={{
            backgroundColor: `${chapter.color}25`,
            color: chapter.color,
          }}
        >
          {chapter.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-serif font-bold mb-3 transition-colors group-hover:text-opacity-80" style={{ color: "var(--color-surface-primary)" }}>
        {chapter.title}
      </h3>

      {/* Teaser */}
      <p className="text-base mb-4 font-semibold" style={{ color: chapter.color }}>
        {chapter.teaser}
      </p>

      {/* Description Preview */}
      <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-fg-secondary)" }}>
        {chapter.description.substring(0, 120)}...
      </p>

      {/* Footer with icons */}
      <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
        <div className="text-xs font-semibold uppercase" style={{ color: "var(--color-fg-secondary)" }}>
          Read more →
        </div>
        <div className="flex items-center gap-4">
          <Link
            to={`/chapter/${chapter.id}/deep`}
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => void import("../../pages/DeepDetailPage")}
            onFocus={() => void import("../../pages/DeepDetailPage")}
            className="text-sm font-medium text-accent hover:underline"
            aria-label={`Read ${chapter.title} in depth`}
          >
            Read in depth
          </Link>
          {chapter.audioReactive && (
            <div title="This chapter has audio-reactive elements" style={{ color: chapter.color }}>
              🎤
            </div>
          )}
        </div>
      </div>
      </GlassSurface>
  </Link>
  );
};

export default ChapterCard;
