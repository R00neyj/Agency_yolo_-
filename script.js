const loadingPage = document.querySelector(".loading-page");
const loadingImg = loadingPage.querySelector("#loading-image");
let loadingImgArr = [
  "image/loading_screen/intro_img01.png",
  "image/loading_screen/intro_img02.png",
  "image/loading_screen/intro_img03.png",
  "image/loading_screen/intro_img04.png",
  "image/loading_screen/intro_img05.png",
  "image/loading_screen/intro_img06.png",
  "image/loading_screen/intro_img07.png",
  "image/loading_screen/intro_img08.png",
  "image/loading_screen/intro_img09.png",
  "image/loading_screen/intro_img10.png",
  "image/loading_screen/intro_img11.png",
  "image/loading_screen/intro_img12.png",
  "image/loading_screen/intro_img13.png",
  "image/loading_screen/intro_img14.png",
  "image/loading_screen/intro_img15.png",
  "image/loading_screen/intro_img16.png",
];
let imgArrLength = loadingImgArr.length;
for (let i = 0; i < imgArrLength; i++) {
  setTimeout(() => {
    loadingImg.src = loadingImgArr[i];
  }, i * 300);
}

const percentage = loadingPage.querySelector(".percentage--number");
percentage.textContent = "0";

for (let i = 0; i <= 100; i++) {
  setTimeout(() => {
    percentage.textContent = i;
  }, i * 45);
}

setTimeout(() => {
  loadingPage.classList.remove("active");
}, 5000);
