function multipleBY5(num) {
  return num * 5;
}

multipleBY5.power = 2;
console.log(multipleBY5(5));
console.log(multipleBY5.power);
console.log(multipleBY5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 24);
const tea = createUser("tea", 250);

chai.printMe();

let heros = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
Object.prototype.villen = function () {
  console.log("Hello");
};

// heroPower.villen();

heros.villen();

// Inheritance

const User = {
  name: "sft",
  email: "sft@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
