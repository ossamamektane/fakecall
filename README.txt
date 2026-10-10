FAKE CALL — NO CUSTOM ICON

HOSTED / HOME-SCREEN USE
1. Upload ALL files in this folder together to the same HTTPS folder (for example, your GitHub Pages repository). Replace index.html and add sw.js, manifest.webmanifest, only. No icon files are needed.
2. Open the deployed website while online and leave it open for a few seconds so the service worker can finish installing. Open it once more before switching to airplane mode.
3. Add to Home Screen using your browser's menu. If you already installed an older version, remove its home-screen shortcut and add it again to refresh its name and remove the old custom icon. Keep the same site address to preserve existing saved data.
4. After the initial online installation, the app can reopen offline. The browser must retain the website's storage. Clearing website data removes offline files and saved content.

A raw.githubusercontent.com URL is source text, not the hosted app. Use your deployed HTTPS website.

SOUNDS
- The end-call sound is now a built-in two-note tone instead of the previous external MP3.
- Local audio files continue to use the app's existing on-device storage.
- The 'Use' buttons for sound links now download and save audio before accepting the link. Initial download needs internet and a server that permits cross-origin downloads; if blocked, download the sound separately and select the local file.
- Old linked sounds should be used once while online to save them before going offline. Sounds never downloaded cannot play offline.

SINGLE-FILE USE
index.html also contains the interface, styles, scripts, icon and end-call tone. A desktop browser can open the downloaded HTML without internet. Service workers/home-screen installation require HTTPS (or localhost for testing); phone file viewers may not execute HTML or preserve its storage.

TITLE / ICON
The page title and app name are "Fake Call". All custom icon declarations and files have been removed. iOS may generate a screenshot-based or default home-screen icon; websites cannot remove the system home-screen icon tile. Some browsers may not offer PWA installation without manifest icons. Offline browsing still works.

TESTING
Verified locally in Chromium: service-worker installation, offline reload/reopen, app UI and audio storage, link-audio persistence across an offline reload, and inline JavaScript syntax. iOS behavior should be checked on your device.
