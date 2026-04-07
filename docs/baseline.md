# Baseline (Pre-Refactor)

Date: 2026-04-07

## Asset Sizes

- `images/`: 55M
- `lib/`: 1.9M
- `fonts/`: 1.3M
- `js/`: 256K
- `css/`: 404K

## Home Page Markup Signals

- Stylesheets linked: 10
- Scripts linked: 11
- Legacy dependencies include jQuery, Owl Carousel, Magnific Popup, Isotope, and CDN scripts.

## Risk Notes

- Multiple overlapping style pipelines (`sass/` plus static CSS files).
- Script stack depends on jQuery plugins and legacy initialization patterns.
- SEO metadata is mostly blank on legacy pages.
