# redBus AI Smart Filter — Prototype

Interactive Vite + React prototype of the redBus search-results page (SRP) with
an AI smart filter ("RAY"). See **[HANDOFF.md](./HANDOFF.md)** for the full
context, design tokens, and the complete filter-widget interaction spec.

## Quick start

```bash
npm install
npm run dev     # http://localhost:5173
```

Load a specific screen with a URL hash: `#home`, `#loading`, `#srp`.
No hash starts on Home. Flow: **Home → Search buses → Loading → SRP**.

## Where the work is

- `src/components/FilterWidget.jsx` / `.css` — the AI smart filter widget (the focus)
- `src/components/Keyboard.jsx` — simulated on-screen keyboard
- `src/screens/SRP.jsx` — the pixel-perfect search-results screen + all filter state

Everything else (Home, Loading) exists to make the flow feel right.
