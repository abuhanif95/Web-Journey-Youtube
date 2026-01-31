function one() {
  const username = "sft";

  function two() {
    const website = "linkedin";
    console.log(username);
  }
  // console.log(website);

  two();
}

one();

if (true) {
  const username = "sht";
  if (username === "sht") {
    const website = " instagram";
    console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ====> Interesting <=====
console.log(addone(5));
function addone(num) {
  return num + 1;
}

// addTwo(5);
const addTwo = function (num) {
  return num + 2;
};


