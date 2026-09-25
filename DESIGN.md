# Design

The spec for how joelhagvall.com looks and moves. Read it before touching UI. Hard rules also live in `AGENTS.md`.

## 1. Atmosphere

Dark, calm night sky. A static star field with a few twinkles and rare shooting stars, glassy cards floating on top, and one playful focal point per page (the astronaut, the bookshelf). Restrained rather than flashy: motion is ambient, never something the reader has to wait for.

## 2. Color

Dark only. `<html>` always carries `.dark`, so `app/globals.css` defines a single palette as HSL tokens that Tailwind maps to utilities.

| Token | Use |
| --- | --- |
| `background` | Page background (the fixed sky layer and `body`) |
| `foreground` | Headings and primary text |
| `foreground/80` | Body copy on cards |
| `muted-foreground` | Secondary text, meta, captions |
| `muted-foreground/80` | Small uppercase labels and axis text |
| `primary` / `primary-foreground` | Inverted solid button (light fill, dark text) |
| `card`, `popover`, `border`, `input`, `ring` | shadcn surfaces and focus |

Glass surfaces use white overlays on top of the tokens: `bg-white/5` to `bg-white/20` for fills, `border-white/10` for edges. Cyan and purple appear only as accents (shooting stars, glows, the GitHub calendar). Brand colors (LinkedIn, npm, Reddit) are only for brand icons.

Don't use raw `text-white` or `text-gray-*` for text, and no hex values in class names.

## 3. Typography

- Sans: Geist (`--font-sans`), mono: Geist Mono (`--font-mono`), both self-hosted through `next/font` in `app/layout.tsx`.
- Hero name: `text-5xl md:text-7xl font-bold`, gradient `from-foreground to-muted-foreground`.
- Section heading: `text-2xl font-semibold`.
- Body: `text-lg` on cards, `text-sm` for meta.
- Labels and badges: `text-xs` or `text-[11px]`, uppercase allowed.
- Letter-spacing: normal or tighter only. Never `tracking-wide*` or a positive `letter-spacing`.

## 4. Components

- **Card**: `AnimatedCard` with `CARD_STYLES.default` (`bg-primary/5`, `border-primary/10`, hover `bg-primary/10`).
- **Pill button**: `rounded-full bg-white/10 px-5 py-3 text-sm`, hover `bg-white/20`. Used for the hero CTAs.
- **Solid button**: `bg-primary text-primary-foreground`, hover `bg-primary/90`.
- **Icon button**: round `bg-white/10` bubble, 44px, icon 24px.
- **Links**: `LINK_STYLES` in `lib/styles.ts`.
- **Focus**: every interactive element shows a visible ring or outline. If a component sets `outline-none`, it must add a `ring-2` in its place.

## 5. Layout

- Content width `max-w-7xl`, page padding `p-8 md:p-12`.
- Home is a bento grid: `grid-cols-1 md:grid-cols-6 gap-6`, and cards span different column counts.
- Sticky navbar, `h-14`, translucent background with a light backdrop blur.

## 6. Depth

Flat by default. Depth comes from translucency and borders, not from large drop shadows. Backdrop blur stays at or below 12px on anything large.

## 7. Motion

- Ambient only: star twinkle and shooting stars (opacity and transform), the canvas astronaut, hover transitions around 300ms.
- Canvas scenes pause through IntersectionObserver when off screen. No three.js or WebGL on the landing page.
- Animate only `opacity` and `transform`. No `filter: blur()` on moving elements.
- `prefers-reduced-motion` turns animations and transitions off globally, and the canvases render a still frame.

## 8. Do's and don'ts

Do:
- Use the tokens from section 2 for every text color.
- Keep one playful focal point per page.
- Reuse `CARD_STYLES`, `LINK_STYLES` and the shadcn components before writing new styles.
- Give every hover state a matching focus state.

Don't:
- Use em or en dashes in site copy. Use a hyphen, comma, colon or a new sentence.
- Add wide letter-spacing anywhere.
- Add a light theme or light-mode tokens without designing it properly first.
- Add scroll-jacking, scroll pinning or animation libraries like GSAP or Lenis.
- Add emoji as decoration.
- Add a second Tailwind config. `tailwind.config.ts` is the only one, and its `content` must cover every folder that holds class names (`app`, `components`, `lib`, `data`).

## 9. Responsive

- Test at 375px and desktop. No horizontal page overflow.
- Touch targets are at least 44x44px: pills use `py-3`, icon buttons `h-11 w-11`, form fields and buttons `h-11`.
- On mobile the navbar keeps every link and scrolls sideways instead of collapsing into a menu.
