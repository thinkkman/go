# HANDOFF.md — CPA Content Locker Project

## Core Goal

Build a CPA funnel: **Landing Page → Content Locker → Offer Complete → Payout**.
Targeting Reddit traffic. Adbluemedia/CPABuild network. GitHub Pages hosting.

## Repository

- **GitHub:** `thinkkman/go`
- **Live URL:** `https://thinkkman.github.io/go/`
- **Branch:** `main`

## File Structure

```
CPA/
├── gaming/index.html       # 🎮 Game mods niche landing page
├── streaming/index.html    # 📺 Streaming access niche
├── rewards/index.html      # 🎁 Gift cards/rewards niche
├── tools/index.html        # ⚡ Premium apps niche
├── library/index.html      # 📚 eBooks/guides niche
├── dashboard/index.html    # Visual editor for landing pages (hidden)
├── test.html               # Simple locker test page
├── cpabuild-console-script.js  # Paste into Adbluemedia console to customize locker
└── README.md
```

## Landing Page Architecture

Each landing page is self-contained (inline CSS/JS). Shares the same design system:
- Light theme: `#fafaf8` bg, `#ea5e2e` vermilion accent
- 440px centered card, feature list with checkmarks, single CTA button
- Mobile-first responsive
- Config is a `CONFIG` object at the top of each `<script>` — edit icon, title, subtitle, features, CTA, count, tags, footnote

**Locker integration per page:**
```html
<script>var qeXSD_GXq_KAdMbc = {"it": 4618094, "key": "fd500"};</script>
<script src="https://d19k1sh57v5k0g.cloudfront.net/483f854.js"></script>
<button onclick="_Jf()">Download Now ↓</button>
```

**The locker function is `_Jf()` (capital J, lowercase f).** The Adbluemedia dashboard shows `_JF()` but the actual JS creates `_Jf()`.

## Locker Customization

Use `cpabuild-console-script.js`:
1. Go to Adbluemedia → Content Lockers → Edit
2. F12 → Console → Paste script → Enter
3. Script modifies `useLockerSettings` object — sets 2 offers, custom text ("One last step!" / "Complete one quick action below..."), warm peach/coral design
4. Click SAVE

## Dashboard (Visual Editor)

Hidden at `/dashboard/`. Dark-themed editor with:
- Sidebar listing all 5 niches
- Form fields for every CONFIG property
- Live preview of the landing page
- "Copy HTML" button generates updated file content
- Auto-saves to localStorage

## What We Tried for Anti-uBlock (ALL FAILED)

| Attempt | Result |
|---------|--------|
| Self-host locker.js on same domain | uBlock still blocked — cosmetic/scriptlet filters |
| Rename all IDs/classes from xf_ to zg_ | uBlock still blocked — procedural filters |
| Switch from display:none to opacity-based show/hide | Overlay existed (full viewport, opacity:1) but invisible |
| setProperty with !important priority | No effect |
| CSS guard with every counter-measure (transform, clip-path, filter, content-visibility) | No effect |
| Force interval re-applying opacity every 100ms | No effect |
| Explicit background on overlay via guard CSS | No effect |

**Root cause:** uBlock Origin's scriptlet injection prevents CPA locker modals at a level deeper than CSS. The overlay exists in DOM with correct computed styles but never renders visibly. Likely uBlock hooks `appendChild`, `createElement`, or uses procedural cosmetic filtering at the render-tree level.

## Current State (Simplified, Working for Non-uBlock Users)

- All landing pages load locker directly from cloudfront CDN (no self-hosting)
- No anti-uBlock measures in place
- Works correctly when uBlock is disabled
- ~85-90% of users don't use uBlock, so this covers the vast majority of traffic

## Immediate Next Tasks

- [ ] Test each landing page live: `https://thinkkman.github.io/go/gaming/` etc.
- [ ] Run `cpabuild-console-script.js` in Adbluemedia editor to apply warm peach/coral design to locker
- [ ] Verify locker opens on button click (disable uBlock to test)
- [ ] Set up proper redirect URL in Adbluemedia locker settings (post-offer-completion destination)
- [ ] Optionally explore Adbluemedia "URL (Link)" locker method as alternative to JS (may bypass adblock)
- [ ] Create niche-specific Reddit posts linking to appropriate landing pages
- [ ] Monitor which niches convert best, iterate on copy/design
