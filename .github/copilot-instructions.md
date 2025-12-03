<!-- Auto-generated guidance for AI coding agents working in this repository. -->
# Copilot / AI agent quick instructions

This repo is a Next.js (app router) frontend with a small design-system-style UI library under `components/ui`. Use these notes to be productive quickly.

- Tech stack: Next.js 16 (app dir), React 19, TypeScript, TailwindCSS v4, Radix UI primitives, pnpm (lockfile present).
- Main folders:
  - `app/` — Next.js app-router pages and `layout.tsx` (global wrappers, theme/provider usage).
  - `components/` — app-level components; `components/theme-provider.tsx` is the app theme entrypoint.
  - `components/ui/` — small UI primitives (button.tsx, input.tsx, toast.tsx, etc.). Follow patterns in these files.
  - `hooks/` — reusable hooks (e.g. `hooks/use-mobile.ts`, `hooks/use-toast.ts`). Prefer putting non-UI hooks here.
  - `lib/` — misc utilities (see `lib/utils.ts`).
  - `styles/` and `app/globals.css` — global Tailwind styles.

What to run (observed in `package.json`):

- Install: prefer pnpm since a `pnpm-lock.yaml` exists. Example: `pnpm install`.
- Dev: `pnpm dev` (runs `next dev`).
- Build: `pnpm build` (runs `next build`), then `pnpm start` to serve the production build.
- Lint: `pnpm lint` (runs `eslint .`).

Notes about conventions and patterns (do not invent):

- UI primitives live in `components/ui/`. When adding a new primitive, mirror the file shape of `components/ui/button.tsx` and export the component as the default or named export consistent with nearby files.
- Theme & global wrappers: `components/theme-provider.tsx` is wired into `app/layout.tsx`. If you need a global context (theme, auth-like wrappers), add it here and update `layout.tsx`.
- Hooks vs UI helpers: prefer pure hooks under `hooks/` (e.g. `hooks/use-mobile.ts`) and UI-specific wrappers under `components/ui/` only when they include UI markup.
- Styling: components use Tailwind utility classes and `class-variance-authority` patterns. Reuse existing class patterns from `components/ui/*` to keep design consistent.
- Client vs server components: this codebase uses the app directory—check for `"use client"` at the top of a file to determine client components. Default to server components for data loading unless the component needs browser-only APIs or hooks.

Integration points & libraries to be mindful of:

- React Hook Form + Zod for forms: see `@hookform/resolvers`, `react-hook-form`, and `zod` in `package.json`.
- Sonner is used for toast notifications; there are wrappers under `components/ui/sonner.tsx` and `hooks/use-toast.ts`.
- next-themes and `components/theme-provider.tsx` handle dark/light theme switching.
- Recharts, date-fns, lucide-react, Radix UI packages — follow existing imports in `components/ui/*` for usage examples.

Developer workflows & PR checklist (practical):

1. Run `pnpm install` before doing anything. Then `pnpm dev` and exercise the changed UI paths in the browser.
2. Run `pnpm lint` and fix ESLint errors. There are currently no test scripts—do manual verification for visual/interaction changes.
3. When adding a UI primitive, add it under `components/ui/` and update any central exports if present.
4. If making global changes (theme, providers), update `app/layout.tsx`.

Quick references (examples):

- Global provider wiring: `app/layout.tsx` → `components/theme-provider.tsx`.
- UI primitive examples: `components/ui/button.tsx`, `components/ui/input.tsx`, `components/ui/toast.tsx`.
- Hook example: `hooks/use-toast.ts` and `hooks/use-mobile.ts`.
- Utility functions: `lib/utils.ts`.

Limitations & discovered gaps:

- No test scripts were found in `package.json`. Prefer adding focused unit/visual tests in follow-ups.
- The repo uses pnpm (lockfile present) but `README.md` is not present in the repository root; include setup instructions there if this becomes a public project.

If anything in these notes looks incorrect (I inferred package manager or file roles), point to the exact file(s) and I'll update the instructions.
