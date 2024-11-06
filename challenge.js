const giftbox = document.getElementById("gift-box");
const clickbtn = document.getElementById("click-btn");

console.log(giftbox);
console.log(clickbtn);

clickbtn.addEventListener("click", () => {
  console.log("clicked");
  giftbox.style.display = "block";
  giftbox.className = "";
  giftbox.classList.toggle("hide");
});

document.addEventListener("keydown", (e) => {
  console.log(e.ctrlKey, e.key);
  if (e.key === "y" && e.ctrlKey) {
    giftbox.classList.toggle("hide");
  }
});
