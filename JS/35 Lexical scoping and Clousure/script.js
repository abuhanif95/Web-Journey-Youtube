function init() {
  let name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = init();
myFunc();

function outer() {
  let username = "sft";
  function inner() {
    let secret = "my123";
    console.log("Inner:", username);
  }

  function innerTwo() {
    console.log("Inner Two: ", username);
    // console.log(secret);
  }

  inner();
  innerTwo();
}
outer();
// console.log("Outer:", username);

document.getElementById("orange").onclick = function () {
  document.body.style.backgroundColor = "orange";
};

document.getElementById("green").onclick = function () {
  document.body.style.backgroundColor = "green";
};

function clickHandler(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}

document.getElementById("orange").onclick = clickHandler("orange");
document.getElementById("green").onclick = clickHandler("green");
