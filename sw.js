const toggle = async (tabId) => {
  const [r] = await chrome.scripting.executeScript({ target: { tabId }, files: ['toggle.js'] });
  chrome.action.setBadgeText({ tabId, text: r?.result ? '●' : '' });
};

chrome.action.onClicked.addListener(({ id }) => toggle(id));

chrome.commands.onCommand.addListener(async (cmd) => {
  if (cmd !== 'toggle') return;
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  tab?.id && toggle(tab.id);
});
