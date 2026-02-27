// document.getElementById("img-kyoto-gate").onclick = function () {
//   alert("img-kyoto-gate");
// };

// document.getElementById("img-kyoto-gate").addEventListener(
//   "click",
//   function (event) {
//     console.log(event);
//   },
//   false,
// );

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode

// document.getElementById("images").addEventListener(
//   "click",
//   function (event) {
//     console.log("Clicked inside the ul");
//   },
//   false,
// );

// document.getElementById("img-kyoto-gate").addEventListener(
//   "click",
//   function (event) {
//     console.log("image clicked");
//     event.stopPropagation();
//   },
//   false,
// );

document.getElementById("google").addEventListener(
  "click",
  function (event) {
    console.log("clicked google");
    event.preventDefault();
    event.stopPropagation();
  },
  false,
);

document.querySelector("#images").addEventListener("click", function (event) {
  //   console.log(event.target.parentNode.parentNode);
  let remove = event.target.parentNode.parentNode;
  remove.remove();
});
