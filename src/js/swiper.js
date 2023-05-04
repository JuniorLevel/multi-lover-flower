import Swiper, { Navigation } from "swiper";

const swiper = new Swiper(".swiper", {
  // Default parameters
  modules: [Navigation],
  autoplay: {
    delay: 300,
  },
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

export default swiper;
