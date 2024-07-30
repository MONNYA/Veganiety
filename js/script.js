window.addEventListener("load", function () {
  // Logo Swiper
  const swHeaderLogo = new Swiper(".sw-logo", {
    effect: "fade",
    speed: 500,
    autoplay: {
      delay: 300,
      disableOnInteraction: false,
    },
  });
  // 마우스오버가 되면 play 하기
  const swLogoTag = document.querySelector(".sw-logo");
  swLogoTag.addEventListener("mouseover", function () {
    //   console.log("마우스오버했지롱");
    swHeaderLogo.autoplay.start();
  });
  swLogoTag.addEventListener("mouseout", function () {
    //   console.log("마우스 아웃");
    swHeaderLogo.autoplay.stop();
    //첫 번째 슬라이드로 강제로 이동시킨다
    swHeaderLogo.slideTo(0);
  });
  //처음에는 멈춰둔다
  swHeaderLogo.autoplay.stop();
});
