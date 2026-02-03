// Immediately Invoked Function Expressions IIFE
(function sft() {
    //named IIFE
  console.log("DB connected");
})();

((name) => {
  console.log("DB connected 2", name);
})("sft");
