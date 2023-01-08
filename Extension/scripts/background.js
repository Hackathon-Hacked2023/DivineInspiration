
const print = console.log;


chrome.contextMenus.create(
    {
        id: "stuff",
        title: "Alert this!",
        contexts: ["selection"],
    },

)

const alertThis = (selection, tab) => {
    if (selection.menuItemId === 'stuff') {
        print(selection)
        chrome.tabs.sendMessage(
            tab.id,
            "alert" + selection.selectionText
        )
    }
}

chrome.contextMenus.onClicked.addListener(
    alertThis
);

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['scripts/action.js']
    })
})