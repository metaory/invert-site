<div align="center">
  <img src="icons/icon128.png" width="96" height="96" alt="logo">
  <h1>Invert Site</h1>
  <p><strong>Minimal, on-demand invert. One filter, one tab, one moment.</strong></p>
  <p>Press <kbd>Alt</kbd>+<kbd>I</kbd> or click the toolbar icon. Per-tab. Badge when on. Resets on reload.</p>
</div>

---

On-demand Chrome extension for pesky light-only sites with no built-in dark mode. Not an always-on dark theme.

## How it works

Most dark-mode extensions rewrite styles, inject themes, or walk the DOM. That work runs on the main thread and costs CPU on every pass. We take the minimal route instead.

Invert Site applies `filter: invert(1)` to the root `<html>` element in one shot. You see the result immediately. Toggle off removes the filter. No background service, no persistent mutation, no always-on processing.

That trade is deliberate. Inversion is not a perfect dark theme. Photos and brand colors can look wrong. Some layouts break. Most readable text-heavy pages look fine. Use your eyes and turn it off when it does not.

## On demand, not always on

Do not keep this enabled all the time. Install it, leave it idle, and flip it on only when you land on a bright site that refuses dark mode: articles, docs, dashboards. Hit `Alt+I` or the toolbar icon, read, hit it again when you leave. Per-tab, per-visit. That is the whole model.

## Install

**Chrome Web Store:** `[link pending — publish TBD]`

**Load unpacked (development):**

1. Open `chrome://extensions`
2. Enable Developer mode
3. Load unpacked → select this repo
4. Open a page and press `Alt+I` or click the icon

## Publish

Store listing and packaging: [.dev/store-launch/](.dev/store-launch/)

## Privacy

[Privacy policy](PRIVACY.md)

---

## License

[MIT](LICENSE)
