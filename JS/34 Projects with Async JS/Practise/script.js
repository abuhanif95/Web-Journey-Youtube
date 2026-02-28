// const changeText = function () {
//   document.querySelector("h1").innerHTML = "JavaScript";
// };

// const changeMe = setTimeout(changeText, 2000);

// document.querySelector("#stop").addEventListener("click", function () {
//   clearTimeout(changeMe);
//   console.log("Stopped");
// });
let intervalId;

const sayDate = function (str) {
  console.log(str, Date.now());
};

document.querySelector("#start").addEventListener("click", function () {
  if (!intervalId) {
    intervalId = setInterval(sayDate, 1000, "Hello");
  }
});

document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
});
