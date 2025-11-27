import React, { Suspense, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Canvas3D from "../components/3D/Canvas3D";
import ChapterContent from "../components/Chapters/ChapterContent";
import { chapterLookup, chapters } from "../constants/chapters";
import { colors } from "../constants/designTokens";

const ChapterDetailPage: React.FC = () => {
  const { chapterId } = useParams<{ chapterId: string }>();
  const navigate = useNavigate();
  const [expandedPrompt, setExpandedPrompt] = useState<number | null>(null);
  const [savedResponses, setSavedResponses] = useState<Record<number, string>>({});

  if (!chapterId) {
    return <div>Chapter not found</div>;
  }

  const chapter = chapterLookup[chapterId];
  if (!chapter) {
    return <div>Chapter not found</div>;
  }

  const currentIndex = chapters.findIndex((c) => c.id === chapterId);
  const previousChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  const handleSaveResponse = (promptIndex: number, response: string) => {
    setSavedResponses((prev) => ({ ...prev, [promptIndex]: response }));
    // Save to localStorage
    const progress = JSON.parse(localStorage.getItem("userProgress") || "{}");
    if (!progress.savedPrompts) progress.savedPrompts = [];
    progress.savedPrompts.push({
      chapterId,
      promptIndex,
      response,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("userProgress", JSON.stringify(progress));
  };

  return (
    <div className="w-full">
      {/* 3D Canvas Section */}
      <section className="w-full h-96 md:h-screen relative" style={{ backgroundColor: colors.neutral.light }}>
        <Suspense
          fallback={
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-gray-600">Loading 3D scene...</div>
            </div>
          }
        >
          <Canvas3D chapterId={chapterId} autoRotate={true} />
        </Suspense>

        {/* Chapter Title Overlay */}
        <div
          className="absolute inset-0 flex items-end justify-center pb-12 pointer-events-none"
          style={{
            background: `linear-gradient(to top, rgba(0,0,0,0.6), transparent)`,
          }}
        >
          <div className="text-center text-white pointer-events-auto">
            <h1
              className="text-5xl md:text-6xl font-serif font-bold mb-4"
              style={{ color: "white" }}
            >
              {chapter.title}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">{chapter.teaser}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <ChapterContent chapter={chapter} />

      {/* Reflection Prompts */}
      <section
        className="py-24 px-4"
        style={{
          backgroundColor: `${chapter.color}10`,
          borderTop: `2px solid ${chapter.color}`,
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12" style={{ color: colors.primary.main }}>
            Reflection Prompts
          </h2>

          <div className="space-y-6">
            {chapter.reflectionPrompts.map((prompt, index) => (
              <div
                key={index}
                className="p-6 rounded-lg transition-all cursor-pointer"
                style={{
                  backgroundColor: "white",
                  borderLeft: `4px solid ${chapter.color}`,
                  boxShadow: expandedPrompt === index ? "0 10px 25px rgba(0,0,0,0.1)" : "0 2px 4px rgba(0,0,0,0.05)",
                }}
                onClick={() => setExpandedPrompt(expandedPrompt === index ? null : index)}
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-semibold flex-1" style={{ color: colors.primary.main }}>
                    {prompt.question}
                  </h3>
                  <span className="text-2xl flex-shrink-0">{expandedPrompt === index ? "−" : "+"}</span>
                </div>

                {expandedPrompt === index && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    {prompt.hint && (
                      <p className="mb-4 p-4 rounded bg-amber-50" style={{ color: colors.neutral.gray }}>
                        <strong>Hint:</strong> {prompt.hint}
                      </p>
                    )}
                    <textarea
                      placeholder="Write your reflection here..."
                      className="w-full p-4 border rounded-lg mb-4 focus:outline-none focus:ring-2"
                      style={{
                        borderColor: chapter.color,
                      }}
                      rows={4}
                      value={savedResponses[index] || ""}
                      onChange={(e) => setSavedResponses((prev) => ({ ...prev, [index]: e.target.value }))}
                    />
                    <button
                      onClick={() => handleSaveResponse(index, savedResponses[index] || "")}
                      className="px-6 py-2 rounded-lg font-semibold transition-all hover:opacity-90"
                      style={{
                        backgroundColor: chapter.color,
                        color: "white",
                      }}
                    >
                      Save Response
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citations */}
      <section className="py-16 px-4 bg-neutral-light">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif font-bold mb-8" style={{ color: colors.primary.main }}>
            Sources & Citations
          </h3>
          <div className="space-y-4">
            {chapter.citations.map((citation, index) => (
              <div
                key={index}
                className="p-4 rounded-lg"
                style={{ backgroundColor: "white", border: `1px solid ${colors.border}` }}
              >
                <p className="font-semibold" style={{ color: colors.primary.main }}>
                  {citation.title}
                </p>
                <p style={{ color: colors.neutral.gray }}>
                  {citation.author} ({citation.year})
                  {citation.doi && (
                    <>
                      {" "}
                      <a
                        href={`https://doi.org/${citation.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        DOI: {citation.doi}
                      </a>
                    </>
                  )}
                  {citation.url && (
                    <>
                      {" "}
                      <a href={citation.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        Link
                      </a>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-4 bg-primary">
        <div className="max-w-3xl mx-auto flex justify-between items-center gap-4 flex-wrap">
          {previousChapter ? (
            <button
              onClick={() => navigate(`/chapter/${previousChapter.id}`)}
              className="px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: colors.secondary.main, color: colors.neutral.dark }}
            >
              ← {previousChapter.title}
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={() => navigate("/explore")}
            className="px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: colors.accent.main, color: colors.neutral.dark }}
          >
            Back to Explorer
          </button>

          {nextChapter ? (
            <button
              onClick={() => navigate(`/chapter/${nextChapter.id}`)}
              className="px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: colors.secondary.main, color: colors.neutral.dark }}
            >
              {nextChapter.title} →
            </button>
          ) : (
            <div />
          )}
        </div>
      </section>
    </div>
  );
};

export default ChapterDetailPage;
