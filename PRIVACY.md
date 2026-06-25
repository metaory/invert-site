# Privacy Policy — invert-site

**Last updated:** June 25, 2026

## Summary

invert-site toggles CSS color inversion on the page you view when you click the toolbar icon or press Alt+I. The extension does not collect, store, or send personal information, browsing history, or page content to the developer or any third party.

## Local storage

No `chrome.storage` or other persistence. Invert state lives in `document.body.style.filter` until you reload, navigate away, or toggle off.

## When you use the extension

- You click the toolbar icon or press Alt+I. The extension sets or clears `filter: invert(1)` on `document.body`.
- A badge dot on the toolbar icon shows while invert is on. That state is not saved.
- No analytics or server communication.

## Where data goes

Processing stays in your browser on the page you view. No backend server. No cloud sync.

## Third-party services

No analytics, ads, or third-party SDKs.

## Permissions

| Permission | Why |
|------------|-----|
| `activeTab` | Access the active tab on icon click or Alt+I to run the invert toggle |
| `scripting` | Run `toggle.js` to set or clear `filter: invert(1)` on `document.body` |

The extension does not read pages in the background. The on-page change is an inline `filter` on `body`.

## Your controls

- **Turn invert off:** Click the toolbar icon or press Alt+I again.
- **Clear state:** Reload the page or navigate away.
- **Remove the extension:** Uninstall from `chrome://extensions`.

## Children

invert-site is not directed at children under 13.

## Changes

We update this policy when practices change. The date at the top changes with it. Continued use after an update means you accept the revised policy.

## Contact

Privacy: [metaory@gmail.com](mailto:metaory@gmail.com)  
Project: https://github.com/metaory/invert-site
