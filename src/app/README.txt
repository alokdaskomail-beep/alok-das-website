Alok Das website — hospitality messaging update

Repository: https://github.com/alokdaskomail-beep/alok-das-website
Base commit: b1bd164a0396025a532930720aacfd8f5b6a1a32

Content changes only:
- Homepage hero speaks to independent hotels and guesthouses in Nepal.
- Free visibility and communication check is the primary call to action.
- Supporting copy covers missed messages, OTA dependency and direct booking paths.
- The three existing hotel offers appear first; all six prices are unchanged.
- Hotel-growth copy emphasizes direct bookings and practical guest communication.
- Search and sharing metadata reflect the hospitality focus.

Preserved: tech stack, routes, JSX element structure, CSS classes, colors, fonts, portfolio, contact details and WhatsApp message templates.

Validation: npm run build passed, including type checks and static page generation. Structural and rendered HTML checks passed. Browser visual QA was not performed. Not pushed or deployed: GitHub connection lacks write access to this repository (403).

Apply from a clean checkout of the repository:
  git apply --check alokdas-hospitality-messaging.patch
  git apply alokdas-hospitality-messaging.patch
  npm ci
  npm run build

Alternatively replace only the three matching source files included in this archive. Review the diff before committing, especially if main has changed since the base commit.
