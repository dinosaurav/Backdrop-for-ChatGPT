chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, { action: "getText" }, (response) => {
      alert(response);
    })
});
