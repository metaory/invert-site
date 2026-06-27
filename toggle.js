globalThis.invertSiteToggle ??= () => {
  const id = 'invert-site';
  const root = document.documentElement;
  if (!root) return false;

  const on = root.hasAttribute('data-invert-site') || document.getElementById(id) || document.body?.style.filter === 'invert(1)';

  if (on) {
    root.removeAttribute('data-invert-site');
    document.getElementById(id)?.remove();
    if (document.body) document.body.style.filter = '';
    return false;
  }

  const bodyBg = document.body && getComputedStyle(document.body).backgroundColor;
  const base = !bodyBg || bodyBg === 'rgba(0, 0, 0, 0)' || bodyBg === 'transparent' ? '#000' : '#fff';

  root.setAttribute('data-invert-site', '');
  root.append(Object.assign(document.createElement('style'), {
    id,
    textContent: `html[data-invert-site]{filter:invert(1)!important;background:${base}!important;min-height:100vh;color-scheme:only light!important}html[data-invert-site] body{background:${base}!important;min-height:100vh}`,
  }));

  return true;
};

globalThis.invertSiteToggle();
