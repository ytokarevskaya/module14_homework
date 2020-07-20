const btn = document.querySelector("button");
const imgGallery = document.querySelector(".img-gallery");
const textError = document.querySelector(".text-error");

function oneToTen(num) {
  if (typeof +num === "number" && !isNaN(+num)) {
    return +num >= 1 && +num <= 10;
  } else {
    return false;
  }
}

btn.addEventListener("click", () => {
  const firstNum = document.getElementById("firstNum").value;
  const secondNum = document.getElementById("secondNum").value;

  if (oneToTen(firstNum) && oneToTen(secondNum)) {
    let myUrl = `https://picsum.photos/v2/list?page=${firstNum}&limit=${secondNum}`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", myUrl);
    xhr.onload = function () {
      let obj = JSON.parse(xhr.response);
      let images = ``;
      localStorage.clear();
      for (let img of obj) {
        images += `<img src="${img.download_url}" alt="Pic from WWW" width="30%" style="margin: 10px;"><br>`;
      }
      localStorage.setItem("imgGallery", images);
      imgGallery.innerHTML = images;
    }
    xhr.send();
  } else if (!oneToTen(firstNum) && oneToTen(secondNum)) {
    textError.innerHTML = `<p>Номер страницы вне диапазона от 1 до 10</p>`;
  } else if (oneToTen(firstNum) && !oneToTen(secondNum)) {
    textError.innerHTML = `<p>Лимит вне диапазона от 1 до 10</p>`;
  } else {
    textError.innerHTML = `<p>Номер страницы и лимит вне диапазона от 1 до 10</p>`;
  }
})

function pageReady() {
  if (localStorage.getItem("imgGallery")) {
    imgGallery.innerHTML = localStorage.getItem("imgGallery");
  }
}

document.addEventListener("DOMContentLoaded", pageReady);