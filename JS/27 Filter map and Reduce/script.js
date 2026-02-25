// const coding = ["js", "ruby", "java", "python", "cpp"];
// const values = coding.forEach(function (item) {
//   console.log(item);
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => num > 4);

// const newNums = myNums.filter((num) => {
//   return num % 2 == 0;
// });

// const newNums = [];
// myNums.forEach((num) =>{
//     if(num > 3){
//         newNums.push(num);
//     }
// })

// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2015 }, // Assuming edition year
];

let userBooks = books.filter((book) => book.genre == "History");
userBooks = books.filter((book) => {
  return book.publish >= 1995 && book.genre == "History";
});
console.log(userBooks);

// const newNums = myNums.map((num) => {
//   return num + 10;
// });

const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 50);
console.log(newNums);

const nums = [1, 2, 3];
const myTotal = nums.reduce(function (acc, curr) {
  console.log(`${acc} and crr: ${curr}`);
  return acc + curr;
}, 0);
console.log(myTotal);

const total = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(total);

const shoppingCart = [
  {
    itemName: "Shirt",
    price: 350,
  },
  {
    itemName: "T-Shirt",
    price: 550,
  },
  {
    itemName: "Shoes",
    price: 1250,
  },
  {
    itemName: "Pants",
    price: 850,
  },
];

const pricePay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(pricePay);
