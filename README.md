# Personal Mini Expense Tracker (PWA)

📱 A lightweight, privacy-focused daily expense tracker that runs entirely in your browser.  
Works offline, supports auto-categorization, CSV/JSON backups, and shows insights with charts.

## Features
- **Offline-ready PWA** — install via “Add to Home Screen”
- **Local data only** — no server, uses `localStorage`
- **Auto-categorization** using regex/keyword rules
- **Import/Export** CSV and JSON for backup/restore
- **Insights**: category split, monthly trends, top merchants, payment methods
- **Maskable icons** included for better Android/iOS install experience

## Quick Start
1. Open the app in your browser:
2. On mobile, use **Add to Home Screen** for an app-like experience.
3. Start adding expenses — everything stays on your device.

## Deployment on GitHub Pages
1. Fork/clone this repo.
2. Ensure these files are at the repo root:
- `index.html`
- `manifest.webmanifest`
- `sw.js`
- icons (`favicon.ico`, `icon-192.png`, `icon-512.png`, `icon-192-maskable.png`, `icon-512-maskable.png`)
- `.nojekyll`
3. In GitHub:  
- Go to **Settings → Pages**  
- Source: **Deploy from branch** → `main` → `/ (root)`  
4. Your app will be live at:  

## Backups
- Use the **Backup** button in the app to save a `.json` file.
- Restore later via the **Restore JSON** option.

## Development Notes
- The app registers `sw.js` for offline caching.
- Manifest and icons are configured for installable PWA.
- No external backend is used; data is fully private on your device.

---

💡 Your expenses never leave your device — 100% local and private.
