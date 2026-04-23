# AGENT.MD

## Purpose

This repository contains a personal portfolio site built with Angular and SCSS.
Use this file as the working guide for any agent or contributor making changes in the project.

## Project Snapshot

- Framework: Angular 21
- Language: TypeScript
- Styling: SCSS
- Architecture: standalone Angular components
- App type: single-page portfolio with section-based composition
- Current accent direction: neutral gray-based accent centered on `#6b7280`

## Main Commands

Run commands from the repository root.

- Install dependencies: `npm install`
- Start dev server: `npm start`
- Build production bundle: `npm run build`
- Build in watch mode: `npm run watch`
- Run unit tests: `npm test`

## Project Structure

Top-level Angular app files:
- `src/app/app.component.ts`
- `src/app/app.routes.ts`

Main page composition:
- `src/app/pages/home/home.component.ts`
- `src/app/pages/home/home.component.html`

Portfolio sections:
- `src/app/sections/hero/`
- `src/app/sections/about/`
- `src/app/sections/skills/`
- `src/app/sections/experience/`
- `src/app/sections/projects/`
- `src/app/sections/education/`

Shared layout components:
- `src/app/shared/components/navbar/`
- `src/app/shared/components/footer/`

Global styling entry:
- `src/styles.scss`

## Implementation Conventions

### Angular patterns

- Components are implemented as `standalone: true`.
- Section components are imported directly into `home.component.ts`.
- The root shell renders `router-outlet` and the shared footer.
- Navigation links in the hero dock and navbar target in-page section anchors such as `#about`, `#skills`, `#experience`, `#projects`, and `#education`.

### Styling expectations

- SCSS is used throughout the app.
- Section templates and styles are tightly coupled.
- Before renaming template classes, element structure, or data property names, check the related SCSS file.
- Prefer minimal style changes that preserve the current layout language: light canvas, subtle borders, restrained shadows, and a neutral accent.

### Content modeling

- Several sections are driven by in-component arrays or static properties.
- For simple content updates, prefer editing the existing array/object shape instead of redesigning the template.
- Do not rename existing properties in content arrays unless you also update every template and style dependency that relies on them.
- If additional content is needed, it is safer to add optional properties than to replace existing ones.

## Safe Working Rules

- Make minimal edits when updating portfolio copy.
- Preserve existing selectors, class names, and component file names unless the task explicitly requires a rename.
- If a section already renders data from an array, keep the same property names unless the change requires a coordinated refactor.
- Avoid broad visual rewrites unless the task explicitly asks for redesign work.
- Check for possible coupling between HTML structure and SCSS before modifying markup.
- When changing accent colors, update all related soft backgrounds and border transparencies so the UI remains visually consistent.

## Recommended Workflow

1. Read the target component `.ts`, `.html`, and `.scss` together.
2. Identify whether the request is content-only, style-only, or structural.
3. For content-only requests, update data structures first and avoid template changes.
4. For template changes, verify the SCSS selectors that depend on the markup.
5. If a section is linked from the hero dock or navbar, update those anchors as part of the same change.
6. Run a build or tests when the environment allows it.

## Notes For Future Changes

- `src/app/pages/home/home.component.ts` is the central composition point for the homepage sections.
- `src/app/sections/experience/experience.component.ts` stores display content in an `experiences` array with properties used directly by the template.
- `src/app/sections/education/education.component.ts` follows a similar data-driven structure to `experience`.
- `src/app/sections/hero/hero.component.ts` owns the dock navigation links and icons.
- The current site background is light, and major surfaces should blend with that canvas instead of introducing isolated dark blocks.

## When Editing Experience Content

- Prefer updating only `experiences` data in `src/app/sections/experience/experience.component.ts`.
- Keep current property names intact unless the HTML and SCSS are updated in the same change.
- If richer formatting is needed later, extend the data shape carefully and update the template in a backward-compatible way.

## When Editing Education Content

- Prefer updating only `educationItems` data in `src/app/sections/education/education.component.ts`.
- Keep the timeline-like structure aligned with `experience` unless the user asks for a different layout.
- If the section title, anchor, or icon changes, update the hero dock and navbar at the same time.
