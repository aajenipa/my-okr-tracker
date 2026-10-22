# Roadmap

Rough hour estimates in brackets. Roughly in the order I plan to do them.

## Fixes and foundations

- [ ] **Keep guest data when a guest signs in.** Google sign-in from a guest session currently signs in as a new user before trying to link, so the guest's activities and objectives are left behind. Link the credential to the anonymous user first, and do the same for email sign-up. (3h)
- [ ] **Split `index.html` into modules.** Move auth, the activity log, objectives, utilization math and rendering into separate ES modules so each part can be tested on its own. (6h)
- [ ] **Unit tests** for the week, quarter and date helpers and the utilization math (Vitest). (4h)
- [ ] **Firestore rules tests** with the Firebase emulator, so one user can never read or write another user's data. (3h)
- [ ] **CI** that runs the tests on every pull request. (1h)

## Features

- [ ] **CSV export and import** for the activity log. (4h)
- [ ] **Utilization trend chart** by week and by quarter. (4h)
- [ ] **Quarterly review export** of objectives, key results and notes as Markdown or PDF. (4h)
- [ ] **Copy last week / recurring activities** so regular work doesn't have to be re-entered. (3h)
- [ ] **Input checks and undo:** no negative hours, billable hours can't exceed total hours, and an undo for deletes. (3h)
- [ ] **Custom activity types and statuses** instead of the fixed lists. (2h)

## Polish

- [ ] **Replace the Tailwind Play CDN** with a small Tailwind CLI build. (3h)
- [ ] **Mobile layout** for the activity table. (3h)
- [ ] **Accessibility pass:** labels, keyboard editing of table cells, contrast. (3h)
- [ ] **Dark mode.** (2h)
- [ ] **Offline support** with Firestore local persistence. (2h)

Total: about 50 hours.
