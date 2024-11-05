const titleElement = document.getElementById("page-title");
titleElement.style.color = "blue";
const famContacts = document.getElementsByClassName("family");
console.log(famContacts[0]);
const allContacts = document.getElementsByTagName("p");
console.log(allContacts);
const firstWorkContact = document.querySelector(`.work`);
console.log(firstWorkContact);
const secondBtn = document.querySelector(`div button:nth-child(2)`);
console.log(secondBtn);
const allButtons = document.querySelectorAll(`button`);
console.log(allButtons);
const array = document.getElementById("topic");
topic.innerHTML = "<p>This is a <b>new</b> day.</p>";
console.log(array);
const paragraph = document.querySelector("p");

console.log("innerText: ", paragraph.innerText);
console.log("textContent: ", paragraph.textContent);
const text_content = document.getElementById("textContent");
const inner_text = document.getElementById("inner-text");
let address = `
  ABC Street,
  Spintex Road,
  Accra,
  Ghana.
`;
text_content.textContent = address;
inner_text.innerText = address;
console.log(text_content, inner_text);

const header = document.querySelector("h1");
// header.style.color ="red"
// header.style.alignContent ="center"
// header.style.padding ="2rem"
// header.style.backgroundColor ="yellow"
// header.style.textTransform = "uppercase"

console.log(header.className);
header.style.color = "blue";
header.className = "title";

const jollof = document.getElementById("favourite");
jollof.classList.add("naija", "fav");
jollof.classList.remove("fav");
jollof.classList.replace("naija", "yankee");
console.log(jollof.classList);

const italisized = document.getElementById("italics");
console.log(italisized.parentNode);
console.log(italisized.parentNode.parentNode);

const container = document.getElementById("container");
const containerChildNodes = container.childNodes;
const containerChildren = container.children;
console.log(container);
console.log(containerChildNodes);
console.log(containerChildren);
const btn = document.getElementById("myButton");
console.log(btn);
myButton.addEventListener("click", ()=> {
  alert("Button clicked")
});
