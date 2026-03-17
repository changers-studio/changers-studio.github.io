# Webpack build

The project now uses Webpack 5 to bundle JavaScript, compile SCSS, process HTML partials, and copy static assets into the `app/` directory.

## Getting started

1. Install dependencies: `npm install`
2. Start the dev server with live reload: `npm run dev`
3. Create an optimized production build: `npm run build`
4. Optional accessibility/markup check: `npm run html`

The compiled site is emitted to `app/`. Static assets such as fonts, images, and vanilla plugin scripts are copied there as-is so no extra manual steps are needed.

## Project structure

- `src/pages` – top-level HTML pages. Use `@@include('../partials/...')` for shared pieces.
- `src/partials` – HTML partials consumed by the pages.
- `src/js/main.js` – main JavaScript entry. Section-specific scripts live in `src/js/sections/`.
- `src/scss/critical.scss` and `src/scss/common.scss` – critical and main stylesheets. Section styles live in `src/scss/sections/`.
- `src/js/plugins` – third-party scripts that stay as standalone files and are copied to `app/js/plugins`.
- `src/img`, `src/fonts`, `src/video` – static assets copied to the build output.

## Notes

- When exporting images from Figma, always export at the frame/node display size used in the design (not the original source image dimensions).
- The legacy `gulpfile.js` remains for reference but is no longer part of the toolchain.
- Webpack reports Sass deprecation warnings because the existing styles rely on `@import` and legacy Sass helpers. The runtime output still matches the previous build, but consider migrating to the modern `@use`/`@forward` syntax when you revisit the SCSS.
- `npm run dev` automatically opens the dev server in your browser. If port `8080` is busy, Webpack selects a free one (or set a custom port via the `PORT` env variable). The sprite preview regenerates live when `src/img/sprite.svg` changes.
- `npm run html` runs [html-validate](https://html-validate.org/) against the generated files under `app/`, avoiding legacy dependencies such as `glob@7` or `rimraf@3`.
- `npm run sprite` refreshes the sprite preview partial included on `index.html`, rendering each symbol from `src/img/sprite.svg`.
