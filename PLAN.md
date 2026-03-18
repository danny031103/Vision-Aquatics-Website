# Vision Aquatics — Website & Branding Plan

---

## 1. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 14 (App Router)** | First-class Vercel support, fast, SEO-friendly |
| Styling | **Tailwind CSS** | Rapid iteration, consistent design tokens |
| Animations | **Framer Motion** | Smooth, startup-quality motion |
| Icons | **Lucide React** | Clean, minimal icon set |
| Forms | **React Hook Form + Resend** | Contact form email delivery |
| Deployment | **Vercel** | Zero-config, free tier, custom domain |

No backend needed initially — contact form via Resend API (free tier: 3k emails/mo), everything else is static.

---

## 2. Site Map

```
/                       → Home (hero, problem, solution, features, CTA)
/download               → Try Vision Aquatics (App Store redirect + preview)
/about                  → About the founder
/contact                → Contact form
/privacy                → Privacy policy (required for App Store)
/terms                  → Terms of service (required for App Store)
```

---

## 3. Page-by-Page Content Plan

### `/` — Home

**Hero Section**
- Headline: Something like *"Your Tank. Always Watched."* or *"AI Eyes on Your Aquarium, 24/7"*
- Sub-headline: 1–2 sentences on the problem + solution
- CTA button: "Download on the App Store" + secondary "See How It Works"
- Background: Dark ocean depth with subtle animated particle/bubble effect or looping video of a reef tank

**Problem Section**
- "Your tank can crash while you sleep." — 3 pain points with icons:
  - Expensive monitoring hardware
  - Manual camera-checking is unreliable
  - Issues escalate fast when undetected

**Solution Section**
- How Vision Aquatics works — 3 steps:
  1. Point your existing camera at your tank
  2. Vision AI monitors parameters, movement, and anomalies 24/7
  3. Get alerted the moment something looks wrong

**Features Section** (cards/grid)
- Real-time anomaly detection
- Instant push alerts
- No special hardware required
- Works with any WiFi camera
- (Future: parameter trend history, community benchmarks)

**Social Proof / Credibility**
- Even as a solo founder at launch, placeholder: "Built by an aquarist, for aquarists"
- Beta tester quote cards once you have them

**Final CTA**
- "Start protecting your tank today" → App Store link

---

### `/download` — Try Vision Aquatics

- App Store badge (links to your listing)
- App screenshots/mockups on an iPhone frame
- Brief feature recap bullets
- QR code for desktop visitors

---

### `/about` — About the Team

- Professional photo (headshot or tank photo works great for authenticity)
- Bio sections:
  - **The Founder** — your name, role
  - Aquarium keeping background (how long, what kinds of tanks, what drove the idea)
  - Education / technical background
  - Why you built this
- Quote or personal mission statement
- Link to LinkedIn or GitHub (optional)

---

### `/contact`

- Simple form: Name, Email, Subject (dropdown: General / Press / Partnerships / Bug Report), Message
- Expected reply time note
- Email address as fallback

---

### `/privacy` & `/terms`

