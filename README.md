# redBus FTUE — prototype & presentation

An HTML prototype of the redBus India bus booking funnel, used to present first-time-user-experience (FTUE)
interventions to stakeholders. It opens as one presentation with top-level tabs:

- **Actionables** — the research-backed problems and solves (`current-funnel/actionables.html`).
- **Design** — the funnel on a phone. Every screen has a **Current / Proposed** switch; solves with several
  directions show an **Option A / B** switch.

> Internal material (production screenshots, research, unreleased designs). Keep the repo and the hosted
> previews private to redBus.

## Run it locally

No build step. From the repo root:

```bash
node ftue-prototype/serve.js
```

Open <http://localhost:8123/> (redirects to `current-funnel/index.html`). The server sends `no-store`, so a
reload always picks up your edits.

## Layout

| Path | What it is |
|---|---|
| `current-funnel/index.html` | Entry page; loads every stylesheet/script in order |
| `current-funnel/funnel.js` | App shell: screen list, Current/Proposed + Option switches, presentation tabs (`SECTIONS`) |
| `current-funnel/*.js` (onboarding, home-art, srp-fig, seats, points, cust, pay, ticket, search) | The **current** screens, rebuilt from production screenshots / Figma |
| `current-funnel/solves.js` | Registry of proposed versions — one `PROPOSED.add(screen, …)` per screen |
| `current-funnel/sol-*.js/.css` | The solves themselves (e.g. `sol-17.js`, `sol-17b.js`, `sol-onb.js`) |
| `current-funnel/reference/` | Production screenshots and Figma renders used for pixel checks |
| `current-funnel/assets/` | Images and icons per screen |
| `ds-bundle/`, `source/` | Rubicon Ions design-system bundle (tokens, type, icons, components) |

## Contributing a solve

1. Pull the latest `main` first (`git pull --rebase origin main`). There are no branches; everyone works on `main`.
2. Build the solve in its own files, `current-funnel/sol-XX.js` (+ `.css`), and load them in
   `current-funnel/index.html` **before** `solves.js`.
3. Register it in `current-funnel/solves.js`:

   ```js
   window.PROPOSED.add('home', {
     sols: ['SOL-17'],
     options: [                         // or a single `render` for one direction
       { key: 'A', label: 'Stacked cards', render: (p) => h(window.SOL17.HomeSol17, p) },
       { key: 'B', label: 'Search page',   render: (p) => h(window.SOL17B.HomeSol17B, p) },
     ],
   });
   ```

   `p = { s, set, go, Current }` — app state, a setter, navigation, and `Current()` for the current screen.
4. Design rules:
   - Rubicon Ions tokens for colour, type roles, radius (`--radius-*`), spacing (`--spacing-*`) and Ions icons
     (`IndiaBusDS.Icon`, `ion-*`). Soft custom shadows are preferred over the Ions elevation levels.
   - Leave the **current** screens untouched; proposals live only in `sol-*` files.
   - Respect `prefers-reduced-motion`.
5. Commit and push to `main`. The live site updates in about a minute. If you work through Claude Code, `CLAUDE.md` gives it these rules.

## Hosting

The site is static. It is deployed with Vercel from this repo: `main` → production URL, every pull request → a
preview URL. Keep Deployment Protection on so only signed-in team members can view it.
