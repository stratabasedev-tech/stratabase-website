# StrataBase Public Website

Independent static marketing website for `stratabase.co.za`. **Do not deploy this ZIP to `app.stratabase.co.za`.**

## Deployment

- Create a **separate private repository** named `stratabase-website`. Upload these files to the repository root on `main`.
- For an initial test, create a separate Netlify preview site from this repository, using no build command and publish directory `.`.
- Review all links, About, Privacy and Terms against the current live website before switching the real domain. A copy of the existing live website was **not** available during this build, so existing website-specific functions are not guaranteed to be preserved.
- When approved, connect the existing website Netlify project to this GitHub repo or configure the domain on the tested preview site. **Do not change the application Netlify project**.

## File layout
- `index.html`: home
- `updates/index.html`: searchable/filterable version notes
- `roadmap/index.html`: public roadmap
- `about/index.html`, `privacy/index.html`, `terms/index.html`: informational pages
- `assets/styles.css`, `assets/site.js`: UI code
- `assets/releases.json`: structured release note history
- `assets/core-mark.svg`: original, editable geometric field/strata emblem

## Maintenance

Update `updates/index.html` and `assets/releases.json` together for now. Treat release dates marked approximate as unverified, and do not publish development features as production features. App repo and website repo remain independent.

## Notes

- No forms collecting personal data, no Supabase keys, no database dependency.
- Google Fonts are optional; fallback fonts work offline.
- Preview device is **illustrative UI**, not a screenshot of the live app.
- The inherited privacy/terms content originated from the existing StrataBase app package and should be checked against the live website before replacing it.
