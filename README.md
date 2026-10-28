# xc11 — X Series
An English-only portfolio for xc11: music, backstage work and projects made together.
Live website: https://xc1974.github.io/

## Website
No build step or frontend dependencies are needed. Serve this directory with any static server:

    python -m http.server 4175

index.html contains the portfolio and Events section. site.css contains responsive styling and CSS motion. site.js handles native menu dismissal and email copying. There is no locale toggle, saved language preference or Chinese copy.

XC-XVI supports both invitations and open applications. Its first event is **2026 End Mix**. Full event details and dates are still to be announced; the full series announcement remains planned for early November 2026.

## Applications
The public entry is https://xc1974.github.io/apply.html.
apply.html and apply-redirect.js forward visitors to the published XC-XVI application service. Only the known invitation/event context is forwarded; applicant data is never placed in a GitHub Pages URL or stored in this repository.

The separate Vercel application accepts:
- Name — required
- School / university — optional
- Email — required
- Discord username — required

Both invited and open applicants use the same form. Invitation context is self-reported and does not grant automatic acceptance. A receipt is shown only after the record is saved. Records stay in a private Vercel Blob store; there is no public applicant directory or export.

The application service has no email notification integration. Review records in the project's private Blob store in the Vercel dashboard. The application source and schema are maintained in the separate Vercel project, not in GitHub Pages.

## Maintenance
The current public enquiry address is s1401121@gmail.com. Update its occurrences in index.html, site.js and the separate application project when it changes.

Fonts are self-hosted Bricolage Grotesque and IBM Plex Mono. The files are subsetted; tools/subset-fonts.py can regenerate them. Keep assets/FONT-LICENSES.txt.

School names, identifiable school photographs and direct school-project repository links remain removed from the portfolio. The music image is supplied by the owner. Backstage visuals are abstract code-based illustrations.

The original typhoon tracker remains at typhoon.html with its unchanged original application files. It is a separate archived app and is no longer linked from the portfolio. Its live weather feeds have not been revalidated. Original documentation is retained in TYPHOON_README.md.

Application service: https://xc-xvi-apply.vercel.app/
