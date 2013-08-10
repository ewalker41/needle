chrome.runtime.onMessage.addListener (
  function (message, sender, sendMessage) {
    if (message.method == "getHTML") {
      sendMessage({html: document.getElementsByTagName("head")[0].innerHTML});
    }
  }
);
