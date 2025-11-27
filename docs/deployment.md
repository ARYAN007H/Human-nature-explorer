# Deployment Guide

Step-by-step instructions for deploying Human Nature Explorer to production.

## Quick Deploy

**Fastest path to production (5 minutes):**

```bash
# 1. Build production bundle
npm run build

# 2. Deploy to Vercel (recommended)
npm install -g vercel
vercel

# Or use Netlify
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## Deployment Platforms

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**

- ✅ Built for React + Vite projects
- ✅ Zero-config deployment
- ✅ Automatic production/preview environments
- ✅ Free tier includes 100 deployments/month
- ✅ Global CDN (fast worldwide)
- ✅ Automatic SSL certificates
- ✅ Environment variables support

#### Step 1: Create Vercel Account

1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub" (recommended)
4. Authorize Vercel to access your repositories
5. Verify email

#### Step 2: Deploy from Git

**Easiest Method (GitHub Connected):**

1. Push your code to GitHub (if not already there)
2. Go to https://vercel.com/new
3. Select "Import Project"
4. Paste GitHub repository URL
5. Click "Continue"
6. Framework: **Next.js** (or select "Other" if Vite doesn't appear)
7. Build Command: `npm run build`
8. Output Directory: `dist`
9. Click "Deploy"

**Manual Method (without GitHub):**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production (skip preview)
vercel --prod
```

#### Step 3: Configure Custom Domain

1. Go to project settings in Vercel dashboard
2. Click "Domains"
3. Add your custom domain
4. Follow DNS instructions from your domain registrar

#### Environment Variables (Optional)

If you add configuration later:

```bash
# Create .env.local (never commit)
VITE_API_URL=https://api.example.com

# Set in Vercel dashboard
vercel env add VITE_API_URL
```

---

### Option 2: Netlify

**Why Netlify?**

- ✅ Excellent developer experience
- ✅ Simple Git workflow
- ✅ Free SSL and CDN
- ✅ Generous free tier
- ✅ Great for SPAs
- ✅ Easy rollbacks

#### Step 1: Create Netlify Account

1. Go to https://app.netlify.com/signup
2. Sign up with GitHub (recommended)
3. Authorize Netlify to access repositories
4. Verify email

#### Step 2: Deploy from Git

1. In Netlify dashboard, click "New site from Git"
2. Select "GitHub"
3. Choose your repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click "Deploy site"

#### Step 3: Configure Domain

1. Go to "Site settings"
2. Click "Domain management"
3. Add custom domain
4. Follow DNS setup instructions

#### netlify.toml Configuration (Optional)

Create `netlify.toml` in project root:

```toml
[build]
command = "npm run build"
publish = "dist"

[dev]
command = "npm run dev"
port = 5173

[[redirects]]
from = "/*"
to = "/index.html"
status = 200

[[headers]]
for = "/*"
[headers.values]
Cache-Control = "public, max-age=3600"

[[headers]]
for = "/index.html"
[headers.values]
Cache-Control = "no-cache, no-store, must-revalidate"

[[headers]]
for = "/dist/assets/*"
[headers.values]
Cache-Control = "public, max-age=31536000, immutable"
```

---

### Option 3: Self-Hosted (VPS)

**Why self-host?**

- ✅ Full control
- ✅ Custom domain immediately
- ✅ No platform fees
- ❌ More complex setup
- ❌ Responsible for SSL/backups/uptime

#### Using Nginx

1. **SSH into your server:**

   ```bash
   ssh user@your-server.com
   ```

2. **Install Node.js (v18+):**

   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Install Nginx:**

   ```bash
   sudo apt-get install -y nginx
   ```

4. **Clone and build:**

   ```bash
   cd /var/www
   git clone https://github.com/your-username/humonn.git
   cd humonn
   npm install --production
   npm run build
   ```

