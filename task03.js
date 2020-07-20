const btn = document.querySelector("button");
const xhr = new XMLHttpRequest();
const result = document.querySelector(".result");
const img = document.getElementById("urlImg");

btn.onclick = () => {
  const val = document.querySelector("input").value;
  if (typeof +val === "number" && !isNaN(+val)) {
    if (+val < 1 || +val > 10) {
      result.innerHTML = `<div class="result">число вне диапазона от 1 до 10</div>`;
    } else {
      let getUrl = "https://picsum.photos/v2/list?limit=" + val;
      xhr.open("GET", getUrl);

      xhr.onload = function () {
        if (xhr.status !== 200) {
          result.innerHTML = `Статус ответа сервера: ${xhr.status}`;
        } else {
          let imgSrc = JSON.parse(xhr.response)[+val - 1]["download_url"];
          let imgAlt = JSON.parse(xhr.response)[+val - 1]["author"];
          img.setAttribute("src", imgSrc);
          img.setAttribute("alt", imgAlt);
          img.setAttribute("width", "50%");
        }
      }

      xhr.onerror = function () {
        result.innerHTML = `Ошибка. Статус ответа: ${xhr.status}`;
      }

      xhr.send();
    }
  }
}