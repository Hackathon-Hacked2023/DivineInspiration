

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
    neutral: "neutral 😑"
}


let print = console.log;
let label = document.getElementById("toneLabel");

print("HELP ME")
document.getElementById('actionSubmit').onclick = () => {

    textField = document.getElementById("inputField");
    textContent = textField.value;
 
    fetch("https://tone-teller-ezen7qibyq-nn.a.run.app/tonetelling", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify(
            {
                "input": textContent
            }
        )
    }).then(
        (res) => res.json()
    ).then(
        (data) => {
            print(data)
            t = tones[data[0][0]['label']];
            if (t == undefined) {
                print("undefined!", data[0][0]['label'])
            }
            label.textContent = `The tone is: ${tones[data[0][0]['label']]}`;
            label.style.display = "block";
            document.getElementById("bottomGroup").style.justifyContent = "space-between";
        }
    )

}

document.getElementById("inputField").addEventListener('input', () => {
    print("changing")
    label.style.display = "none";
})