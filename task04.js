const submitBtn = document.querySelector("button");
const img = document.getElementById("urlImg");

submitBtn.addEventListener("click", () => {
  let firstNum = document.getElementById("firstNum").value;
  let secondNum = document.getElementById("secondNum").value;
  if (typeof +firstNum && typeof +secondNum === "number" && !isNaN(+firstNum) && !isNaN(+secondNum)) {
    if (+firstNum >= 150 && +firstNum <= 300 && +secondNum >= 150 && +secondNum <= 300) {
      let fetchUrl = `https://picsum.photos/${firstNum}/${secondNum}`;
      fetch(fetchUrl)
        .then((response) => {
          return response;})
        .then((data) => {
          img.setAttribute("src", data.url);
        })
    } else {
      console.log("одно из чисел вне диапазона от 100 до 300");
    }
  } else {
    console.log("одно из чисел вне диапазона от 100 до 300");
  }
})