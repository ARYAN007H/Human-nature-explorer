import React from "react";
import { Link } from "react-router-dom";
import { Chapter } from "../../constants/chapters";
import { colors } from "../../constants/designTokens";

interface ChapterContentProps {
  chapter: Chapter;
}

export const ChapterContent: React.FC<ChapterContentProps> = ({ chapter }) => {
  return (
    <div className="max-w-3xl mx-auto p-8 md:p-12 prose-custom" style={{ backgroundColor: colors.neutral.light }}>
      {/* Category Badge */}
      <div className="mb-6">
        <span
          className="px-4 py-2 rounded-full text-sm font-semibold"
          style={{
            backgroundColor: `${chapter.color}30`,
            color: chapter.color,
          }}
        >
          {chapter.category}
        </span>
      </div>

      {/* Title (from page, but repeated for context) */}
      <div className="mb-8">
        <p className="text-lg italic mb-4" style={{ color: colors.neutral.gray }}>
          {chapter.teaser}
        </p>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-lg leading-relaxed mb-6" style={{ color: colors.neutral.dark }}>
          {chapter.description}
        </p>

        {/* Long Description (broken into paragraphs) */}
        {chapter.longDescription && (
          <div className="mt-8 space-y-6">
            {chapter.longDescription.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed" style={{ color: colors.neutral.dark }}>
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Read In Depth CTA */}
      <div className="mt-8 flex items-center gap-4">
        <Link to={`/chapter/${chapter.id}/deep`} onMouseEnter={() => void import("../../pages/DeepDetailPage")} onFocus={() => void import("../../pages/DeepDetailPage")} className="btn-accent" aria-label={`Read ${chapter.title} in more depth`}>
          Read in more depth
        </Link>
        <Link to={`/chapter/${chapter.id}`} className="btn-secondary">
          Back to chapter overview
        </Link>
      </div>

      {/* Key Takeaways */}
      {chapter.longDescription && chapter.longDescription.includes("-") && (
        <div
          className="p-8 rounded-lg mb-12"
          style={{
            backgroundColor: `${chapter.color}15`,
            borderLeft: `4px solid ${chapter.color}`,
          }}
        >
          <h3 className="text-2xl font-serif font-bold mb-6" style={{ color: colors.primary.main }}>
            Key Concepts
          </h3>
          <ul className="space-y-3">
            {chapter.longDescription
              .split("-")
              .filter((item) => item.trim().length > 10)
              .slice(0, 5)
              .map((item, index) => (
                <li key={index} className="flex gap-3" style={{ color: colors.neutral.dark }}>
                  <span
                    className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                    style={{ backgroundColor: chapter.color }}
                  />
                  <span>{item.trim().slice(0, 100)}...</span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChapterContent;
