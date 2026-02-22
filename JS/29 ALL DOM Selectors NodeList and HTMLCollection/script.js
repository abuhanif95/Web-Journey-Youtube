const title = document.getElementById("title");
console.log(title);

const heading = document.getElementsByClassName("heading");
console.log(heading);

console.log(title.getAttribute("class"));
console.log(title.getAttribute("id"));
title.setAttribute("class", "test heading");
console.log(title);

title.style.backgroundColor = "green";
title.style.padding = "15px";
title.style.borderRadius = "5px";
title.style.color = "white";

console.log(title.textContent);
console.log(title.innerText);
console.log(title.innerHTML);

console.log(document.querySelectorAll("h2"));
console.log(document.querySelector(".heading"));
console.log(document.querySelector("#title"));
console.log(document.querySelector('input[type="text"]'));

const myul = document.querySelector("ul");
myul.querySelector("li").style.color = "red";
myul.querySelector("li").innerText = "Watermelon";

const listItem = document.getElementsByClassName("list-item");
// listItem.forEach(function (li) {
//   console.log(li);
// });

const li = Array.from(listItem);
li.forEach(function (li) {
  console.log(li);
});
