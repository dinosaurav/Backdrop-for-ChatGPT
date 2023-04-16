function getTitle(){
    return document.title;
}
function getText(){
    return document.body.innerText;
}
function uploadText() {
    appurl = "https://nixqjb-8000.csb.app/upload-text/";
    payload = JSON.stringify({
        "title": title,
        "text": text
    });
    console.log(payload);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", appurl);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }};
    xhr.send(payload);
    console.log("sent to " + appurl + " payload: " + payload);
}
console.log(getText());             //Gives you all the text on the page
console.log("DINOSAURAV5");
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("text requested");
    title = getTitle();
    text = getText();

    if (request.action === "getText") {
      sendResponse(getText());
    }
    uploadText(title, text);
  });