# Design and interaction notes
## References
This redesign applies the task-scoped guidance from [Emil Kowalski's skills](https://github.com/emilkowalski/skills), specifically:
- [emil-design-eng](https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md)
- [animate](https://github.com/emilkowalski/skills/blob/main/skills/animate/SKILL.md)
- [mobile-native](https://github.com/emilkowalski/skills/blob/main/skills/mobile-native/SKILL.md)

The skills were read as design references, not installed globally. No component library is needed for this static page: native links, buttons and details elements cover its interactions.

## Direction
An off-white and cobalt creator portfolio, with an asymmetric introduction and the owner's music image and an abstract live-production illustration. A small voxel illustration represents the unlaunched Minecraft project; it is not a screenshot. Contiguous chapter links give way to distinct music, backstage and collaboration sections, rather than repeating a generic card grid.

Bricolage Grotesque, Noto Sans TC, Noto Serif TC and IBM Plex Mono are self-hosted as subsetted WOFF2. Font family names inside the modified files have been changed to XC11 names. The original licences and credits remain in assets/FONT-LICENSES.txt.

## Motion and input
- A single 300ms page entrance, staggered by 50ms. No ongoing decorative animation or scroll interception.
- Transform/opacity entrance; no transition: all or animated layout properties.
- Menu and detail reveal under 200ms; frequent actions stay immediate.
- Buttons compress to 0.97 on pointer activation.
- Hover effects require a fine pointer and hover support.
- Keyboard input disables transitions and animation, and removes entrance classes so pointer input cannot replay them.
- Reduced-motion CSS uses a short opacity fade without positional movement.
- Native details supply disclosure semantics and normal keyboard behaviour; Escape closes the mobile menu and restores summary focus.
- 44px minimum button/link targets for compact controls, zoom remains enabled, safe-area header/footer insets, and an accessible live status for email copying.
- All primary content and links work without JavaScript. The optional language/copy controls only appear when JavaScript runs.

## Verification
The local page was exercised in the in-app browser at 1440px desktop, 390px phone and 320px narrow-phone viewport widths in both languages. Checks covered horizontal overflow, actual image loading, language switching and reload persistence, mobile menu navigation/dismissal, Escape focus behaviour, XC-XV disclosure, contact targets and successful clipboard feedback. Browser warnings/errors were empty during these flows.

JavaScript syntax, unique IDs, internal anchors, local asset references, font glyph coverage for authored text, and unchanged tracker files were checked separately. Reduced-motion rules are implemented and source-checked; physical phones, device safe areas, touch hardware and OS reduced-motion behaviour have not been tested on hardware.

Privacy: no school name, identifiable school photograph, or direct school-project repository links are published in the portfolio. Backstage experience is described in general terms. Historical Git commits and external profiles are outside the scope of this page.
