//Stack (Primitive) , Heap (Non-Primitive)

let myName = "SHT";
let anotherName = myName;
anotherName = "sft";

console.log(myName);
console.log(anotherName);

let userOne = {
  email: "sht@gmail.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "sft@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
