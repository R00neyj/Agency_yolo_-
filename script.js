gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function loading__init() {
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
}

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
      end: "+=200%",
      scrub: 1,
      // markers: true,
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

function sec3Gsap__init() {
  const target = document.querySelectorAll(".section-3 .portfolio .port-item");

  function getWidth() {
    let innerWidth = window.innerWidth;
    let isMobile = innerWidth <= 768;

    return {
      activeWidth: isMobile ? innerWidth * 0.9 : "60rem",
      defaultWidth: isMobile ? innerWidth * 0.6 : "34rem",
    };
  }

  gsapActive();

  window.addEventListener("resize", () => {
    ScrollTrigger.getAll().forEach((el) => {
      if (el.trigger && el.trigger.classList.contains("port-item")) {
        el.kill();
      }
    });
    ScrollTrigger.refresh(true);
    gsapActive();
  });

  function gsapActive() {
    target.forEach((portCard) => {
      let tl = gsap.timeline();
      gsap.set(portCard, {
        width: () => getWidth().defaultWidth,
      });
      tl.to(
        portCard,
        {
          width: () => getWidth().activeWidth,
          ease: "none",
          duration: 0.3,
        },
        0
      ).to(
        portCard,
        {
          width: () => getWidth().defaultWidth,
          ease: "none",
          duration: 0.3,
        },
        0.9
      );

      let st = ScrollTrigger.create({
        trigger: portCard,
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1,
        animation: tl,
      });
    });
  }
}

// original source code from original site !!
function sec3GsapAlt__init() {
  const portItems = document.querySelectorAll(".section-3 .portfolio .port-item");
  function getResponsiveWidth() {
    const isMobile = window.innerWidth <= 768;

    return {
      DefaultWidth: isMobile ? window.innderWidth * 0.6 : "34rem",
      ActiveWidth: isMobile ? window.innerWidth * 0.9 : "60rem",
    };
  }
  function updateActiveBox() {
    const { DefaultWidth, ActiveWidth } = getResponsiveWidth();
    const centerY = window.innerHeight / 2;
    let minDistance = Infinity;
    let activeBox = null;

    portItems.forEach((box) => {
      const boxProperty = box.getBoundingClientRect();
      const boxCenter = boxProperty.y + boxProperty.height / 2;
      const distance = Math.abs(centerY - boxCenter);

      if (distance < minDistance) {
        minDistance = distance;
        activeBox = box;
      }
    });

    portItems.forEach((box) => {
      gsap.to(box, {
        width: box == activeBox ? ActiveWidth : DefaultWidth,
        duration: 0.3,
        ease: "none",
      });
    });
  }

  let windowWidth = window.innerWidth;
  const target = document.querySelector(".section-3 .portfolio");

  ScrollTrigger.create({
    trigger: target,
    start: "top center",
    markers: true,
    onEnter: () => {
      window.addEventListener("scroll", () => {
        requestAnimationFrame(updateActiveBox);
      });
      window.addEventListener("resize", () => {
        if (windowWidth == windowWidth) {
        } else {
          windowWidth = window.innerWidth;
          updateActiveBox();
        }
      });
      updateActiveBox();
    },
  });
}
// sec3GsapAlt__init();

function sec4Gasp__init() {
  const ScrollTarget = document.querySelector(".section-4");
  const aniTarget = ScrollTarget.querySelector(".item-box-2");

  let tl = gsap.timeline();
  tl.fromTo(aniTarget, { y: -150 }, { y: 150, ease: "none", duration: 10 });

  let st = ScrollTrigger.create({
    trigger: ScrollTarget,
    animation: tl,
    scrub: 3,
  });
}

function marqueeWidth() {
  const marquee = document.querySelector(".marquee-container");
  const marqueeWrap = marquee.querySelector(".marquee-wrap");
  const marqueeSlide = marqueeWrap.querySelector(".marquee-slide");
  let width = marqueeSlide.getBoundingClientRect().width;

  const marqueeAni = [{ transform: `translateX(0)` }, { transform: `translateX(-${width}px)` }];
  let duration = 10000;
  const marqueeTiming = {
    duration: duration,
    iterations: Infinity,
    easing: "linear",
  };

  marqueeAnimationInstance = marqueeWrap.animate(marqueeAni, marqueeTiming);

  marqueeWrap.addEventListener("pointerenter", () => {
    marqueeAnimationInstance.playbackRate = 0.3;
    console.log("hi");
  });
  marqueeWrap.addEventListener("pointerleave", () => {
    marqueeAnimationInstance.playbackRate = 1;
    console.log("hi");
  });
}

function footerMenuSwap() {
  const footerMenuEl = document.querySelectorAll(".footer .overflow-box > span");

  footerMenuEl.forEach((el) => {
    let content = el.textContent;
    el.style.setProperty("--content", `"${content}"`);
  });
}

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1,
  effects: true,
});

window.addEventListener("load", () => {
  loading__init();

  setTimeout(() => {
    footerMenuSwap();
    marqueeWidth();
    sec4Gasp__init();
    sec2Gsap__init();
    sec3Gsap__init();
    mainSwiper__init();
  }, 5000);
});
