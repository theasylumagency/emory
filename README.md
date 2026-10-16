# Emory — Barber & Beauty

A Georgian-language website concept for Emory in Saburtalo, Tbilisi. Built with Next.js 16.4, React 19, local fonts and locally stored concept photography.

## Local preview

Run `npm run dev`, then open http://localhost:3000.

Run `npm run build` for a production build and TypeScript validation. Run `npm start` to serve that build.

## Scope

The first exploration is a single homepage with service discovery, interactive case stories, situation-based team selection, Ninutsa's editorial appearance and a four-step booking demo.

The booking flow is local-only. No appointment is created and no personal information is transmitted or persisted. Prices, cases, specialists and availability are explicitly illustrative. Photos are AI-generated; Ninutsa is based on the supplied canonical character reference. Real reviews, business hours, phone number and final service data must be added before launch.

## Project map

- `src/app/page.tsx`: server-rendered homepage sections
- `src/app/globals.css`: visual system and responsive layouts
- `src/components/site.tsx`: navigation, services, cases and team interactions
- `src/components/booking.tsx`: booking context and accessible native modal
- `src/lib/content.ts`: illustrative service, team and case content
- `public/images`: generated editorial assets
- `public/fonts`: self-hosted fonts and their licenses
- `docs/concept-implementation.md`: design direction, scope and content handoff
- `docs/website-concept-brief.md`: original brief
- `characters/ninutsa`: canonical character reference

The concept is intentionally marked `noindex` until real content and booking integration are ready.
