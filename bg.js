chrome.omnibox.onInputEntered.addListener(q =>
  chrome.tabs.update({
    url: "https://www.tiktok.com/search?q=" + q
  })
);