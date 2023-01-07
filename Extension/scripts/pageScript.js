


const print = console.log
console.log("loading context menu receiver")



/**
 * 
 * @param {Document} doc 
 * @param {Number} x 
 * @param {Number} y 
 */
const insertMsgBoxAtPos = (doc, x, y) => {
    print("in insert")

    let box = doc.createElement("div");
    box.style.cssText = "background: red";
    box.innerHTML = "<p>waaaa </p>";
    box.style.position = "absolute";
    box.style.left = x + "px";
    box.style.top = y + "px";

    doc.body.insertBefore(box, doc.body.firstChild);


};


let mouseX = 0;
let mouseY = 0; // global vars for current mouse position
let topPos = 0;

document.addEventListener("mousedown", (event) => {
    if (event.button != 2) return;
    mouseX = event.clientX;
    mouseY = event.clientY;
    topPos = document.documentElement.scrollTop;
    print("right click")

})

chrome.runtime.onMessage.addListener((msg, sender, responder) => {

    if (msg.startsWith("alert")) {
        alert(msg.slice(5, msg.length - 1));

        insertMsgBoxAtPos(document, 0, 0);

    }
})