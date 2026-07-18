# Krizell — Voice-Guided Cooking Companion

A premium landing page for **Krizell**, featuring **Amara**, your voice-guided AI cooking companion.

Built entirely with **HTML5, CSS3 and vanilla JavaScript (ES6+)** — no frameworks, no build step, no dependencies.

## Run it

Open `index.html` in any modern browser. That's it.

No npm. No bundler. No compilation.

## Project structure

```
/
├── index.html          # The complete single-page site
├── css/
│   ├── style.css       # Design tokens (oklch palette) + all component styles
│   ├── responsive.css  # Breakpoint rules (640 / 768 / 1024px) + reduced motion
│   └── animations.css  # Keyframes, motion utilities, scroll-reveal styles
├── js/
│   ├── helpers.js      # Shared utilities (query helpers, smooth scroll)
│   ├── animations.js   # IntersectionObserver scroll reveals
│   ├── ui.js           # Sticky nav, scroll buttons, waitlist form, footer year
│   └── app.js          # Entry point — initializes everything
├── assets/
│   ├── images/         # All photography (hero, dishes, companions, culture)
│   ├── icons/          # favicon.ico
│   └── fonts/          # (Fonts load from Google Fonts: Manrope + Inter)
└── README.md
```

## Features

- Sticky glass navigation that condenses into a pill on scroll
- Scroll-reveal animations with staggered delays (IntersectionObserver)
- Floating hero visuals: drifting glow, floating bowl, animated chips
- Shimmering gradient headline text
- 3D-tilted phone mockup with pulsing mic animation
- Culture image mosaic with hover zoom
- Waitlist form with simulated submit states (idle → saving → done)
- Fully responsive (mobile / tablet / desktop / large displays)
- Respects `prefers-reduced-motion`
- Lazy-loaded images below the fold

## Notes

- The design system lives in CSS custom properties at the top of `css/style.css`
  (warm cream backgrounds, tomato/terracotta/honey accents, sage support colors).
- To wire the waitlist form to a real endpoint, replace the simulated submit in
  `js/ui.js` (`initWaitlistForm`).
