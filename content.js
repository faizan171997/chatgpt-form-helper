chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type == "get_response") {
        navigator.clipboard.writeText(message.data.choices[0].text.trim()).then(() => {
            alert('Text copied!');
        }, () => {
            alert('Oops! That failed :(');
        });
    } else if (message.type == "paraphrase") {
        document.activeElement.value = message.data.choices[0].text.trim();
    }
});