import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ChapterDetailPage from "./pages/ChapterDetailPage";
import ExplorePage from "./pages/ExplorePage";
import WanderPage from "./pages/WanderPage";

const DeepDetailPage = React.lazy(() => import("./pages/DeepDetailPage"));
const LibraryPage = React.lazy(() => import("./pages/LibraryPage"));

function App() {
  useEffect(() => {
    // Initialize localStorage for user progress
    if (!localStorage.getItem("userProgress")) {
      localStorage.setItem(
        "userProgress",
        JSON.stringify({
          visitedChapters: [],
          savedPrompts: [],
          lastVisited: null,
          preferences: {
            audioEnabled: false,
            reducedMotion: false,
          },
        })
      );
    }

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty(
        "--duration-base",
        "0ms"
      );
      document.documentElement.style.setProperty("--duration-slow", "0ms");
    }
  }, []);

  return (
    <Router>
      <Layout>
        <Suspense fallback={<div className="p-8">Loading…</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/wander" element={<WanderPage />} />
            <Route path="/chapter/:chapterId" element={<ChapterDetailPage />} />
            <Route path="/chapter/:chapterId/deep" element={<DeepDetailPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
