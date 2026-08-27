# TML Website

Official website for the Trustworthy Machine Learning Lab at Konkuk University.

## Source

The active site is built with Astro.

- `src/pages/`: routes
- `src/components/`: shared interface components
- `src/data/`: publications, people, projects, news, and site metadata
- `src/styles/global.css`: shared visual and responsive styles
- `public/`: static assets copied into the build

Publication metadata in `src/data/publications.ts` is the single source used by the
publication archive, homepage featured research, and research-area representative
papers.

## Development

```sh
npm install
npm run dev
npm run build
```

The production build is written to `dist/`.

## GitHub Pages

GitHub Pages currently serves generated Astro files committed at the repository
root. Root `index.html`, route `index.html` files, and `_astro/` are build
output and should not be edited manually. After a successful build, sync
`dist/` to the repository root and commit source and output together.

The root `.nojekyll` file keeps GitHub Pages from processing the Astro output
with the legacy Jekyll pipeline.

## Legacy Files

The repository still contains the previous Jekyll theme files, including
`_config.yml`, `_layouts/`, `_includes/`, `_sass/`, `index.md`, and
`html_source_file/`. They are not used by the Astro build. They remain for
historical reference and can be removed in a separate cleanup after confirming
the GitHub Pages branch settings.
