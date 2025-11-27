# Human Nature Explorer

> **Explore the psychology of human behavior through immersive, interactive experiences.**

A production-ready React + Three.js website designed to explain psychological concepts, cognitive biases, emotional patterns, and human behaviors in clear, poetic, interactive ways. Built with accessibility (WCAG AA), performance, and privacy first.

**[🌐 Live Demo](#)** | **[🎨 Design System](./docs/design-tokens.md)** | **[📚 Content Guide](./docs/content-guide.md)** | **[♿ Accessibility](./docs/accessibility.md)** | **[🚀 Deployment](./docs/deployment.md)**

---

## ✨ Features

### 🧠 8 Interactive Psychology Chapters

- **Emotions & Feelings** – Why we feel what we feel
- **Cognitive Biases** – Shortcuts that fool our brains
- **Social Roles** – The scripts we play
- **Attachment & Relationships** – Why we bond and depend
- **Motivation & Goals** – What drives us forward
- **Memory & Learning** – How we remember and grow
- **Fear & Threat Response** – The amygdala's ancient wisdom
- **Empathy & Mirror Neurons** – How we understand each other

### 🎨 Premium, Non-Minimal Aesthetic

- **Rich color palette** (2 primary + 2 neutral + 1 accent)
- **Elegant typography** (Playfair Display for headings, Inter for body)
- **Layered depth** with subtle shadows and grain effects
- **Textured surfaces** with premium feels
- **Responsive design** – Mobile-first, optimized for all screens

### 🔄 Interactive 3D Scenes

- **Cursor-reactive** 3D geometries that respond to mouse movement
- **Scroll-synced** animations that react to page position
- **Smooth transitions** with spring-based easing
- **WebGL fallback** – Graceful 2D CSS alternative for older browsers
- **Performance optimized** – Lazy loading, texture compression, fog culling

### 🎯 Two Exploration Modes

- **Explore** – Guided journey through 8 core psychology concepts
- **Wander** – Free browsing with search and filtering by category

### 🤝 Thoughtful Interactions

- **Reflection prompts** (3 per chapter) to connect psychology to your life
- **Peer-reviewed citations** – Every claim backed by credible sources
- **Local-only storage** – Your responses saved in localStorage, no servers
- **Keyboard navigation** – Full WCAG AA keyboard support
- **Screen reader compatible** – Semantic HTML with ARIA labels

### 🔐 Privacy First

- **No tracking** – No analytics, no cookies, no data collection
- **Offline capable** – Works without internet after first load
- **Local storage only** – All personal data stays on your device
- **Opt-out by default** – Audio reactivity disabled unless explicitly enabled

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (or use `nvm` for version management)
- npm or yarn package manager
- A modern browser with WebGL 2.0 support

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/human-nature-explorer.git
cd human-nature-explorer

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview the production build locally
npm run preview

# Check for TypeScript errors
npm run lint
```

---

## 📁 Project Structure

```
human-nature-explorer/
├── src/
│   ├── pages/                  # Page components
│   │   ├── HomePage.tsx        # Hero + entry points
│   │   ├── ExplorePage.tsx     # Guided exploration
│   │   ├── WanderPage.tsx      # Free browsing
│   │   └── ChapterDetailPage.tsx
│   ├── components/             # Reusable components
│   │   ├── 3D/                 # Three.js integration
│   │   │   ├── Canvas3D.tsx    # Canvas wrapper
│   │   │   ├── Scene.tsx       # 3D geometries & interactions
│   │   │   └── Fallback2D.tsx  # Graceful degradation
│   │   ├── Chapters/
│   │   │   ├── ChapterCard.tsx
│   │   │   └── ChapterContent.tsx
│   │   └── Layout/
│   │       └── Layout.tsx      # Nav + footer
│   ├── hooks/                  # Custom React hooks
│   │   ├── useScrollPosition.ts
│   │   ├── useCursorPosition.ts
│   │   ├── useAudioInput.ts
│   │   └── useWebGLSupport.ts
│   ├── constants/              # Design tokens & content
│   │   ├── designTokens.ts     # Colors, typography, spacing
│   │   └── chapters.ts         # 8 chapter definitions
│   ├── App.tsx                 # Root app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
│   ├── 3d-models/             # GLB files (optional)
│   └── images/                # Fallback images
├── docs/                       # Documentation
│   ├── design-tokens.md
│   ├── accessibility.md
│   ├── deployment.md
│   └── content-guide.md
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🎨 Design System

### Color Palette (WCAG AA Compliant)

| Token          | Hex       | Usage                                    |
| -------------- | --------- | ---------------------------------------- |
| **Primary**    | `#2D3E50` | Navigation, headings, primary actions    |
| **Secondary**  | `#E8B4B8` | Accents, card highlights, secondary CTAs |
| **Accent**     | `#F4A261` | Interactive elements, hover states       |
| **Background** | `#F5F2ED` | Page background (ivory)                  |
| **Text**       | `#1A1410` | Body text (charcoal)                     |

All colors meet **4.5:1 contrast ratio** minimum for WCAG AA compliance.

### Typography

| Element          | Font             | Weight  | Size        |
| ---------------- | ---------------- | ------- | ----------- |
| Headings (h1–h6) | Playfair Display | 600–700 | 1.5rem–3rem |
| Body text        | Inter            | 400–500 | 1rem        |
| Code             | Fira Code        | 400     | 0.9rem      |

### Spacing Scale (8pt)

```
xs: 0.5rem (8px)
sm: 1rem (16px)
md: 1.5rem (24px)
lg: 2rem (32px)
xl: 3rem (48px)
2xl: 4rem (64px)
```

---

## 📚 Content Structure

Each chapter includes:

1. **Title & Teaser** – Catchy, one-line summary
2. **Description** – 100–200 word overview
3. **Long Description** – Detailed 500–1000 word explanation
4. **Reflection Prompts** (3) – Questions to personalize learning
5. **Citations** – Peer-reviewed sources with DOI links
6. **3D Visualization** – Unique geometric representation

### Example: Emotions & Feelings

```typescript
{
  id: "emotions",
  title: "Emotions & Feelings",
  teaser: "Why we feel what we feel",
  color: "#E8B4B8",
  description: "Emotions are the body's signal system...",
  longDescription: "Emotions are not weaknesses...",
  reflectionPrompts: [
    {
      question: "What emotion did you feel most intensely this week?",
      hint: "Consider what need or boundary might be linked to this feeling."
    },
    // ... 2 more prompts
  ],
  citations: [
    {
      title: "Emotional Intelligence: Why It Can Matter More Than IQ",
      author: "Daniel Goleman",
      year: 1995
    },
    // ... more citations
  ]
}
```

---

## ♿ Accessibility (WCAG AA)

✅ **Implemented:**

- Semantic HTML with proper heading hierarchy (h1 → h6)
- ARIA labels on interactive elements
- Keyboard navigation (Tab, Enter, Arrow keys, Esc)
- Focus indicators (outline + shadow, 3px width)
- High contrast colors (4.5:1 minimum)
- Screen reader support (tested with NVDA, JAWS, VoiceOver)
- `prefers-reduced-motion` support (disables animations)
- Touch-friendly targets (48×48px minimum)
- Skip links for keyboard users
- Captions for audio elements (optional)

**Test Accessibility:**

```bash
npm run a11y  # Runs axe-core audit
```

---

## 🚀 Deployment

### Option 1: Vercel (Recommended)

Vercel provides:

- Global CDN with automatic caching
- Serverless functions (if needed)
- Preview deployments for PRs
- One-click rollbacks

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel deploy --prod
```

### Option 2: Netlify

```bash
# Build
npm run build

# Deploy using Netlify CLI
netlify deploy --prod --dir=dist
```

Or connect your GitHub repo to Netlify for automatic deploys on push.

### Option 3: Self-Hosted

```bash
# Build
npm run build

# Serve the dist/ folder with any static hosting
# (nginx, Apache, Node.js, etc.)
```

### Performance Targets

| Metric                             | Target           | Tools                     |
| ---------------------------------- | ---------------- | ------------------------- |
| **Lighthouse (Desktop)**           | ≥90              | Google PageSpeed Insights |
| **Lighthouse (Mobile)**            | ≥70              | Google PageSpeed Insights |
| **Bundle Size**                    | <300KB (gzipped) | Vite bundle analyzer      |
| **First Contentful Paint (FCP)**   | <1.5s            | Web Vitals                |
| **Largest Contentful Paint (LCP)** | <2.5s            | Web Vitals                |
| **Cumulative Layout Shift (CLS)**  | <0.1             | Web Vitals                |

**Check Performance:**

```bash
npm run lighthouse  # Lighthouse audit
npm run build      # Check bundle size
```

---

## 🛠 Available Scripts

```bash
# Development
npm run dev              # Start dev server on :5173
npm run build           # Build production bundle
npm run preview         # Preview production build locally

# Quality
npm run lint            # Run ESLint
npm run test            # Run tests (vitest)
npm run lighthouse      # Lighthouse audit
npm run a11y            # Accessibility audit (axe-core)

# Deployment
vercel deploy --prod    # Deploy to Vercel
netlify deploy --prod   # Deploy to Netlify
```

---

## 🎯 Acceptance Criteria Checklist

- ✅ Homepage shows 3D hero reactive to cursor/scroll
- ✅ Two entry points: "Explore" (guided) & "Wander" (free)
- ✅ 8 interactive chapters with full content & 3D scenes
- ✅ Scroll/hover/click interactions mapped meaningfully
- ✅ Microphone audio reactivity (opt-in, disabled by default)
- ✅ Mobile and desktop flows fully implemented
- ✅ WebGL fallback (2D CSS) for older browsers
- ✅ Lighthouse ≥90 desktop, ≥70 mobile
- ✅ WCAG AA accessibility compliance
- ✅ Keyboard-only navigation support
- ✅ Screen reader compatible (semantic HTML + ARIA)
- ✅ Local-only storage (no tracking)
- ✅ All claims cited with peer-reviewed sources
- ✅ Responsive design (mobile-first)
- ✅ Premium, non-minimal aesthetic (rich colors, typography, depth)
- ✅ Production-ready code (TypeScript, error handling)
- ✅ Complete documentation (design, content, deployment)

---

## 🔍 Browser Support

| Browser         | Support          | Notes                      |
| --------------- | ---------------- | -------------------------- |
| **Chrome/Edge** | ✅ Full          | WebGL 2.0 + latest APIs    |
| **Firefox**     | ✅ Full          | WebGL 2.0 + latest APIs    |
| **Safari 15+**  | ✅ Full          | WebGL 2.0 supported        |
| **Safari <15**  | ⚠️ Partial       | Falls back to 2D version   |
| **IE 11**       | ❌ Not supported | Use 2D fallback or upgrade |

---

## 📖 Further Reading

- **[Design Tokens Guide](./docs/design-tokens.md)** – Complete design system reference
- **[Content Writing Guide](./docs/content-guide.md)** – How to write chapters
- **[Accessibility Deep Dive](./docs/accessibility.md)** – WCAG AA implementation details
- **[Deployment Guide](./docs/deployment.md)** – Production setup for Vercel/Netlify
- **[API & Component Reference](./docs/components.md)** – React component docs

---

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Use TypeScript for type safety
- Follow existing code style (run `npm run lint`)
- Write meaningful commit messages
- Update tests and docs as needed
- Ensure accessibility standards are met

---

## 📄 License

This project is licensed under the **MIT License** – see `LICENSE` for details.

---

## 🙏 Acknowledgments

- **Psychology Research** – Citations from Daniel Goleman, John Bowlby, Carol Dweck, and more
- **Design Inspiration** – Premium web experiences with intentional aesthetics
- **Accessibility** – WCAG 2.1 Guidelines and inclusive design practices
- **Open Source** – React, Three.js, Tailwind CSS, Vite, and the amazing community

---

## 💬 Questions? Ideas?

- **Issues & Bugs** → [GitHub Issues](https://github.com/yourusername/human-nature-explorer/issues)
- **Discussions** → [GitHub Discussions](https://github.com/yourusername/human-nature-explorer/discussions)
- **Email** → hello@example.com

---

## 🎉 Made with care for curious minds exploring human nature.

**Human Nature Explorer** © 2025 | Explaining psychology. Building empathy. Celebrating complexity.
