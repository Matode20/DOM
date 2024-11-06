const colorPickerInput = document.getElementById("color-picker-input");
const body = document.querySelector("body");

let color;

colorPickerInput.addEventListener("input", (e) => {
  console.log(e.target.value);

  color = e.target.value;
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    body.style.backgroundColor = color;
  }
});
const words = document.getElementById("word-count");
const WtextArea = document.getElementById("word-counter-textarea");
const countBtn = document.getElementById("start-count-btn");

console.log(words, WtextArea, countBtn);
WtextArea.value = "";

let wordsValue = 0;
let WtextAreaValue = "";

WtextArea.addEventListener("input", (e) => {
  console.log(e.target.value);
  WtextAreaValue = e.target.value;
});
countBtn.addEventListener("click", () => {
  wordsValue = WtextAreaValue.split(" ").length;
  words.textContent = `Word Count: ${wordsValue}`;
});
