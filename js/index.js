// document.addEventListener("DOMContentLoaded", function() {
//     const slides = document.querySelector(".slides");
//     const sliderWidth = document.querySelector(".slider").offsetWidth;
//     let slideIndex = 0;
  
//     function slideNext() {
//       if (slideIndex < slides.children.length - 1) {
//         slideIndex++;
//       } else {
//         slideIndex = 0;
//       }
//       slides.style.transform = `translateX(-${slideIndex * sliderWidth}px)`;
//     }
  
//     function slidePrev() {
//       if (slideIndex > 0) {
//         slideIndex--;
//       } else {
//         slideIndex = slides.children.length - 1;
//       }
//       slides.style.transform = `translateX(-${slideIndex * sliderWidth}px)`;
//     }
  
//     // Optional: Add event listeners for navigation buttons
//     document.querySelector("#prevBtn").addEventListener("click", slidePrev);
//     document.querySelector("#nextBtn").addEventListener("click", slideNext);
//   });
  

const triangleContainer = document.querySelector('.background-triangles');
const triangles = document.querySelectorAll('.triangle');

window.addEventListener('scroll', function() {
  // const scrollY = window.scrollY;
  triangles.forEach((triangle, index) => {
    const animationDelay = index * 100;
    anime({
      targets: triangle,
      translateY: scrollY * 0.1, // Adjust scroll multiplier for movement
      opacity: scrollY / 200 + 0.5, // Adjust opacity based on scroll
      easing: 'easeInOutSine', // Animation easing function
      duration: 1000, // Animation duration in milliseconds
      delay: animationDelay, // Delay for each triangle
    });
  });
});