- Legally required for App Store listing
- Use a generator like [Termly](https://termly.io) or [GetTerms](https://getterms.io) for a first draft, then customize
- Host them here so they have a permanent URL for your App Store submission

---

## 4. Branding Plan

### 4.1 Positioning

> *Vision Aquatics is where ocean expertise meets AI precision.*

The brand should feel like it belongs alongside apps like Robinhood, Linear, or Levels Health — consumer-grade polish with a technical edge. Not "aquarium store." Think **deep sea research lab meets Silicon Valley startup**.

---

### 4.2 Color Palette

| Role | Color | Hex | Notes |
|---|---|---|---|
| Background (dark) | Abyss Black | `#040D14` | Near-black with a blue tint, not pure black |
| Background (surface) | Deep Ocean | `#071E2E` | Card/section backgrounds |
| Primary Accent | Bioluminescent Cyan | `#00E5FF` | CTAs, highlights, glows |
| Secondary Accent | Electric Teal | `#00B4D8` | Secondary actions, borders |
| Text Primary | Off-White | `#E8F4F8` | Main readable text |
| Text Secondary | Muted Blue-Gray | `#7FA8BF` | Subtext, captions |
| Alert/Warning | Coral | `#FF6B6B` | Used sparingly for "anomaly detected" demo visuals |
| Success | Phosphor Green | `#39FF7E` | Healthy status indicators |

**Vibe:** The palette should feel like looking into a bioluminescent ocean at night — dark, deep, with electric glowing accents. The cyan/teal pops against the dark background in a way that screams both "ocean" and "AI interface."

---

### 4.3 Typography

| Use | Font | Style |
|---|---|---|
| Headlines | **Inter** or **Space Grotesk** | Bold, tight letter-spacing |
| Body | **Inter** | Regular, comfortable line-height |
| Monospace/data | **JetBrains Mono** | Parameter readouts, stats |

All available free via Google Fonts. Space Grotesk adds a slightly futuristic feel vs. plain Inter.

---

### 4.4 Logo Concepts

Three directions to explore — pick one and develop it:

**Option A — The "Vision Eye"**
- Abstract eye shape formed by the outline of a fish or wave
- Pupil is a hexagonal AI-scan reticle or camera lens
- Clean single-color mark, works at any size
- Tagline below: *"See Everything."*

**Option B — The "Sonar Ring"**
- Concentric circular rings (like sonar/radar) centered on a small fish silhouette
- Radiating lines suggest monitoring + detection
- Very tech-forward

**Option C — The "Fin + Signal"**
- Minimalist dorsal fin silhouette
- WiFi or signal arc rising from the tip
- Simple, immediately readable, startup-friendly

**Recommendation:** Option A or C — they're the most scalable and brand-recognizable at small sizes (app icon, favicon). Option B works well in hero graphics.

**Tools to create the logo:**
- **Figma** (free) — recommended for vector logo work
- **Adobe Illustrator** — if you have Adobe CC
- **Looka or Brandmark.io** — AI logo generators as a starting point to iterate from (not final product)

---

### 4.5 Logo Deliverables Needed

- [ ] SVG (primary)
- [ ] PNG — dark background version
- [ ] PNG — light background version
- [ ] Favicon (32×32, 16×16 .ico + 180×180 apple-touch-icon)
- [ ] App icon (1024×1024, follows App Store guidelines)

---

### 4.6 Visual Language

- **Glassmorphism cards** — frosted glass panels on dark backgrounds, consistent with the "looking through water" aesthetic
- **Subtle glow effects** — `box-shadow` with cyan on interactive elements, to imply bioluminescence
- **Particle / bubble animations** — light CSS/canvas bubbles rising in hero backgrounds, not overdone
- **Scan lines or grid overlays** — faint HUD-style overlays on AI feature sections to reinforce the "computer vision" narrative
- **Phone mockups** — use dark-mode iPhone frames for app screenshots

---

## 5. Launch Checklist

### Pre-launch
- [ ] Logo + favicon complete
- [ ] App Store listing live (needed for download page link)
- [ ] Privacy policy + terms pages populated
- [ ] Contact form tested (Resend API key configured)
- [ ] Meta tags / Open Graph image (for link previews on social)
- [ ] Google Analytics or Plausible added

### Vercel Deployment
- [ ] Push to GitHub repo
- [ ] Connect repo to Vercel
- [ ] Set environment variables (Resend API key, etc.)
- [ ] Add custom domain (e.g. `visionaquatics.com`)
- [ ] Enable Vercel Analytics (free)

### Post-launch
- [ ] Submit sitemap to Google Search Console
- [ ] Share on r/ReefTank, r/Aquariums, aquarium Facebook groups for early traction
- [ ] Set up a waitlist/email capture if App Store listing isn't live yet

---

## 6. Suggested Build Order

1. Set up Next.js project + Tailwind + Framer Motion
2. Build global layout (nav, footer) with color tokens
3. Build Home page hero + problem/solution sections
4. Build remaining static pages (About, Contact, Download)
5. Wire up contact form (Resend)
6. Add Privacy/Terms pages
7. Finalize logo + apply brand assets throughout
8. Polish animations, mobile responsiveness
9. Deploy to Vercel + connect domain
