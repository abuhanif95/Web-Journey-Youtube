// for loop

for (let index = 0; index < 10; index++) {
  const element = index;
  if (element === 7) {
    console.log("7 is best number");
  }
  console.log(element);
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop: ${j} and i is ${i}`)
    console.log(i + "*" + j + "=" + i * j);
  }
}

let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// break and continue
for (let index = 1; index <= 10; index++) {
  if (index === 5) {
    console.log("5 is best number");
    break;
  }
  console.log(index);
}

for (let index = 1; index <= 10; index++) {
  if (index === 5) {
    continue;
  }
  console.log(index);
}
