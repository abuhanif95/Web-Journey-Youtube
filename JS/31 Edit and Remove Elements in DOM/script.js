function addLanguage(language) {
  const li = document.createElement("li");
  li.innerHTML = `${language}`;
  document.querySelector(".language").appendChild(li);
}

addLanguage("C");
addLanguage("C++");

function addOptimizeLanguage(language) {
  const li = document.createElement("li");
  li.append(document.createTextNode(language));
  document.querySelector(".language").appendChild(li);
}

addOptimizeLanguage("Python");

const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>Java</li>";

const secondLang = document.querySelector("li:nth-child(2)");
// secondLang.innerHTML = 'TypeScript';
const newList = document.createElement("li");
newList.textContent = "TypeScript";
secondLang.replaceWith(newList);

const lastLang = document.querySelector("li:last-child");
lastLang.remove();
