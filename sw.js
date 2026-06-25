chrome.action.onClicked.addListener(({ id }) =>
  chrome.scripting.executeScript({ target: { tabId: id }, files: ['toggle.js'] })
);
