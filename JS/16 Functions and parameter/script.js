function sayMyName() {
  console.log("S");
  console.log("F");
  console.log("T");
}

sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2;
  // return result;
  return number1 + number2;
  console.log("This will not work");
}
// addTwoNumbers(2, 4);
// addTwoNumbers(2, "4");
// addTwoNumbers(2, 'a');
// addTwoNumbers(2, null);

const result = addTwoNumbers(2, 3);
console.log("Result: ", result);


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage('SFT Hanif'));
console.log(loginUserMessage());