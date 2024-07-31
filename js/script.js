// 상단 돋보기
function toggleExpand() {
  const lineElement = document.querySelector(".line");
  lineElement.classList.toggle("expanded");
}

// 슬라이드
document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const slides = document.querySelector(".slides");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;
  const totalSlides = document.querySelectorAll(".slide").length;

  function goToSlide(index) {
    if (index >= totalSlides) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide = index;
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
  }

  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  }

  // Automatic slide transition every 5 seconds
  function startSlideShow() {
    setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5000); // Change slide every 5000 milliseconds (5 seconds)
  }

  // Initialize the slideshow
  startSlideShow();

  prevButton.addEventListener("click", () => {
    goToSlide(currentSlide - 1);
  });

  nextButton.addEventListener("click", () => {
    goToSlide(currentSlide + 1);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
    });
  });
});
