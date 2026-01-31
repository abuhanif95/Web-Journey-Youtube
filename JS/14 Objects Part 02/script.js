// const tinderUser = new Object()  //single turn object
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "sft";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "abc@gmail.com",
  fullName: {
    userFullname: {
      firstName: "sft",
      last: "hanif",
    },
  },
};

console.log(regularUser.fullName.userFullname.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id : 1,
        email : 'sf@gamil.com',
    },
    
    {
        id : 2,
        email : 'sft@gamil.com',
    },
    
    {
        id : 3,
        email : 'sh@gamil.com',
    }
    
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));