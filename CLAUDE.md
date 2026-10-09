# Working on the redBus FTUE prototype

Designers work on this repo through Claude Code. Claude does all git, server and preview work; the designer describes design changes. See `README.md` for the file layout.

## Workflow
- Everyone pushes straight to `main`. Don't create branches or pull requests.
- Before starting any change, and again just before pushing, run `git pull --rebase origin main`. Someone else may have pushed in the meantime. Resolve conflicts by hand and never force-push.
- Commit each finished change with a short message, then push to `main`. The live site (https://redbus-ftue.vercel.app/current-funnel/index.html) redeploys in about a minute.
- If a push breaks the site, fix forward or revert the commit. Vercel's Instant Rollback is the emergency option.

## Running and checking
- Start the local server with `node ftue-prototype/serve.js` (http://localhost:8123). Use the browser preview to check every visual change before pushing.
- Reload with `?v=N` if the browser shows a stale page.

## Design rules
- Build only the solves the designer asks for. Don't invent solves.
- A screen's Current and Proposed versions are compared with the switch, not side by side. Several directions for one solve go under Option 1/2 (keys A, B in `solves.js`).
- Use Rubicon Ions tokens: colours, type roles, `--radius-*`, `--spacing-*` and Ions icons (`IndiaBusDS.Icon`, `ion-*`). The font is Inter. Prefer soft custom shadows over the Ions elevation levels.
- Leave the **current** screens untouched. Proposals live in `current-funnel/sol-*.js/.css` and are registered in `current-funnel/solves.js`.
- Respect `prefers-reduced-motion`.

## Privacy
- The repo holds internal production screenshots and research, so keep it private.
- Never commit real phone numbers, emails or credentials. Use the dummy number 9876543210 in mock-ups.
