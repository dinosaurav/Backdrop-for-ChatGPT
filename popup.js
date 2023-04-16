var query = { active: true, currentWindow: true };
function callback(tabs) {
    var currentTab = tabs[0]; // there will be only one in this array
    console.log(currentTab); // also has properties like currentTab.id
    chrome.tabs.sendMessage(currentTab.id, { action: "getText" }, (response) => {
        console.log("SDF");
    });
}
chrome.tabs.query(query, callback);