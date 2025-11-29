import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Canvas3D from "../components/3D/Canvas3D";
import { chapterLookup, chapters } from "../constants/chapters";
import GlassSurface from "../components/ui/GlassSurface";
import GlassButton from "../components/ui/GlassButton";

const DeepDetailPage: React.FC = () => {
  const { chapterId } = useParams<{ chapterId: string }>();
  const navigate = useNavigate();

  if (!chapterId) return <div>Chapter not found</div>;
  const chapter = chapterLookup[chapterId];
  if (!chapter) return <div>Chapter not found</div>;

  // Scroll to hash if present (open subtopic)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [chapterId]);

  const currentIndex = chapters.findIndex((c) => c.id === chapterId);
  const previousChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  return (
    <div className="w-full">
      <section className="w-full h-64 md:h-96 relative overflow-hidden">
        <Canvas3D chapterId={chapterId} autoRotate={false} />
        <div
          className="absolute inset-0 flex items-end justify-center pb-8"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.4) 40%, transparent 80%)",
          }}
        >
          <GlassSurface
            variant="hero"
            depth="3"
            className="px-6 md:px-9 py-4 md:py-5 text-white text-center max-w-2xl mx-auto"
          >
            <p className="text-[10px] uppercase tracking-[0.26em] mb-1 opacity-70">
              Chapter
            </p>
            <h1 className="text-lg md:text-2xl font-semibold tracking-tight mb-1">
              {chapter.title}
            </h1>
            <p className="text-[11px] md:text-sm text-[rgba(245,245,247,0.86)]">
              Expanded reading
            </p>
          </GlassSurface>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-10 md:py-14 prose-custom">
        <header className="mb-8 text-white">
          <h2 className="lg-heading-section mb-3">{chapter.title}</h2>
          <p className="text-sm md:text-base text-[rgba(245,245,247,0.82)] mb-4">
            {chapter.teaser}
          </p>

          {/* Section navigation for subtopics */}
          {chapter.subtopics && chapter.subtopics.length > 0 && (
            <nav aria-label="Subtopic navigation" className="mb-6 text-xs md:text-sm">
              <p className="opacity-80 mb-2">Sections</p>
              <div className="flex flex-wrap gap-2">
                <GlassButton
                  variant="secondary"
                  accent="blue"
                  className="px-3 py-1 text-[11px]"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Overview
                </GlassButton>
                {chapter.subtopics.map((s) => (
                  <GlassButton
                    key={s.id}
                    variant="secondary"
                    accent="cyan"
                    className="px-3 py-1 text-[11px]"
                    onClick={() =>
                      document
                        .getElementById(s.id)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  >
                    {s.title}
                  </GlassButton>
                ))}
              </div>
            </nav>
          )}
        </header>

        <GlassSurface
          variant="panel"
          depth="2"
          className="space-y-8 px-5 md:px-7 py-6 md:py-7 text-white"
        >
          <section>
            <h3 className="text-lg md:text-xl font-semibold mb-3">Deep exploration</h3>
            {chapter.longDescription && (
              <div className="space-y-4 text-xs md:text-sm">
                {chapter.longDescription.split("\n\n").map((p, i) => (
                  <p key={i} className="leading-relaxed text-[rgba(245,245,247,0.9)]">
                    {p}
                  </p>
                ))}
              </div>
            )}
          </section>

          {/* Subtopics as expandable mini-articles */}
          {chapter.subtopics && chapter.subtopics.length > 0 && (
            <section>
              <h3 className="text-lg md:text-xl font-semibold mb-3">Subtopics</h3>
              <div className="space-y-4">
                {chapter.subtopics.map((s) => (
                  <GlassSurface
                    key={s.id}
                    id={s.id}
                    variant="card"
                    depth="1"
                    className="px-4 md:px-5 py-4 md:py-5 text-white"
                  >
                    <header className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-sm md:text-base font-semibold">{s.title}</h4>
                        {s.summary && (
                          <p className="text-xs md:text-sm opacity-80">{s.summary}</p>
                        )}
                      </div>
                      <div className="text-[10px] md:text-xs opacity-70">
                        {(s.examples?.length ?? 0) > 0
                          ? `${s.examples!.length} examples`
                          : null}
                      </div>
                    </header>

                    <div className="mt-3 prose-custom subtopic-content text-xs md:text-sm leading-relaxed text-[rgba(245,245,247,0.9)]">
                      <div dangerouslySetInnerHTML={{ __html: s.svg || "" }} />
                      <div className="mt-2">{s.content}</div>

                      {s.examples && s.examples.length > 0 && (
                        <div className="mt-3">
                          <h5 className="font-medium">Examples</h5>
                          <ul className="list-disc pl-5 mt-2">
                            {s.examples.map((ex, idx) => (
                              <li key={idx}>{ex}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {s.recommendedNext && s.recommendedNext.length > 0 && (
                        <div className="mt-3 text-[11px] md:text-sm opacity-85">
                          <p className="mb-2">Recommended next:</p>
                          <div className="flex gap-2 flex-wrap mt-2">
                            {s.recommendedNext.map((rid) => {
                              const r = chapters.find((c) => c.id === rid);
                              return r ? (
                                <GlassButton
                                  key={rid}
                                  variant="secondary"
                                  accent="blue"
                                  className="px-2.5 py-1 text-[11px]"
                                  onClick={() => navigate(`/chapter/${r.id}/deep`)}
                                >
                                  {r.title}
                                </GlassButton>
                              ) : null;
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </GlassSurface>
                ))}
              </div>
            </section>
          )}

          <section>
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Further reading & context
            </h3>
            <p className="text-xs md:text-sm text-[rgba(245,245,247,0.9)]">
              Below are the primary sources and recommended further reading. These give a scholarly foundation and additional context if you'd like to explore the original research.
            </p>
            <div className="mt-4 space-y-3">
              {chapter.citations.map((c, idx) => (
                <GlassSurface
                  key={idx}
                  variant="card"
                  depth="1"
                  className="px-4 py-3 text-xs md:text-sm text-white"
                >
                  <p className="font-semibold mb-1 text-[rgba(167,139,250,0.96)]">
                    {c.title}
                  </p>
                  <p className="text-[11px] md:text-xs text-[rgba(245,245,247,0.8)] mb-1">
                    {c.author} ({c.year})
                  </p>
                  <div className="mt-2">
                    {c.doi && (
                      <span className="text-[10px] md:text-xs opacity-80">
                        DOI: {c.doi}
                      </span>
                    )}
                    {c.url && (
                      <span className="ml-4 text-[10px] md:text-xs opacity-80">
                        URL: {c.url}
                      </span>
                    )}
                  </div>
                </GlassSurface>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Practical implications
            </h3>
            <p className="text-xs md:text-sm text-[rgba(245,245,247,0.9)]">
              This section translates the research into practical, actionable steps and exercises you can try. Use these as experiments—small practices to observe how the ideas show up in your life.
            </p>
            <ul className="list-disc pl-6 mt-3 text-xs md:text-sm text-[rgba(245,245,247,0.9)]">
              <li>Try journaling for 7 days about instances related to this topic and note patterns.</li>
              <li>Practice one focused exercise from the chapter each day for a week.</li>
              <li>Observe and record social contexts where this phenomenon is strongest.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Caveats & open questions
            </h3>
            <p className="text-xs md:text-sm text-[rgba(245,245,247,0.9)]">
              Psychology is an evolving science. Many findings have boundary conditions and context-specific effects. Use the research as a guide, not an absolute prescription.
            </p>
          </section>
        </GlassSurface>

        <footer className="mt-10 flex gap-3 items-center flex-wrap">
          <GlassButton variant="secondary" accent="blue" onClick={() => navigate(-1)}>
            Back
          </GlassButton>
          {previousChapter && (
            <GlassButton
              variant="primary"
              accent="blue"
              onClick={() => navigate(`/chapter/${previousChapter.id}`)}
            >
              ← {previousChapter.title}
            </GlassButton>
          )}
          {nextChapter && (
            <GlassButton
              variant="primary"
              accent="blue"
              onClick={() => navigate(`/chapter/${nextChapter.id}`)}
            >
              {nextChapter.title} →
            </GlassButton>
          )}
        </footer>
      </main>
    </div>
  );
};

export default DeepDetailPage;
