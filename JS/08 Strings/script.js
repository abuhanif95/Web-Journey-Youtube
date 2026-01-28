const name = "Tonu";
const repoCount = 50;

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Sabiha Hanif Tonika");
console.log(gameName);

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-1, 4);
console.log(anotherString);

const newStringOne = "   SHT   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.google.com";
console.log(url.replace("google", "sft"));

console.log(url.includes("tonu"));
console.log(gameName.split(" "));