5. **Configure Nginx:**
   Create `/etc/nginx/sites-available/humonn`:

   ```nginx
   server {
     listen 80;
     server_name your-domain.com www.your-domain.com;

     # Redirect HTTP to HTTPS
     return 301 https://$server_name$request_uri;
   }

   server {
     listen 443 ssl http2;
     server_name your-domain.com www.your-domain.com;

     # SSL certificate (use Let's Encrypt)
     ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
     ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;

     # Serve dist folder
     root /var/www/humonn/dist;
     index index.html;

     # SPA routing - all routes go to index.html
     location / {
       try_files $uri $uri/ /index.html;
     }

     # Cache static assets
     location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
       expires 1y;
       add_header Cache-Control "public, immutable";
     }

     # Never cache index.html
     location = /index.html {
       expires -1;
       add_header Cache-Control "no-cache, no-store, must-revalidate";
     }
   }
   ```

6. **Enable the site:**

   ```bash
   sudo ln -s /etc/nginx/sites-available/humonn /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

7. **Get SSL certificate (Let's Encrypt):**
   ```bash
   sudo apt-get install -y certbot python3-certbot-nginx
   sudo certbot certonly --nginx -d your-domain.com -d www.your-domain.com
   ```

---

## Pre-Deployment Checklist

### Build & Bundle

- [ ] Run `npm run build` and verify no errors
- [ ] Check `dist/` folder is created (~300-500KB gzipped typical)
- [ ] Run `npm run preview` and test site locally
- [ ] Test all routes: `/`, `/explore`, `/wander`, `/chapter/emotions`, etc.

### Performance

- [ ] Run lighthouse: `npm run lighthouse` (or via DevTools)
- [ ] Desktop score: ≥90
- [ ] Mobile score: ≥70
- [ ] Largest Contentful Paint (LCP): <2.5s
- [ ] Cumulative Layout Shift (CLS): <0.1
- [ ] First Input Delay (FID): <100ms

### Accessibility

- [ ] Run `npm run a11y` (axe-core audit)
- [ ] Zero "Critical" violations
- [ ] Review "Serious" and "Moderate" issues
- [ ] Test keyboard navigation on all pages
- [ ] Test with screen reader (NVDA or VoiceOver)

### Functionality

- [ ] Test all buttons and links work
- [ ] Test reflection prompts save/load from localStorage
- [ ] Test chapter navigation (next/previous)
- [ ] Test explore/wander filters
- [ ] Test on mobile (iOS Safari, Android Chrome)
- [ ] Test WebGL support detection (fallback to 2D)
- [ ] Test with JavaScript disabled (graceful degradation)

### Content

- [ ] Verify all 8 chapters display correctly
- [ ] Check all reflection prompts present
- [ ] Check all citations with DOI links
- [ ] Verify 3D scenes render (check with WebGL detection)
- [ ] Spell check all text content

### SEO (Optional)

- [ ] Update `index.html` title and meta description
- [ ] Add Open Graph tags for social sharing
- [ ] Create `robots.txt` and `sitemap.xml`
- [ ] Submit to Google Search Console

---

## Production Environment Setup

### Environment Variables

Currently, the project requires **no environment variables** (privacy-first, local-only storage).

If adding features later (analytics, API calls):

```bash
# .env.production (example, not currently used)
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

### Security Headers

