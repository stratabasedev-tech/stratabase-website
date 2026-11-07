# StrataBase Website — Public-Lite Release

This is the **complete public StrataBase marketing website**. It is NOT the field application.

## Change summary
- Removed public News & Updates and Roadmap navigation links across header/footer/pages.
- Removed the homepage News/Release section and future Template Studio teaser.
- Removed public update/roadmap HTML pages and the embedded release-history JSON file.
- Removed a version-specific Help article.
- Added temporary redirects for old `/updates` and `/roadmap` URLs to the homepage.
- Preserved public information pages, Help, theme controls, Core brand assets, contact and app sign-in links.

## Private What's New
- The signed-in app's **Account & Device → What's New** is unchanged.
- This WEBSITE release does not create paid-subscription enforcement. Access to in-app updates depends on the application's existing sign-in/organisation access.
- Keep historical releases and the detailed private roadmap outside public site files, e.g. private repository or private development tracker.

## Deploy
- Deploy to **public website** Netlify project for `stratabase.co.za` only.
- If using GitHub, commit these files to the separate `stratabase-website` repository.
- DO NOT upload this ZIP to `app.stratabase.co.za`; it has no app code or app database config.
- Test homepage, Help, appearance switch, and old `/updates/` `/roadmap/` redirects.

## Important privacy boundary
Removing URLs from the CURRENT site does not erase previously cached pages, older Netlify deployment permalinks or third-party archives. Remove public history from repository history/old deployment URLs only after assessing the need, or contact the hosting provider. Avoid publishing development detail in future.
