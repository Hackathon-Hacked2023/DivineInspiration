
let mouseX = 0;
let mouseY = 0; // global vars for current mouse position
let topPos = 0;
let hovering = false;


const print = console.log
console.log("loading context menu receiver")


let tones = {
    curiosity: "curiosity 🤔",
    joy: "Happy 🙂",
    love: "love 😍",
    admiration: "admiration 🏆",
    approval: "approval 👍",
    caring: "caring 💝",
    exitement: "exitement 😃",
    amusement: "amusement 😄",
    gratitude: "gratitude ❓",
    desire: "desire ❓",
    anger: "anger 😠",
    optimism: "optimism ❓",
    disapproval: "disapproval 👎",
    grief: "grief 😢",
    annoyance: "annoyance 😩",
    pride: "pride 😏",
    disgust: "disgust 🤮",
    disappointment: "disappointment 😬",
    realization: "realization ?",
    fear: "fear 😨",
    relief: "relief ?",
    confusion: "confusion 🤔",
    remorse: "remose ?",
    embarrassment: "embarrassment 😳",
    surprise: "surprise 😮",
    sadness: "sadness 😭",
    nervousness: "nervousness 😖",
    neutral:"neutral 😑"
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
        width: 20%;
        background: #FDF9F0;
        border-radius: 4px;
        border: 2px solid #E9C46A;
        position: absolute;
        left: ${x + "px"};
        top: ${(y + top) + "px"};
        z-index: 999;
    `; // style the root div here

    t = tones[tone];
    if (t == undefined) {
        print("undefined!", tone);
    }
    // do rest of the styling in inner html
    box.innerHTML = `
    <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cantarell&family=Roboto&display=swap" rel="stylesheet">
    <style>
        #ToneMessageBox > p {
            font-family: 'Cantarell', sans-serif;
            margin: 10px 10px 10px 10px;
            font-size: 1rem;
            line-height: 1.25rem;
        }
    </style>
    <p>${message}</p>
    <p>The overall tone is: ${t}</p>
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
        fetch("https://tone-teller-ezen7qibyq-nn.a.run.app/tonetelling", {
            method: "POST",
            headers: { "Content-Type": 'application/json' },
            mode: 'cors',
            body: JSON.stringify(
                {
                    "input": msg.slice(5, msg.length)
                }
            )
        }).then((res) => {
            return res.json();
        }).then((data) => {
            data = data[0];
            insertMsgBoxAtPos(document, mouseX, mouseY, topPos, msg.slice(5, msg.length), data[0]['label']);
        })

    }
});



