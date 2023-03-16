const calcButton = document.querySelector(".calc");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dded2dedaamsh1d3e249ad8143a1p16c7c5jsn4522a91347b3",
    "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
  },
};

fetch(
  "https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John'",
  options
).then((res) => console.log(res));

calcButton.addEventListener("click", (event) => {
  console.log("click");
});
