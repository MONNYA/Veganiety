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

// 문구 루프
window.onload = function () {
  const loopContainer = document.querySelector(".loop-container");
  const loopText = document.querySelector(".loop-text");
  const clone = loopText.cloneNode(true);
  loopContainer.appendChild(clone);
};

// 스토리 슬라이드
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".story-slides");
  const prevButton = document.querySelector(".prev2");
  const nextButton = document.querySelector(".next2");
  const slideCount = document.querySelectorAll(".slide2").length;
  let currentIndex = 0;

  function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slideCount - 1;
    }
    updateSlidePosition();
  });

  nextButton.addEventListener("click", function () {
    if (currentIndex < slideCount - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlidePosition();
  });
});

// 하단 푸터
function toggleBottomLine() {
  const bottomLineElement = document.querySelector(".bottom-line");
  bottomLineElement.classList.toggle("expanded");
}
