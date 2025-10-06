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

let loadingTime = imgArrLength * 300;

const percentage = loadingPage.querySelector(".percentage--number");
percentage.textContent = "0";

for (let i = 0; i <= 100; i++) {
  setTimeout(() => {
    percentage.textContent = i;
  }, i * 45);
}

setTimeout(() => {
  loadingPage.classList.remove("active");
}, loadingTime);

const sec1SwiperEl = document.querySelector(".section-1 .swiper-container");

setTimeout(() => {
  const sec1Swiper = new Swiper(sec1SwiperEl, {
    loop: true,
    effect: "fade",
    loopedSlides: 1,
    speed: "600",
    autoplay: {
      delay: 6000,
      disableOnInteraction: true,
    },
  });
}, loadingTime);

// ⭐ 1. YouTube IFrame API 스크립트를 비동기적으로 로드합니다. (최상단에 한 번만 실행)
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 플레이어 상태 변화 시 실행되는 함수 (이벤트 리스너 역할)
function onPlayerStateChange(event) {
  // YT.PlayerState.ENDED 는 비디오가 끝났을 때의 상태 코드(0)입니다.
  if (event.data === YT.PlayerState.ENDED) {
    // 영상이 끝났다면:

    // 1. 영상 시작점으로 이동 (seekTo)
    // 첫 번째 인자: 초 단위, 두 번째 인자: 버퍼링 여부 (true=버퍼링X)
    event.target.seekTo(0, true);

    // 2. 다시 재생 명령
    event.target.playVideo();

    console.log("영상 종료 감지! 자동 재생 재시작.");
  }
}
