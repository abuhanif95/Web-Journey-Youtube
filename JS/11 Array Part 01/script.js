// Array

const myArr = [0, 1, 2, 3, 4, 5];
const myFav = ["Sabiha", "Hanif", "Tonika"];

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr[0]);
console.log(myArr[3]);

// Array methods

myArr.push(6);
console.log(myArr);
myArr.pop(6);
console.log(myArr);

myArr.unshift(-1);
console.log(myArr);
myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);

console.log(typeof myArr);
console.log(typeof newArr);

// slice, splice
console.log("A : ", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B : ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C : ", myArr);
