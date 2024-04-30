document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    const sliderWidth = document.querySelector(".slider").offsetWidth;
    let slideIndex = 0;
  
    function slideNext() {
      if (slideIndex < slides.children.length - 1) {
        slideIndex++;
      } else {
        slideIndex = 0;
      }
      slides.style.transform = `translateX(-${slideIndex * sliderWidth}px)`;
    }
  
    function slidePrev() {
      if (slideIndex > 0) {
        slideIndex--;
      } else {
        slideIndex = slides.children.length - 1;
      }
      slides.style.transform = `translateX(-${slideIndex * sliderWidth}px)`;
    }
  
    // Optional: Add event listeners for navigation buttons
    document.querySelector("#prevBtn").addEventListener("click", slidePrev);
    document.querySelector("#nextBtn").addEventListener("click", slideNext);
  });
  