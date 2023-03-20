const calcButton = document.querySelector(".calc");
const oneInput = document.querySelector(".one-input");
const twoInput = document.querySelector(".two-input");
const percent = document.querySelector(".percent");
const result = document.querySelector(".result");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dded2dedaamsh1d3e249ad8143a1p16c7c5jsn4522a91347b3",
    "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
  },
};

const fetchFunc = (one, two) => {
  fetch(
    `https://love-calculator.p.rapidapi.com/getPercentage?sname=${one}&fname=${two}'`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      percent.textContent = "Percent: " + response.percentage;
      result.textContent = "Result: " + response.result;
    })
    .catch((err) => console.error(err));
};

calcButton.addEventListener("click", (event) => {
  personOne = oneInput.value;
  personTwo = twoInput.value;
  console.log(personOne, personTwo);
  fetchFunc(personOne, personTwo);
});
