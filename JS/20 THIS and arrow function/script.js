const user = {
  username: "sft",
  price: 99,

  welcomeMessage: function () {
    console.log(`${this.username} welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sht";
// user.welcomeMessage();

// console.log(this);

// function sft() {
//   let username = "sft";
//   console.log(this.username);
// }

// sft();

// ===>> Arrow Function <<===
const sft = () => {
  let username = "sft";
  console.log(this.username);
};

sft();

/*
const addTwo = (num1, num2) => {
  return num1 + num2;
};
*/
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(3, 4));

const obj = () => ({ name: "sft" });
console.log(obj());

const myArray = [2, 5, 3, 7, 8];
myArray.forEach(() => {
  console.log(myArray);
});
