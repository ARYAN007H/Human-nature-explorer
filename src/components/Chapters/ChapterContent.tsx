import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Chapter } from "../../constants/chapters";

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
    <div className="max-w-3xl mx-auto p-8 md:p-12 prose-custom" style={{ backgroundColor: "var(--color-bg-secondary)" }}>
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
        <p className="text-lg italic mb-4" style={{ color: "var(--color-text-secondary)" }}>
          {chapter.teaser}
        </p>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--color-text)" }}>
          {chapter.description}
        </p>

        {/* Long Description (broken into paragraphs) */}
        {chapter.longDescription && (
          <div className="mt-8 space-y-6">
            {chapter.longDescription.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed" style={{ color: "var(--color-text)" }}>
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Read In Depth CTA - open inline modal to avoid navigation */}
      <div className="mt-8 flex items-center gap-4">
        <button onClick={() => setShowDeep(true)} className="btn-accent" aria-label={`Open ${chapter.title} read-in-depth`}>
          Read in more depth
        </button>
        <Link to={`/chapter/${chapter.id}`} className="btn-secondary">
          Back to chapter overview
        </Link>
      </div>

      {/* Inline Deep View Modal (non-redirecting) */}
      {showDeep && (
        <div className="fixed inset-0 z-60 flex items-start justify-center p-6" aria-hidden={false}>
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowDeep(false)} />
          <div ref={modalRef} role="dialog" aria-modal="true" aria-labelledby={`deep-${chapter.id}-title`} className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-white rounded-lg p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 id={`deep-${chapter.id}-title`} className="text-2xl font-serif font-bold">{chapter.title} — Read in depth</h2>
              <button ref={closeButtonRef} onClick={() => setShowDeep(false)} className="px-3 py-1 rounded border">Close</button>
            </div>

            <section className="space-y-4">
              <p className="text-sm opacity-80">{chapter.teaser}</p>
              {chapter.longDescription && (
                <div className="mt-2 space-y-3">
                  {chapter.longDescription.split('\n\n').map((p, i) => (
                    <p key={i} className="text-base leading-relaxed" style={{ color: "var(--color-text)" }}>{p}</p>
                  ))}
                </div>
              )}
            </section>

            {chapter.subtopics && chapter.subtopics.length > 0 && (
              <section className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Subtopics</h3>
                <div className="space-y-3">
                  {chapter.subtopics.map((s) => (
                    <div key={s.id} ref={(el) => (subtopicRefs.current[s.id] = el)} className="p-3 rounded border">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-medium">{s.title}</h4>
                          {s.summary && <p className="text-sm opacity-80">{s.summary}</p>}
                        </div>
                        <div>
                          <button onClick={() => toggleSubtopic(s.id)} className="px-2 py-1 rounded border text-sm">{openSubtopics[s.id] ? 'Hide' : 'Open'}</button>
                        </div>
                      </div>
                      {openSubtopics[s.id] && (
                        <div className="mt-3 prose-custom">
                          <div dangerouslySetInnerHTML={{ __html: s.svg || "" }} />
                          <div className="mt-2 leading-relaxed">{s.content}</div>
                          {s.examples && s.examples.length > 0 && (
                            <div className="mt-2">
                              <h5 className="font-medium">Examples</h5>
                              <ul className="list-disc pl-5 mt-2">
                                {s.examples.map((ex, idx) => (
                                  <li key={idx}>{ex}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Further reading rendered as plain citation text (no external redirects) */}
            <section className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Further reading & context</h3>
              <div className="space-y-3">
                {chapter.citations.map((c, idx) => (
                  <div key={idx} className="p-3 rounded flex flex-col" style={{ backgroundColor: '#fafafa', border: `1px solid var(--color-border)` }}>
                    <p className="font-semibold" style={{ color: "var(--color-primary)" }}>{c.title}</p>
                    <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>{c.author} ({c.year})</p>
                    {c.doi && (
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs opacity-80">DOI: {c.doi}</span>
                        <button onClick={() => copyToClipboard(c.doi!, idx)} className="text-xs px-2 py-1 border rounded">Copy DOI</button>
                        {copiedIndex === idx && <span className="text-xs text-green-600">Copied</span>}
                      </div>
                    )}
                    {c.url && <p className="text-xs opacity-80 mt-2">URL: {c.url}</p>}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}

      {/* Key Takeaways */}
      {chapter.longDescription && chapter.longDescription.includes("-") && (
        <div
          className="p-8 rounded-lg mb-12"
          style={{
            backgroundColor: `${chapter.color}15`,
            borderLeft: `4px solid ${chapter.color}`,
          }}
        >
          <h3 className="text-2xl font-serif font-bold mb-6" style={{ color: "var(--color-primary)" }}>
            Key Concepts
          </h3>
          <ul className="space-y-3">
            {chapter.longDescription
              .split("-")
              .filter((item) => item.trim().length > 10)
              .slice(0, 5)
              .map((item, index) => (
                <li key={index} className="flex gap-3" style={{ color: "var(--color-text)" }}>
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
