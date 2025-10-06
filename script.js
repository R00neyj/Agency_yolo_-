gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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
  mainSwiper__init();
}, loadingTime);

function mainSwiper__init() {
  const sec1SwiperEl = document.querySelector(".section-1 .swiper-container");
  sec1Swiper = new Swiper(sec1SwiperEl, {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
  });
}

function sec2Gsap__init() {
  const pinWrap = document.querySelector("section.section-2");
  const spans = pinWrap.querySelectorAll("span.overlay");
  const texts = pinWrap.querySelectorAll("h2");

  timeline = gsap.timeline({
    scrollTrigger: {
      trigger: pinWrap,
      pin: true,
      start: "top top",
      end: "+=2000",
      scrub: 1,
      markers: true,
    },
  });

  timeline.fromTo(
    spans,
    {
      width: 0,
    },
    {
      width: "100%",
      duration: 1,
      stagger: 0.5, //다음 요소 애니메이션 대기시간
      ease: "none",
    }
  );
}
sec2Gsap__init();
