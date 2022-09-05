let DisplayBox = document.querySelector(".display");

function showDisplay() {
    const x = event.target.innerText;
    if (DisplayBox.innerText == 0) {
        return DisplayBox.innerHTML = x;
    }
    return DisplayBox.innerHTML += x;
}
let list = document.querySelectorAll(".show-display");
list.forEach(item => {
    item.addEventListener("click", showDisplay);
});

function calculate() {
    let result = DisplayBox.innerText;
    DisplayBox.innerText = eval(result)
}
document.querySelector(".calculate").addEventListener("click", calculate);

function allClear() {
    DisplayBox.innerText = 0;
}
document.querySelector(".all-clear").addEventListener("click", allClear);

function clear() {
    let text = DisplayBox.innerText;
    if (text.length === 1) {
        DisplayBox.innerText = 0;
    } else {
        DisplayBox.innerText = text.substring(0, text.length - 1)
    }
}
document.querySelector(".clear-last").addEventListener("click", clear);