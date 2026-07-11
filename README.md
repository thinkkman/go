# CPA Funnel — Landing Pages + Content Locker

Reddit CPA setup: landing page → content locker → offer complete → payout.

## Project structure

```
CPA/
├── landing-gaming.html      🎮  Game mods & hacks
├── landing-streaming.html   📺  Streaming access
├── landing-rewards.html     🎁  Gift cards & rewards
├── landing-tools.html       ⚡  Premium apps & software
├── landing-library.html     📚  eBooks, guides & courses
│
├── css/
│   └── landing.css               Shared design system
│
├── cpabuild-console-script.js    Paste into Adbluemedia editor to customize locker
│
└── README.md
```

## How to use

### 1. Pick a niche
Choose the landing page that matches your Reddit post:
- **Gaming** — modded APKs, game hacks, free currency
- **Streaming** — premium streaming access, shows/movies
- **Rewards** — gift cards, free samples, brand rewards
- **Tools** — premium apps unlocked, software cracks
- **Library** — eBooks, courses, guides, templates

### 2. Customize (optional)
Each landing page is easy to edit:
- **Title**: Change the `<title>` and `<h1>`
- **Features**: Edit the `<li>` items in the features card
- **Icon**: Swap the emoji in `<div class="icon">`
- **Button text**: Change the CTA button text
- **Download count**: Update the social proof number

### 3. Deploy to GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in repo settings
3. Share your link: `https://yourusername.github.io/repo/landing-gaming.html`

### 4. Customize the locker
1. Open [Adbluemedia](https://publishers.adbluemedia.com) → Content Lockers → Edit
2. F12 → Console
3. Paste `cpabuild-console-script.js` → Enter
4. Click **Save**

## Locker integration

All landing pages include the locker code:
```html
<script type="text/javascript">
    var PgAVd_Pgl_sUJrYc = {"it": 4618094, "key": "fd500"};
</script>
<script src="https://d1g1lhd4vferpn.cloudfront.net/29763fc.js"></script>
```

The locker opens when the user clicks the download button via `_xA()`.

## Design

Clean, minimal, mobile-first. No dark mode, no neon, no scammy vibes. Each page looks like a real indie tool/product page — credible enough that Reddit users don't immediately bounce.

**Design system:**
- `#fafaf8` background (warm paper)
- `#ea5e2e` vermilion accent (bold, energetic)
- System fonts (instant load, no Google Fonts dependency)
- Feature card with checkmarks (like real release notes)
- Single CTA button — one job, no confusion
