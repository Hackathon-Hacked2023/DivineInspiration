
let mouseX = 0;
let mouseY = 0; // global vars for current mouse position
let topPos = 0;
let hovering = false;


const print = console.log
console.log("loading context menu receiver")


let tones = {
    happy: "Happy 🙂",
    sad: "sad 😦",
    sandich: "sandich🥪"
}


/**
 * 
 * @param {Document} doc document node the message box will be inserted to
 * @param {Number} x mouse x
 * @param {Number} y mouse y
 */
const insertMsgBoxAtPos = (doc, x, y, top, message, tone) => {
    print("in insert")
    print(x, y);

    let box = doc.createElement("div");
    box.id = "ToneMessageBox";
    box.style.cssText = `
        width: 15%;
        background: #FDF9F0;
        border-radius: 20px;
        border: 2px solid #E9C46A;
        padding: 20 px;
        position: absolute;
        left: ${x + "px"};
        top: ${(y + top) + "px"};
    `; // style the root div here

    // do rest of the styling in inner html
    box.innerHTML = `
    <style>
        #ToneMessageBox > p {
            color: blue;
        }
    </style>
    <p>${message}</p>
    <p>The overall tone is: ${tones[tone]}</p>
    `;

    box.addEventListener("mouseenter", () => { hovering = true; });
    box.addEventListener("mouseleave", () => { hovering = false; });
    doc.body.insertAdjacentElement("afterend", box);

};

const removeMsgBoxIfExist = () => {
    hovering = false;
    box = document.getElementById("ToneMessageBox");
    if (box != null) {
        box.remove();
    }
}

document.addEventListener("mousedown", (event) => {
    if (!hovering) {
        removeMsgBoxIfExist();
    }

    if (event.button != 2) return;
    mouseX = event.clientX;
    mouseY = event.clientY;
    topPos = document.documentElement.scrollTop;
});


document.addEventListener("scroll", () => {
    if (!hovering) {
        removeMsgBoxIfExist();
    }
});



chrome.runtime.onMessage.addListener((msg, sender, responder) => {

    if (msg.startsWith("alert")) {
        fetch("http://127.0.0.1:8080/tonetelling", {
            method:"POST",
            headers: {"Content-Type": 'application/json'},
            mode: 'cors',
            body: JSON.stringify(
                {
                    "input": msg.slice(5, msg.length)
                }
            )
        }).then((res)=>{
           return res.json();
        }).then((data)=>{
            print(data)
        })
        insertMsgBoxAtPos(document, mouseX, mouseY, topPos, msg.slice(5, msg.length), "happy");
    }
});



