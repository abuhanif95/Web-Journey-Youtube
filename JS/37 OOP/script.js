const user = {
  name: "sft",
  loginCount: 4,
  isLoggedIn: true,
  getUserDetails: function () {
    console.log("Got user details from database");
    console.log(`Name: ${this.name}`);
    console.log(this);
  },
};

console.log(user.name);
console.log(user.getUserDetails());
console.log(this);

// const promiseOne = new Promise();
// const date = new Date();

function User(name, loginCount, isLoggedIn) {
  this.name = name;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function () {
    console.log(`Hello ${this.name}`);
  };

  //   return this;
}

const userOne = new User("sht", 5, true);
const userTwo = new User("chai", 12, false);
console.log(userOne.constructor);
console.log(userTwo);
