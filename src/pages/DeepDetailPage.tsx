import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Canvas3D from "../components/3D/Canvas3D";
import { chapterLookup, chapters } from "../constants/chapters";
import { colors } from "../constants/designTokens";
import { useEffect } from "react";

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
      <section className="w-full h-64 md:h-96 relative" style={{ backgroundColor: colors.neutral.light }}>
        <Canvas3D chapterId={chapterId} autoRotate={false} />
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: `linear-gradient(to top, rgba(0,0,0,0.35), transparent)` }}>
          <div className="text-center text-white p-6">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">{chapter.title}</h1>
            <p className="text-sm opacity-90 max-w-2xl mx-auto">Expanded reading</p>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto p-8 md:p-12 prose-custom">
        <header className="mb-8">
          <h2 className="text-3xl font-serif font-bold mb-4" style={{ color: colors.primary.main }}>{chapter.title}</h2>
          <p className="text-lg text-muted mb-4" style={{ color: colors.neutral.gray }}>{chapter.teaser}</p>

          {/* Section navigation for subtopics */}
          {chapter.subtopics && chapter.subtopics.length > 0 && (
            <nav aria-label="Subtopic navigation" className="mb-6">
              <p className="text-sm opacity-80 mb-2">Sections</p>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="px-3 py-1 rounded-md border text-sm">Overview</button>
                {chapter.subtopics.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="px-3 py-1 rounded-md border text-sm hover:bg-gray-100">{s.title}</a>
                ))}
              </div>
            </nav>
          )}
        </header>

        <article className="space-y-8">
          <section>
            <h3 className="text-2xl font-semibold mb-4">Deep Exploration</h3>
            {chapter.longDescription && (
              <div className="space-y-6">
                {chapter.longDescription.split("\n\n").map((p, i) => (
                  <p key={i} style={{ color: colors.neutral.dark }} className="leading-relaxed">{p}</p>
                ))}
              </div>
            )}
          </section>

          {/* Subtopics as expandable mini-articles */}
          {chapter.subtopics && chapter.subtopics.length > 0 && (
            <section>
              <h3 className="text-2xl font-semibold mb-4">Subtopics</h3>
              <div className="space-y-6">
                {chapter.subtopics.map((s) => (
                  <article key={s.id} id={s.id} className="p-4 rounded-lg border bg-white" style={{ borderColor: colors.border }}>
                    <header className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-semibold">{s.title}</h4>
                        {s.summary && <p className="text-sm opacity-80">{s.summary}</p>}
                      </div>
                      <div className="text-sm opacity-70">{(s.examples?.length ?? 0) > 0 ? `${s.examples!.length} examples` : null}</div>
                    </header>

                    <div className="mt-4 prose-custom subtopic-content" style={{ transition: 'all 260ms ease' }}>
                      <div dangerouslySetInnerHTML={{ __html: s.svg || "" }} />
                      <div className="mt-2 leading-relaxed">{s.content}</div>

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
                        <div className="mt-4 text-sm opacity-80">
                          <p>Recommended next:</p>
                          <div className="flex gap-2 flex-wrap mt-2">
                            {s.recommendedNext.map((rid) => {
                              const r = chapters.find((c) => c.id === rid);
                              return r ? (
                                <button key={rid} onClick={() => navigate(`/chapter/${r.id}/deep`)} className="px-2 py-1 rounded-md border text-xs">{r.title}</button>
                              ) : null;
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          <section>
            <h3 className="text-2xl font-semibold mb-4">Further Reading & Context</h3>
            <p style={{ color: colors.neutral.dark }}>
              Below are the primary sources and recommended further reading. These give a scholarly foundation and additional context if you'd like to explore the original research.
            </p>
            <div className="mt-6 space-y-4">
              {chapter.citations.map((c, idx) => (
                <div key={idx} className="p-4 rounded-lg" style={{ backgroundColor: 'white', border: `1px solid ${colors.border}` }}>
                  <p className="font-semibold" style={{ color: colors.primary.main }}>{c.title}</p>
                  <p style={{ color: colors.neutral.gray }}>{c.author} ({c.year})</p>
                  <div className="mt-2">
                          {c.doi && (
                            <span className="text-xs opacity-80">DOI: {c.doi}</span>
                          )}
                          {c.url && (
                            <span className="ml-4 text-xs opacity-80">URL: {c.url}</span>
                          )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4">Practical Implications</h3>
            <p style={{ color: colors.neutral.dark }}>
              This section translates the research into practical, actionable steps and exercises you can try. Use these as experiments—small practices to observe how the ideas show up in your life.
            </p>
            <ul className="list-disc pl-6 mt-4" style={{ color: colors.neutral.dark }}>
              <li>Try journaling for 7 days about instances related to this topic and note patterns.</li>
              <li>Practice one focused exercise from the chapter each day for a week.</li>
              <li>Observe and record social contexts where this phenomenon is strongest.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4">Caveats & Open Questions</h3>
            <p style={{ color: colors.neutral.dark }}>
              Psychology is an evolving science. Many findings have boundary conditions and context-specific effects. Use the research as a guide, not an absolute prescription.
            </p>
          </section>
        </article>

        <footer className="mt-12 flex gap-4 items-center">
          <button onClick={() => navigate(-1)} className="btn-secondary">Back</button>
          {previousChapter && <button onClick={() => navigate(`/chapter/${previousChapter.id}`)} className="btn-primary">← {previousChapter.title}</button>}
          {nextChapter && <button onClick={() => navigate(`/chapter/${nextChapter.id}`)} className="btn-primary">{nextChapter.title} →</button>}
        </footer>
      </main>
    </div>
  );
};

export default DeepDetailPage;
