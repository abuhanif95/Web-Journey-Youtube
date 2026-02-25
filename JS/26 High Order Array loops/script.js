const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

const greeting = "Hello world!";
for (const greet of greeting) {
  //   console.log(`each char is ${greet}`);
}

// Maps
const map = new Map();
map.set("BN", "Bangladesh");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("BN", "Bangladesh");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":", value);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

for (const key in myObject) {
  //   console.log(key);
  //   console.log(myObject[key]);
}

const coding = ["js", "ruby", "java", "python", "cpp"];
// coding.forEach(function (item) {
//   console.log(item);
// });

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);
