# StrataBase public website — Core Restored v2

A preservation-first update based on the archived `StrataBase_Website_CORE_READABILITY_BRAND.zip` source.

## Preserved
- Original SB brand favicon/logo, Core artwork and hero dashboard visual
- Light / Core (dark) / system appearance controls (`site.js`)
- Original full Help centre and `help.js`, plus existing Platform, Field workflow, Data & security, About, Privacy and Terms pages
- Core Easter egg on About (original story and modal)
- Original home background geometry and project-preview layout (no diagonal skew overlay)

## Added
- `/updates/`: searchable release notes; click each version to reveal specific changes and limitations
- `/roadmap/`: labelled roadmap with clear difference between development and future ideas
- Homepage release card and navigation/footer links to both pages
- `assets/releases.json`: machine-readable version archive reconstructed conservatively from dated ZIPs and project information

## Deployment
Static site: no build command, publish directory `.`. Root `index.html` must be deployed. Repository `stratabase-website` is separate from `stratabase-app`.

## Validation before replacing live site
Verify menu links on desktop/mobile, appearance controls, Help search/navigation, Core story modal, privacy/terms, release filters, and app link. Validate actual sites under Netlify deploy preview or via deploy history so live rollback is available.

## Historical accuracy
Early versions (October–November 2026) are documented from archive filenames and file timestamps; these are not necessarily publication dates. Avoid inventing detailed fixes for versions not yet source-diffed.
