const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children);
console.log(parent.children[2].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}

parent.children[2].style.color = "red";
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const Day = document.querySelector(".day");
console.log(Day);
console.log(Day.parentElement);
console.log(Day.nextElementSibling);
console.log(Day.nextSibling);

console.log("NODES: ", parent.childNodes);

const div = document.createElement("div");
console.log(div);
div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);

div.setAttribute("title", "generated title");
div.style.backgroundColor = "green";
div.style.padding = "12px";
// div.innerText = "Create Element"
const addText = document.createTextNode("Hello world");
div.appendChild(addText);

document.body.appendChild(div);