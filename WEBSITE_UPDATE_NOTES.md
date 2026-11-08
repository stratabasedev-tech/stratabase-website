# StrataBase Public Website — Help Refresh (8 November 2026)

## Changes
- Adds **Editing StrataBase records in Excel**, a step-by-step native workbook export/edit/re-import guide to the existing Help Centre.
- Explains the mandatory **Record ID** and **Updated At** fields for update mode, older export limitations, and safe conflict handling.
- Clearly labels hidden/protected metadata and automatic mapping as future planned features.
- Preserves the existing public-lite position: no public roadmap, changelog or release history.

## Deployment scope
Static public website only (`stratabase.co.za`). No app, Supabase, Netlify production app, or GitHub branch changes. Review through the public website's separate deployment workflow.

## Quick smoke tests
1. Open Help and search for `Updated At` or `Excel` and select the new article.
2. Verify both Help navigation links work and all seven steps render.
3. Check mobile Help navigation and theme controls.
4. Check homepage, sign-in link, old `/updates/` and `/roadmap/` redirects.
5. Keep `app.stratabase.co.za` on its separately controlled release pipeline.
