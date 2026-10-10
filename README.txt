FAKE CALL — NO CUSTOM ICON

HOSTED / HOME-SCREEN USE
1. Upload ALL files in this folder together to the same HTTPS folder (for example, your GitHub Pages repository). Replace index.html and add sw.js, manifest.webmanifest, only. No icon files are needed.
2. Open the deployed website while online and leave it open for a few seconds so the service worker can finish installing. Open it once more before switching to airplane mode.
3. Add to Home Screen using your browser's menu. If you already installed an older version, remove its home-screen shortcut and add it again to refresh its name and remove the old custom icon. Keep the same site address to preserve existing saved data.
4. After the initial online installation, the app can reopen offline. The browser must retain the website's storage. Clearing website data removes offline files and saved content.

A raw.githubusercontent.com URL is source text, not the hosted app. Use your deployed HTTPS website.

SOUNDS (from your GitHub repo)
- Put your sound files in a folder called "sounds" next to index.html:
    sounds/hangup.mp3    the hang-up sound (required)
    sounds/ringtone.mp3  default ringtone, used when no ringtone is picked
- The first time the app opens with internet, it downloads them and keeps
  them in the app's own storage (not the iPhone Files app). After that they
  play offline.
- If a sound was never downloaded and there is no internet, the app shows
  "Connect to the internet" and continues by itself once it is online.
- Call Setup now has a "Hang-up sound" section: Play, paste a different link,
  or go back to the default.
- If the browser clears website data, the app downloads the sounds again the
  next time it is online.

SINGLE-FILE USE
index.html also contains the interface, styles, scripts, icon and end-call tone. A desktop browser can open the downloaded HTML without internet. Service workers/home-screen installation require HTTPS (or localhost for testing); phone file viewers may not execute HTML or preserve its storage.

TITLE / ICON
The page title and app name are "Fake Call". All custom icon declarations and files have been removed. iOS may generate a screenshot-based or default home-screen icon; websites cannot remove the system home-screen icon tile. Some browsers may not offer PWA installation without manifest icons. Offline browsing still works.

TESTING
Verified locally in Chromium: service-worker installation, offline reload/reopen, app UI and audio storage, link-audio persistence across an offline reload, and inline JavaScript syntax. iOS behavior should be checked on your device.
