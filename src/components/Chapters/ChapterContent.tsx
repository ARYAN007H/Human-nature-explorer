import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Chapter } from "../../constants/chapters";
import GlassSurface from "../ui/GlassSurface";
import GlassButton from "../ui/GlassButton";

interface ChapterContentProps {
  chapter: Chapter;
}

export const ChapterContent: React.FC<ChapterContentProps> = ({ chapter }) => {
  const [showDeep, setShowDeep] = useState(false);
  const [openSubtopics, setOpenSubtopics] = useState<Record<string, boolean>>({});
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const prevActiveElementRef = useRef<HTMLElement | null>(null);
  const subtopicRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = useCallback(async (text: string, idx: number) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      // noop
    }
  }, []);

  const toggleSubtopic = (id: string) => {
    setOpenSubtopics((s) => {
      const opening = !s[id];
      const next = { ...s, [id]: opening };

      // If opening, scroll the subtopic into view after render
      if (opening) {
        setTimeout(() => {
          const el = subtopicRefs.current[id];
          if (el && el.scrollIntoView) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 80);
      }

      return next;
    });
  };

  // Manage focus trap and keyboard handling for the modal
  useEffect(() => {
    if (!showDeep) return;

    prevActiveElementRef.current = document.activeElement as HTMLElement | null;

    const focusFirst = () => {
      setTimeout(() => {
        if (closeButtonRef.current) closeButtonRef.current.focus();
        else if (modalRef.current) {
          const f = modalRef.current.querySelector<HTMLElement>('button, [tabindex]:not([tabindex="-1"])');
          f?.focus();
        }
      }, 0);
    };

    focusFirst();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setShowDeep(false);
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(
            'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute('disabled'));

        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }

        const idx = focusable.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey) {
          // backward
          if (idx === 0) {
            focusable[focusable.length - 1].focus();
            e.preventDefault();
          }
        } else {
          // forward
          if (idx === focusable.length - 1) {
            focusable[0].focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      // restore focus
      try {
        prevActiveElementRef.current?.focus();
      } catch (err) {
        // ignore
      }
    };
  }, [showDeep]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-12 prose-custom">
      {/* Category Badge */}
      <div className="mb-5">
        <span
          className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase"
          style={{
            backgroundColor: `${chapter.color}26`,
            color: chapter.color,
          }}
        >
          {chapter.category}
        </span>
      </div>

      {/* Title (from page, but repeated for context) */}
      <div className="mb-7">
        <p className="text-sm md:text-base italic mb-3 text-[rgba(245,245,247,0.82)]">
          {chapter.teaser}
        </p>
      </div>

      {/* Main Content */}
      <GlassSurface
        variant="panel"
        depth="2"
        className="prose-lg max-w-none mb-8 px-5 md:px-6 py-5 md:py-6 text-white"
      >
        <p className="text-sm md:text-base leading-relaxed mb-4 text-[rgba(245,245,247,0.9)]">
          {chapter.description}
        </p>

        {/* Long Description (broken into paragraphs) */}
        {chapter.longDescription && (
          <div className="mt-4 space-y-3 text-xs md:text-sm">
            {chapter.longDescription.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="leading-relaxed text-[rgba(245,245,247,0.9)]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </GlassSurface>

      {/* Read In Depth CTA - open inline modal to avoid navigation */}
      <div className="mt-4 flex items-center gap-3 flex-wrap">
        <GlassButton
          variant="primary"
          accent="blue"
          onClick={() => setShowDeep(true)}
          aria-label={`Open ${chapter.title} read-in-depth`}
        >
          Read in more depth
        </GlassButton>
        <GlassButton as="button" variant="secondary" accent="cyan">
          <Link to={`/chapter/${chapter.id}`}>Back to chapter overview</Link>
        </GlassButton>
      </div>

      {/* Inline Deep View Modal (non-redirecting) */}
      {showDeep && (
        <div className="fixed inset-0 z-[1050] flex items-start justify-center p-6">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowDeep(false)} />
          <GlassSurface
            ref={modalRef as React.RefObject<HTMLDivElement>}
            variant="panel"
            depth="3"
            as="div"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`deep-${chapter.id}-title`}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-auto px-5 md:px-7 py-5 md:py-6 text-white"
          >
            <div className="flex items-center justify-between mb-4 gap-3">
              <h2
                id={`deep-${chapter.id}-title`}
                className="text-sm md:text-base font-semibold tracking-tight"
              >
                {chapter.title} — read in depth
              </h2>
              <GlassButton
                variant="secondary"
                accent="blue"
                className="px-3 py-1 text-xs"
                ref={closeButtonRef as React.RefObject<HTMLButtonElement>}
                onClick={() => setShowDeep(false)}
              >
                Close
              </GlassButton>
            </div>

            <section className="space-y-3 text-xs md:text-sm">
              <p className="opacity-80">{chapter.teaser}</p>
              {chapter.longDescription && (
                <div className="mt-1 space-y-2">
                  {chapter.longDescription.split("\n\n").map((p, i) => (
                    <p key={i} className="leading-relaxed text-[rgba(245,245,247,0.9)]">
                      {p}
                    </p>
                  ))}
                </div>
              )}
            </section>

            {chapter.subtopics && chapter.subtopics.length > 0 && (
              <section className="mt-5">
                <h3 className="text-xs md:text-sm font-semibold mb-2">Subtopics</h3>
                <div className="space-y-2">
                  {chapter.subtopics.map((s) => (
                    <GlassSurface
                      key={s.id}
                      ref={(el) => {
                        subtopicRefs.current[s.id] = el;
                      }}
                      variant="card"
                      depth="1"
                      className="px-4 py-3 text-xs md:text-sm"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="font-medium mb-0.5">{s.title}</h4>
                          {s.summary && (
                            <p className="text-[11px] opacity-80">{s.summary}</p>
                          )}
                        </div>
                        <GlassButton
                          variant="secondary"
                          accent="blue"
                          className="px-2.5 py-1 text-[11px]"
                          onClick={() => toggleSubtopic(s.id)}
                        >
                          {openSubtopics[s.id] ? "Hide" : "Open"}
                        </GlassButton>
                      </div>
                      {openSubtopics[s.id] && (
                        <div className="mt-2 prose-custom text-xs leading-relaxed text-[rgba(245,245,247,0.9)]">
                          <div dangerouslySetInnerHTML={{ __html: s.svg || "" }} />
                          <div className="mt-1.5">{s.content}</div>
                          {s.examples && s.examples.length > 0 && (
                            <div className="mt-2">
                              <h5 className="font-medium">Examples</h5>
                              <ul className="list-disc pl-5 mt-1 space-y-1">
                                {s.examples.map((ex, idx) => (
                                  <li key={idx}>{ex}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </GlassSurface>
                  ))}
                </div>
              </section>
            )}

            {/* Further reading rendered as plain citation text (no external redirects) */}
            <section className="mt-5">
              <h3 className="text-xs md:text-sm font-semibold mb-2">
                Further reading & context
              </h3>
              <div className="space-y-2">
                {chapter.citations.map((c, idx) => (
                  <GlassSurface
                    key={idx}
                    variant="card"
                    depth="1"
                    className="px-4 py-3 text-[11px] md:text-xs"
                  >
                    <p className="font-semibold text-[rgba(167,139,250,0.96)]">
                      {c.title}
                    </p>
                    <p className="text-[rgba(245,245,247,0.8)]">
                      {c.author} ({c.year})
                    </p>
                    {c.doi && (
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="opacity-80">DOI: {c.doi}</span>
                        <GlassButton
                          variant="secondary"
                          accent="blue"
                          className="px-2 py-0.5 text-[10px]"
                          onClick={() => copyToClipboard(c.doi!, idx)}
                        >
                          Copy DOI
                        </GlassButton>
                        {copiedIndex === idx && (
                          <span className="text-[10px] text-[rgba(90,240,217,0.9)]">
                            Copied
                          </span>
                        )}
                      </div>
                    )}
                    {c.url && (
                      <p className="opacity-80 mt-1.5 break-all">URL: {c.url}</p>
                    )}
                  </GlassSurface>
                ))}
              </div>
            </section>
          </GlassSurface>
        </div>
      )}

      {/* Key Takeaways */}
      {chapter.longDescription && chapter.longDescription.includes("-") && (
        <GlassSurface
          variant="card"
          depth="1"
          className="p-6 md:p-7 mb-10 text-white"
        >
          <h3 className="text-lg md:text-xl font-semibold mb-4">Key concepts</h3>
          <ul className="space-y-3">
            {chapter.longDescription
              .split("-")
              .filter((item) => item.trim().length > 10)
              .slice(0, 5)
              .map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-xs md:text-sm text-[rgba(245,245,247,0.9)]"
                >
                  <span
                    className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                    style={{ backgroundColor: chapter.color }}
                  />
                  <span>{item.trim().slice(0, 100)}...</span>
                </li>
              ))}
          </ul>
        </GlassSurface>
      )}
    </div>
  );
};

export default ChapterContent;
