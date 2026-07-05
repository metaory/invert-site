const injectable = (url) => /^https?:/.test(url ?? '');
const badge = (id, on) => chrome.action.setBadgeText({ tabId: id, text: on ? '●' : '' });
const script = (id) => chrome.scripting.executeScript({ target: { tabId: id }, files: ['toggle.js'] });
const activeTab = () => chrome.tabs.query({ active: true, currentWindow: true }).then(([t]) => t);

const inverted = (tab) =>
  tab?.id && injectable(tab.url)
    ? script(tab.id).then(([r]) => !!r?.result).catch(() => false)
    : Promise.resolve(false);

const toggle = async (tab) => tab?.id && badge(tab.id, await inverted(tab));

[
  [chrome.action.onClicked, toggle],
  [chrome.commands.onCommand, (cmd) => cmd === 'toggle' && activeTab().then(toggle)],
].map(([on, fn]) => on.addListener(fn));
