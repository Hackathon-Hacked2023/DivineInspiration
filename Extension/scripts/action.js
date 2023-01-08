

let tones = {
    happy: "Happy 🙂",
    sad: "sad 😦",
    sandich: "sandich🥪"
}
let print = console.log;
let label = document.getElementById("toneLabel");

print("HELP ME")
document.getElementById('actionSubmit').onclick = () => {
    print("asdasda")
    // get results from server
    label.textContent = `The tone is: ${tones['happy']}`;
    label.style.display = "block";
}

document.getElementById("inputField").addEventListener('input', () => {
    print("changing")
    label.style.display = "none";
})