# Design and verification
The site keeps the off-white/cobalt identity and original music image from the previous redesign. It follows Emil Kowalski's [design engineering](https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md), [animation](https://github.com/emilkowalski/skills/blob/main/skills/animate/SKILL.md) and [mobile](https://github.com/emilkowalski/skills/blob/main/skills/mobile-native/SKILL.md) principles.

The portfolio is English-only. The language control, translation attributes and translation script are removed. The new Events section introduces 2026 End Mix without inventing dates or a lineup. Main navigation links to Events and the application entry.

Native HTML links, buttons and details remain keyboard accessible. Entrance motion is transform/opacity only, once on page load, with a reduced-motion fade. Pointer hover is capability-gated and keyboard interaction disables transitions. The mobile menu closes on link activation or Escape.

## Application service
The matching application page is plain server-rendered HTML with native validation and form submission. Name, email and Discord username are required; school / university is optional. The input font is 16px to avoid phone focus zoom. The form is responsive and respects safe areas.

The Vercel Node.js service validates origin, CSRF, payload size, honeypot and field values on the server. A unique submission key prevents duplicate records on retries. Success requires a confirmed private Blob record; the receipt contains a reference, not applicant details. Both invitation and open-application paths are supported. Invitation context is not treated as an access credential or approval.

Verification includes production builds and TypeScript checks; local browser submission with an empty school field; local API checks for invalid CSRF/origin, honeypot, size bounds, escaped validation feedback, idempotency, receipt access and rate limiting. Local Miniflare occasionally restarted during test requests; the API test client retries that exact development-only response once using the same submission key. It does not retry application errors or alter production behaviour.

Desktop and phone viewport checks are performed in the in-app browser. No physical phone hardware is used. Original tracker application files are preserved.

The final public application host is Vercel. Only the separate form is deployed there; the main portfolio remains on GitHub Pages. The Vercel form stores private JSON records in a private Blob store, with server-only storage credentials. The earlier Sites preview is not linked from the portfolio.
