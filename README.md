# My OKR Tracker

A small web app for logging weekly work, tracking billable hours and utilization, and rolling it all up into quarterly OKRs (objectives and key results).

Live site: https://aajenipa.github.io/my-okr-tracker/

## What it does

- **Weekly activity log.** One row per activity: date, week number, type (Work, PTO, Holiday), project or work-stream, what got done, status, total hours and billable hours. Cells are edited in place and saved as you go.
- **Filters and sorting.** Filter the log by year, quarter, month or week, and sort by date.
- **Utilization summary.** Effective utilization (hours worked vs. hours available after time off) and billable utilization (billable vs. worked), based on a weekly hours setting you can change.
- **Quarterly summary.** Objectives with key results per quarter, each with a target, actual, notes and progress. Objectives can be reordered, and key results added or removed.
- **Accounts.** Sign in with email and password, with Google, or continue as a guest. Each user's data is private to them. New accounts start with a little sample data so the screens aren't empty.

## Who it's for

Anyone who keeps a weekly log of their work and has to turn it into quarterly goals or a self-review: consultants and freelancers tracking billable time, or anyone on an OKR cycle. I built it as a personal tool for exactly that.

## Built with

- Plain HTML and JavaScript (ES modules), no build step
- Tailwind CSS (Play CDN)
- Firebase Authentication (email/password, Google, anonymous) and Cloud Firestore, using the Firebase v11 web SDK
- GitHub Pages, deployed by a GitHub Actions workflow

## Run it locally

1. Create a Firebase project and add a Web app to it.
2. In Authentication, turn on the Email/Password, Google and Anonymous providers.
3. Create a Firestore database and publish the rules in [`firestore.rules`](firestore.rules) (paste them into Firestore > Rules, or run `firebase deploy --only firestore:rules`).
4. Copy `firebase-config.example.js` to `firebase-config.js` and fill in your web app's settings. `firebase-config.js` is in `.gitignore`, so it never gets committed.
5. Serve the folder over HTTP (ES modules won't load from `file://`):

   ```bash
   python3 -m http.server 8000
   ```

   Then open http://localhost:8000.

## Deploy

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages. It needs:

- A repository secret named `FIREBASE_CONFIG` holding the web app config object, either as JSON or copied straight from Firebase console > Project settings > Your apps > Config (from the `{` to the `}`):

  ```json
  {"apiKey":"...","authDomain":"...","projectId":"...","storageBucket":"...","messagingSenderId":"...","appId":"..."}
  ```

- **Settings > Pages > Source** set to **GitHub Actions**.
- Your Pages domain (for example `your-name.github.io`) added under Firebase **Authentication > Settings > Authorized domains**.

## Data model

All data lives under the signed-in user:

```
users/{uid}/activities/{activityId}   date, week, type, project, action, status, totalHours, billableHours, createdAt
users/{uid}/objectives/{objectiveId}  title, order, createdAt, krs: [{ quarter, result, target, actual, notes }]
```

## Roadmap

Planned work is in [ROADMAP.md](ROADMAP.md).

## License

MIT. See [LICENSE](LICENSE).
