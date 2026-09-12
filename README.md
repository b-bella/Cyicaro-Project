# Cyicaro Project

Website for **Cyicaro Farm** — a sustainable, integrated agriculture and
livestock initiative in Mushishiro. The site presents the organization's
mission, activities, and impact, and invites visitors to support its work.

It is a bilingual (English / French) single-page React application, exported
from [Hostinger Horizons](https://horizons.hostinger.com/) and organized as an
npm-workspaces monorepo.

## Tech stack

| Area | Choice |
| --- | --- |
| Build tool | [Vite 7](https://vitejs.dev/) |
| UI framework | React 18.2 |
| Routing | `react-router-dom` v6 (`BrowserRouter`) |
| Styling | Tailwind CSS 3 + [shadcn/ui](https://ui.shadcn.com/) (Radix primitives) |
| Animation | `framer-motion` |
| Internationalization | `i18next` + `react-i18next` (EN / FR) |
| Document head / SEO | `react-helmet` |
| Icons | `lucide-react`, `react-icons` |
| Package layout | npm workspaces monorepo (`apps/*`) |

## Repository layout

```
.
├── package.json            # Root workspace: dev/build/lint orchestration (concurrently)
├── knip.json               # Dead-code / unused-dependency analysis config
├── .nvmrc                  # Node version (22)
└── apps/
    └── web/                # The web application (the only workspace today)
        ├── index.html      # Vite HTML entry
        ├── vite.config.js  # Vite + Horizons plugins, path alias, dev server
        ├── tailwind.config.js
        ├── components.json # shadcn/ui configuration
        ├── public/         # Static assets (llms.txt, .htaccess)
        ├── plugins/        # Horizons dev-only Vite plugins (visual editor, etc.)
        ├── tools/          # Build helpers (generate-llms.js, install-missing-components.js)
        └── src/
            ├── main.jsx            # React entry — mounts <App/>
            ├── App.jsx             # Router + layout shell (Header / Footer / routes)
            ├── index.css           # Tailwind layers + design-system CSS variables
            ├── pages/              # One component per route
            ├── components/         # Domain components + components/ui (shadcn/ui)
            ├── contexts/           # React context providers (EditContext)
            ├── hooks/              # Reusable hooks (use-mobile, use-toast)
            ├── lib/                # Utilities (cn() class merger)
            └── i18n/               # i18next config + locales/{en,fr}.json
```

## Pages & routes

Routes are declared in `apps/web/src/App.jsx`:

| Path | Page component | Purpose |
| --- | --- | --- |
| `/` | `pages/Home.jsx` | Hero, mission, why-support pillars, vision, commitment |
| `/about` | `pages/About.jsx` | Problem, circular model, solutions, metrics |
| `/what-we-do` | `pages/WhatWeDo.jsx` | Activities, impact, integration |
| `/nos-activites` | `pages/NosActivites.jsx` | Activities detail / integration power |
| `/donate` | `pages/Donate.jsx` | Donation tiers and support options |

> `pages/HomePage.jsx` is an empty stub and is **not** routed — `Home.jsx` is
> the actual home page.

## Getting started

Requires Node 22 (see `.nvmrc`).

```bash
npm install          # install workspace dependencies (run from the repo root)
npm run dev          # start the dev server
npm run build        # production build → dist/apps/web
npm run lint         # ESLint across the workspace
```

The app runs on **port 3000**.

> **Note on the dev host:** the `dev` script in `apps/web/package.json` binds
> Vite to `--host ::` (IPv6). Some Linux containers don't support IPv6 and fail
> with `EAFNOSUPPORT`. If that happens, start Vite on IPv4 instead:
> `npm run dev --prefix apps/web -- --host 0.0.0.0`.

## Internationalization

- Config lives in `apps/web/src/i18n/config.js`.
- Translations are in `apps/web/src/i18n/locales/en.json` and `fr.json`, keyed by
  section (`nav`, `home`, `about`, `whatWeDo`, `nos_activites`, `activitiesPage`,
  `donate`, `footer`).
- Components read strings via the `useTranslation()` hook and `t('section.key')`.
- The selected language is persisted in `localStorage` (`language`) and toggled
  from the header (EN / FR).

## Design system

- Colors are defined as HSL CSS variables in `apps/web/src/index.css` and mapped
  to Tailwind tokens (`bg-background`, `text-foreground`, `primary`, etc.).
- The brand palette is **emerald** (primary) with **stone** neutrals; light and
  dark variable sets are both defined.
- Typography uses the **Inter** font family.

## Horizons integration

This project was exported from Hostinger Horizons. The `apps/web/plugins/`
directory contains **dev-only** Vite plugins that power the Horizons visual
editor (inline content editing, selection mode, site-pages, session journal,
PocketBase auth, iframe route restoration). They are only loaded when
`NODE_ENV !== 'production'` and are not part of the shipped bundle.

`src/contexts/EditContext.jsx` provides an in-browser "Edit Content" mode that
makes elements marked `data-editable="true"` editable and stores overrides in
`localStorage`.

The `session-journal` plugin writes `vault/temp/SESSION_JOURNAL.md` at dev time;
that directory is git-ignored.

## License

Not specified. Add a `LICENSE` file if you intend to distribute.
