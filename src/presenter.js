import sumar from "./sumador.js";
import multiplicar from "./multiplicador.js";

const firstSum = document.querySelector("#primer-numero-sumar");
const secondSum = document.querySelector("#segundo-numero-sumar");
const formSum = document.querySelector("#sumar-form");
const resultDiv = document.querySelector("#resultado-div");

const firstMul = document.querySelector("#primer-numero-multiplicar");
const secondMul = document.querySelector("#segundo-numero-multiplicar");
const formMul = document.querySelector("#multiplicar-form");

formSum.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number.parseInt(firstSum.value);
  const secondNumber = Number.parseInt(secondSum.value);
  resultDiv.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

formMul.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number.parseInt(firstMul.value);
  const secondNumber = Number.parseInt(secondMul.value);
  resultDiv.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
