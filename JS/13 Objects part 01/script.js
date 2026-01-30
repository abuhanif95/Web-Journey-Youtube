// Object literals
const mySym = Symbol("key1");

const JsUser = {
  name: "Tonu",
  "full name": "sft hanif",
  age: 18,
  [mySym]: "mykey1",
  location: "Chittagong",
  email: "sft@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "saturday"],
};

console.log(JsUser.name);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "sfthanif@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "sth@gmail.com";
console.log(JsUser);

JsUser.greetings = function () {
  console.log("Hello js user");
};

JsUser.greetingsTwo = function () {
  console.log(`Hello ${this.name}`);
};

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());
