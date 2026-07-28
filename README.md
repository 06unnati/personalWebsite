# Unnati Goyal — Personal Website

A personal portfolio site built with plain HTML, CSS, and JavaScript — no frameworks, no build step. It covers an About section, Education, Experience, Projects, Extracurriculars, and a working Contact form.

**Live demo (GitHub Pages):** _add your github.io URL here once deployed_

## Features

- **Fixed navbar** that stays pinned while scrolling, with an active-link indicator that tracks scroll position
- **Full-bleed hero section** with a background photo and soft gradient overlay
- **Timeline component** (Education & Experience) with a connected spine and markers, built with CSS custom properties so the line and dots stay aligned regardless of card padding/border changes
- **Project grid** with GitHub links per card
- **Scroll-triggered fade-in animations** via `IntersectionObserver`
- **Contact form** wired to [Formspree](https://formspree.io) using their AJAX SDK — submissions are emailed directly, with inline success/error and field-validation messaging, and no page reload
- Fully responsive layout (breakpoints at 860px and 640px)
- Custom color palette (raspberry, pink, sage, white) and type system (Fraunces + Work Sans) defined entirely in CSS variables

## Project structure

```
.
├── index.html          # All page markup/content
├── css/
│   ├── font.css         # Font imports and typographic scale variables
│   └── style.css        # Layout, color tokens, components, responsive rules
├── js/
│   └── script.js         # Navbar scroll state, fade-in observer, Formspree init
└── images/               # Hero photo, activity photos, resume PDF
    ├── openingPic.jpg
    ├── cses.jpg
    ├── zor.jpeg
    ├── tse.jpg
    └── PersonalWebsite Unnati.pdf
```

## Tech stack

- **HTML5** — semantic sectioned markup
- **CSS3** — custom properties (`:root` tokens), CSS Grid & Flexbox, no preprocessor
- **Vanilla JavaScript** — no framework, no bundler
- **[Formspree](https://formspree.io)** — handles contact form delivery via `@formspree/ajax` (loaded from CDN)
- **Google Fonts** — Fraunces (display) and Work Sans (body), imported in `css/font.css`

## Running locally

Since this is a static site, you don't need Node, npm, or any build tooling. Any local server works — opening the file directly with `file://` can cause fetch/font issues in some browsers, so a local server is recommended.

**Python:**
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

**Node (no install needed):**
```bash
npx serve
```

**VS Code:** install the "Live Server" extension, right-click `index.html`, and choose "Open with Live Server."

## Contact form setup

The form posts to a Formspree endpoint via their AJAX library (see the script tag in `index.html` and the `formspree('initForm', …)` call in `js/script.js`). To point it at your own Formspree form:

1. Create a form at [formspree.io](https://formspree.io) and copy its form ID (the `xxxxxxxx` in `https://formspree.io/f/xxxxxxxx`).
2. Update the `formId` value passed to `initForm` in `js/script.js`.
3. Confirm the notification email address in your Formspree dashboard.

## Deployment

Being fully static, this site can be hosted anywhere that serves plain files — GitHub Pages, Netlify, Vercel, or any web host. For GitHub Pages: push to a repo, then enable Pages in the repo settings pointing at the branch/root containing `index.html`.

## Customization notes

- Colors and fonts are centralized as CSS custom properties at the top of `style.css` and in `font.css` — change a token once and it updates everywhere.
- The timeline's spine/marker alignment is driven by two shared variables (`--spine`, `--tl-gap`) on `.timeline`, so adjusting spacing won't break alignment between the line and the dots.
- The `--nav-height` variable keeps page content from jumping under the fixed navbar; it's kept in sync automatically.

## Author

**Unnati Goyal**
UC San Diego — Computer Science & Business Economics
[GitHub](https://github.com/06unnati) · [LinkedIn](https://www.linkedin.com/in/unnatigoyal/)