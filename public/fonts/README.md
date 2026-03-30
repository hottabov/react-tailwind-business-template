Place the local production font files in this folder with these exact filenames:

Inter
- inter-400.woff2
- inter-500.woff2
- inter-600.woff2
- inter-700.woff2
- inter-800.woff2

Sansita
- sansita-400.woff2

Why these names
- `src/styles/index.scss` already references these exact files via `@font-face`
- once you drop them into `/public/fonts`, Vite will serve them from `/fonts/...`
- no further code changes should be needed

Recommended format
- use `.woff2` only for the best performance
- export upright styles only, since the site currently uses normal weights
