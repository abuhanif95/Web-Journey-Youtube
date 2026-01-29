// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 7, 28);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024, 7, 28, 5, 3);
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2003-09-27");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());

newDate.toLocaleString("default", {
  weekday: "long",
});
