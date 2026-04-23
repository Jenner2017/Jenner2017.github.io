# Portfolio Site

Personal portfolio built with Angular 21, TypeScript, and SCSS.

The site is organized as a single-page experience with section-based navigation and a floating dock in the hero area.

## Stack

- Angular 21
- TypeScript
- SCSS
- Standalone components
- Karma + Jasmine for unit tests

## Available Scripts

Run commands from the project root:

- `npm install` installs dependencies
- `npm start` starts the development server
- `npm run build` creates the production build in `dist/portfolio-site`
- `npm run watch` builds in watch mode for development
- `npm test` runs unit tests

## App Structure

Main shell:
- `src/app/app.component.ts`

Home page:
- `src/app/pages/home/`

Sections:
- `src/app/sections/hero/`
- `src/app/sections/about/`
- `src/app/sections/skills/`
- `src/app/sections/experience/`
- `src/app/sections/projects/`
- `src/app/sections/education/`

Shared components:
- `src/app/shared/components/navbar/`
- `src/app/shared/components/footer/`

Global styles:
- `src/styles.scss`

## Current Design Notes

- The site uses a light canvas with subtle borders and soft surfaces.
- The current accent direction is neutral and centered on `#6b7280`.
- The hero section includes a floating dock for navigating to page anchors.
- `experience` and `education` use a similar timeline-style layout.

## Development Notes

- Components are implemented as standalone Angular components.
- Content-heavy sections are mostly data-driven from arrays inside their component `.ts` files.
- When updating section names or anchors, also update the hero dock and navbar links.

## Local Development

Start the app with:

```bash
npm start
```

Then open `http://localhost:4200/`.

## Testing

Run:

```bash
npm test
```

## Build

Run:

```bash
npm run build
```

The production output is generated in `dist/portfolio-site`.
