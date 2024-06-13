// JavaScript
var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector("#result");
var category = document.querySelector("#category");
var BMI, height, weight;

calculateButton.addEventListener("click", () => {
  height = parseFloat(heightInput.value);
  weight = parseFloat(weightInput.value);
  BMI = weight / (height ** 2);

  if (BMI < 18.5) {
    category.innerText = "Underweight";
  } else if (BMI < 25) {
    category.innerText = "Normal weight";
  } else if (BMI < 30) {
    category.innerText = "Overweight";
  } else {
    category.innerText = "Obese";
  }

  result.innerText = BMI.toFixed(2);
});