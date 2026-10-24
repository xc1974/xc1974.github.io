# xc11 — X Series
A bilingual personal website for xc11: music, backstage work and the next collaborative project.

Live site: https://xc1974.github.io/

## Run locally
No build step or frontend dependencies are needed. Serve the publishing directory with any static server, for example:

    python -m http.server 4175

Open http://127.0.0.1:4175/ while the server is running. GitHub Pages serves the same directory.

## Files
- index.html — content and accessible native HTML structure
- site.css — responsive layout, design tokens and CSS motion
- site.js — Chinese/English preference, mobile menu dismissal and email copy feedback
- assets/ — the owner's supplied music image and an abstract backstage illustration, self-hosted fonts and licences
- typhoon.html — previous homepage, retained with its original application files
- DESIGN.md — design references, decisions and verification notes

## Content
X Series began in 2016 and contains XC-V, XC-X, XC-XV and XC-XVI. XC-XVI's announcement and leader recruitment are planned for early November 2026; the application link is not ready. XC-XV Hub is permanently closed, and X-12 Series is a backstage sub-series within XC-XV.

Chinese text is authored directly in index.html. The corresponding English text is in each data-en attribute. Accessibility labels and image descriptions have data-en-aria-label and data-en-alt translations. The default language is Traditional Chinese. A saved preference or ?lang=en can select English.

The current public contact address is s1401121@gmail.com. Update every occurrence in index.html and site.js when it changes. When recruitment opens, update both languages, the early-November wording and the enquiry link together; there is currently no application form.

Fonts are subsetted to the current copy. If new characters are added, regenerate the subsets with tools/subset-fonts.py and the original open-source font files; see that script's help. Font licences are included in assets/FONT-LICENSES.txt.

## Existing projects
- [YouTube](https://www.youtube.com/@xc11_)
- [NetEase Cloud Music](https://music.163.com/#/artist?id=52737043)

Featured uploads are labelled as channel uploads, remixes or Black MIDI, rather than claiming other artists' tracks as originals.

The typhoon tracker keeps its original app.js, config.js and api-service.js. Its external weather feeds have not been revalidated. The original documentation is in TYPHOON_README.md.

Privacy: no school name, identifiable school photograph, or direct school-project repository links are published in the portfolio. Backstage experience is described in general terms. Historical Git commits and external profiles are outside the scope of this page.