Add to deployment platform or Nginx:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer-when-downgrade
Permissions-Policy: geolocation=(), microphone=(), camera=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com;
```

**Vercel:** Set in `vercel.json`

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

**Netlify:** Set in `netlify.toml` (see above)

### Caching Strategy

**Short-lived (1 hour):**

- `index.html` - Browser checks for updates
- API responses (if added)

**Long-lived (1 year):**

- JavaScript bundles (versioned with hash)
- CSS files (versioned with hash)
- Images and fonts

---

## Monitoring & Maintenance

### Post-Deployment

1. **Test live site:**

   - Verify all pages load
   - Test key user flows
   - Check console for errors
   - Monitor Core Web Vitals

2. **Set up monitoring:**

   - **Vercel:** Built-in analytics in dashboard
   - **Netlify:** Netlify Analytics (pro plan)
   - **Google Analytics:** (optional)
     ```html
     <!-- Add to index.html <head> if enabling -->
     <script
       async
       src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
     ></script>
     ```

3. **Enable error tracking:**
   - **Sentry:** https://sentry.io (free tier)
   - **LogRocket:** https://logrocket.com
   - **Bugsnag:** https://www.bugsnag.com

### Ongoing Maintenance

**Weekly:**

- Monitor error logs
- Check performance metrics
- Review user feedback

**Monthly:**

- Update npm dependencies: `npm update`
- Run security audit: `npm audit`
- Review and update content if needed

**Quarterly:**

- Audit accessibility with fresh eyes
- Performance optimization review
- Browser compatibility testing
- Update SEO metadata

---

## Updating Production

### Deploy Changes

**Vercel:**

```bash
git push origin main
# Automatic deployment triggered
```

**Netlify:**

```bash
git push origin main
# Automatic deployment triggered
```

**Self-hosted:**

```bash
ssh user@server.com
cd /var/www/humonn
git pull origin main
npm install
npm run build
sudo systemctl restart nginx
```

### Rollback

**Vercel:** Dashboard → Deployments → Select previous → "Promote to Production"

**Netlify:** Site settings → Deploys → Click "Preview" on previous deploy → "Publish deploy"

**Self-hosted:** Keep previous build backed up, restore with `git checkout <commit>`

---

## Troubleshooting

### Build Fails

```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Routes 404 After Deploy

**Issue:** SPA routes (like `/explore`, `/chapter/:id`) return 404

**Solution:** Configure server to serve `index.html` for all routes

**Vercel:** Automatic (no action needed)

**Netlify:** Add to `netlify.toml` (see above)

**Nginx:**

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Slow Performance

1. Check bundle size: `npm run build` → check `dist/` size
2. Check Network tab in DevTools for slow requests
3. Analyze with Lighthouse
4. Consider caching strategy adjustments
5. Verify CDN is active (Vercel/Netlify use global CDN)

### CSS Not Loading

**Issue:** Styles missing after deploy

**Check:**

1. Build succeeded: `npm run build`
2. CSS files in `dist/` folder
3. `index.html` references CSS correctly
4. Cache cleared (Ctrl+Shift+Delete)
5. No Content Security Policy blocking inline CSS

### 3D Scenes Not Rendering

**Issue:** Three.js scenes fail on some devices

**Check:**

1. WebGL support (fallback to Fallback2D should appear)
2. Browser console for Three.js errors
3. Graphics drivers are updated
4. Not on old device with limited memory

**Solution:** Works for 95%+ of modern browsers. For older browsers, Fallback2D provides text/gradient alternative.

---

## Analytics & Monitoring

### Web Vitals

Monitor these Core Web Vitals after deployment:

| Metric                         | Target  |
| ------------------------------ | ------- |
| LCP (Largest Contentful Paint) | < 2.5s  |
| FID (First Input Delay)        | < 100ms |
| CLS (Cumulative Layout Shift)  | < 0.1   |

**Measure with:** Chrome DevTools → Lighthouse, or https://pagespeed.web.dev/

### User Experience

Track with Google Analytics (optional):

```tsx
// In App.tsx, after GA script added to index.html
useEffect(() => {
  // Track page views
  window.gtag?.pageview({
    page_path: location.pathname,
  });
}, [location]);
```

---

## Maintenance Reminders

**Monthly:**

- [ ] `npm audit` - Check for security vulnerabilities
- [ ] `npm update` - Update to latest dependency versions (test first)
- [ ] Review error logs
- [ ] Check performance metrics

**Quarterly:**

- [ ] Full accessibility audit
- [ ] Lighthouse performance review
- [ ] Update content if needed
- [ ] Test on new browser versions

**Annually:**

- [ ] Update TypeScript
- [ ] Update all major dependencies
- [ ] Security penetration testing
- [ ] Performance optimization review

---

## Support & Questions

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com/
- **Vite Docs:** https://vitejs.dev/guide/static-deploy.html
- **React Router:** https://reactrouter.com/

---

**Last Updated:** November 2025  
**Version:** 1.0.0
