# 🍎 Human Nature Explorer

> Interactive web application exploring human nature through immersive 3D environments with stunning Apple VisionOS-style liquid glass design.

## ✨ Key Features

### 🔷 Apple Liquid Glass Design

- **Premium glassmorphism** with backdrop blur effects (20-32px)
- **Neon glow animations** with blue accents and pulsing effects
- **Gradient borders** for luminous, high-contrast appearance
- **Specular highlights** simulating light reflections
- **Dark mode** fully optimized with enhanced contrast

### 🎨 Design System

- **Color palette**: Apple SF system colors with semantic naming
- **Typography**: SF Pro font family throughout for premium feel
- **Spacing**: 4pt baseline grid for consistent layout
- **Components**: Glass cards, glass buttons, glass navigation
- **Accessibility**: High contrast text (#000000 on light, #FFFFFF on dark)

### 🌍 Interactive Exploration

- **Explore**: Guided journey through nature concepts
- **Wander**: Free exploration with 3D environments
- **Library**: Curated collection of nature topics
- **3D Canvas**: WebGL-powered scenes with fallback support

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev
# Open http://localhost:5173

# Production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── 3D/               # 3D canvas and WebGL components
│   ├── Chapters/         # Chapter cards and content
│   └── Layout/           # Navigation and layout
├── pages/                # Page components (Home, Explore, etc.)
├── constants/            # Colors, design tokens, chapter data
├── hooks/                # Custom React hooks
├── App.tsx              # Root component
├── main.tsx             # Entry point
└── index.css            # Design system & styles

docs/                     # Documentation files
├── accessibility.md
├── content-guide.md
├── deployment.md
└── design-tokens.md
```

## 🎨 Design System

### CSS Classes

**Glass Components:**

- `.hero-content-glass` - Premium hero sections with animated glow
- `.btn-glass` - Glass buttons with interactive effects
- `.card-glass` - Glass cards for content display
- `nav` - Navigation bar with liquid glass aesthetic

### Color System

**Light Mode:**

- Text: `#000000` (primary), `#3A3A3C` (secondary), `#5A5A5E` (tertiary)
- Background: `#FFFFFF`
- Accent: `#0A84FF` (blue neon glow)

**Dark Mode:**

- Text: `#FFFFFF` (primary), `#F5F5F7` (secondary)
- Background: Automatically inverted
- Glow: Enhanced opacity for visibility

### Typography

**Font Family:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif`

**Sizes:** 12px → 60px (semantic naming: xs, sm, base, lg, xl, 2xl-6xl)

**Weights:** Regular (400), Medium (500), Semibold (600), Bold (700)

**Letter Spacing:** -0.4px (body), -0.5px (headings) for premium feel

## 🎨 Glass Aesthetic Details

### Backdrop Filter Levels

- **Navigation**: `blur(20px)` - Clear navigation
- **Hero/Cards**: `blur(28-32px)` - Premium glass feel
- **Buttons**: `blur(32px)` - Consistent styling

### Shadow Stack (Premium Depth)

```css
/* Neon glow */
0 0 60px rgba(10, 132, 255, 0.25),
/* Shadow falloff */
0 0 40px rgba(10, 132, 255, 0.15),
/* Inset top edge highlight */
inset 0 1px 2px rgba(255, 255, 255, 0.5),
/* Inset bottom edge shadow */
inset 0 -1px 2px rgba(0, 0, 0, 0.05),
/* Soft drop shadow */
0 20px 40px rgba(0, 0, 0, 0.08)
```

### Animation

**Neon Glow Pulse** - Subtle pulsing effect (4s infinite):

- Opacity: 0.5 → 0.8 → 0.5
- Scale: 1 → 1.05 → 1

## � Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 7.2.4
- **3D Graphics**: Three.js (for WebGL scenes)
- **Styling**: CSS3 with custom properties
- **Package Manager**: npm

## 📦 Build Output

```
dist/
├── index.html           # 0.61 KB
├── assets/
│   ├── index.css       # 41.29 KB (8.55 KB gzipped)
│   └── index.js        # 1,045 KB (286 KB gzipped)
└── Other page bundles
```

## 🌐 Browser Support

- **Chrome/Edge**: 76+
- **Safari**: 9+ (with -webkit- prefixes)
- **Firefox**: 103+
- **Mobile**: All modern mobile browsers

## 🎯 Performance

- **CSS Bundle**: 41.29 KB (8.55 KB gzipped)
- **Build Time**: ~21 seconds
- **Initial Load**: <1 second
- **GPU Acceleration**: Enabled for backdrop-filter
- **Animations**: 60fps on modern hardware

## 📖 Usage Examples

### Hero Glass Box

```tsx
<div className="hero-content-glass mb-12">
  <h2>Welcome to Nature Explorer</h2>
  <p>Discover the beauty of natural systems</p>
  <button className="btn-glass">Start Exploring</button>
</div>
```

### Glass Cards

```tsx
<div className="card-glass">
  <h3>Chapter Title</h3>
  <p>Description</p>
</div>
```

### Glass Buttons

```tsx
<button className="btn-glass">Action</button>
<button className="btn-primary">Primary Action</button>
```

## 🎨 Customization

### Change Glow Color

```css
/* Purple instead of blue */
0 0 60px rgba(88, 86, 214, 0.25),
```

### Adjust Blur Amount

```css
/* More frosted look */
backdrop-filter: blur(40px);

/* Clearer glass */
backdrop-filter: blur(16px);
```

### Modify Transparency

```css
/* More opaque */
background: linear-gradient(
  135deg,
  rgba(255, 255, 255, 0.2) 0%,
  rgba(255, 255, 255, 0.12) 100%
);

/* More transparent */
background: linear-gradient(
  135deg,
  rgba(255, 255, 255, 0.08) 0%,
  rgba(255, 255, 255, 0.04) 100%
);
```

## 📱 Dark Mode

Automatic dark mode detection with:

- Enhanced neon glow (20-40% opacity vs 10-25% in light mode)
- Reduced base transparency (4-10% vs 8-15% in light mode)
- Adjusted text colors for maximum contrast
- Darker shadows for depth on dark backgrounds

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### GitHub Pages

```bash
npm run build
# Push dist/ to gh-pages branch
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "preview"]
```

## 📚 Documentation

- **Design Tokens**: See `constants/designTokens.ts`
- **Accessibility**: See `docs/accessibility.md`
- **Content Guide**: See `docs/content-guide.md`
- **Deployment**: See `docs/deployment.md`

## 🐛 Troubleshooting

**Blur not visible?**

- Ensure browser supports `backdrop-filter` (Chrome 76+, Safari 9+)
- Check `-webkit-backdrop-filter` is present in CSS

**Text too light?**

- Update color variables in `:root`
- Explicitly set text color on affected elements

**3D scenes not loading?**

- Check WebGL support: `webglcontextlost` event handling enabled
- Fallback to 2D canvas provided

**Build errors?**

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📝 License

See LICENSE file for details.

## 👨‍💻 Development

### Commands

- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npm run type-check` - TypeScript checking

### Code Style

- TypeScript strict mode enabled
- ESLint configured for React
- Prettier for code formatting

### Git Workflow

```bash
git add .
git commit -m "Feature: description"
git push origin main
```

## 🎓 Learning Resources

- **React Docs**: https://react.dev
- **Vite Guide**: https://vitejs.dev
- **Three.js Tutorial**: https://threejs.org/manual
- **CSS Backdrop Filter**: https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter

## 📞 Support

For issues or questions:

1. Check the `docs/` folder
2. Review existing GitHub issues
3. Create a new issue with detailed description

---

**Made with ❤️ using React, TypeScript, and Apple Design Principles**

Last Updated: November 28, 2025
