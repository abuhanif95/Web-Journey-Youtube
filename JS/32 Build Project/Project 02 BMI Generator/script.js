const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");
  const result = document.querySelector("#results");

  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  result.innerHTML = "";

  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = `Invalid Height`;
    heightInput.style.borderColor = "red";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Invalid Weight`;
    weightInput.style.borderColor = "red";
    heightInput.style.borderColor = "gray";
  } else {
    weightInput.style.borderColor = "gray";
    heightInput.style.borderColor = "gray";

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let category = "";
    let color = "";

    if (bmi < 18.6) {
      category = "Underweight";
      color = "yellow";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = "Normal";
      color = "green";
    } else {
      category = "Overweight";
      color = "red";
    }

    result.innerHTML = `
      <div style="text-align: center;">
        <div style="font-size: 2rem; margin-bottom: 5px;">${bmi}</div>
        <div style="font-size: 1.2rem; color: ${color};">${category}</div>
      </div>
    `;
    result.classList.add("has-value");
  }
});
