# Personal Mini Expense Tracker (PWA)

📱 A lightweight, privacy-focused daily expense tracker that runs entirely in your browser.  
Works offline, supports auto-categorization, CSV/JSON backups, and shows insights with charts.

## Features
- **Offline-ready PWA** — install via “Add to Home Screen”
- **Local data only** — no server, uses `localStorage`
- **Auto-categorization** using regex/keyword rules
- **Import/Export** CSV and JSON for backup/restore
- **Insights**: category split & monthly trend (Transfers excluded)

## Quick Start
1. Open the app in your browser.
2. Add to Home Screen (on mobile) for an app-like feel.
3. Start adding expenses — everything stays on your device.

## Deployment on GitHub Pages
1. Fork/clone this repo.
2. Ensure `index.html` is at the repo root.
3. In GitHub:  
   - Go to **Settings → Pages**  
   - Set source: **Deploy from branch**, choose `main` branch, folder `/root`  
4. Your app will be live at:  
   `https://<your-username>.github.io/personal-mini-expense-tracker/`

## Backups
- Use the **Backup** button in the app to save a `.json` file.
- Restore later via the **Restore JSON** option.

---

💡 Your expenses never leave your device — 100% local and private.
