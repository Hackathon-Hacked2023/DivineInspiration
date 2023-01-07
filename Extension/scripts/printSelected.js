
const print = console.log;
console.log("sadsada")


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
)

