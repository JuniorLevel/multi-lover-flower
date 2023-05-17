import Swiper, { Navigation } from "swiper";

const swiper = new Swiper(".swiper", {
  // Default parameters
  modules: [Navigation],
  //   autoplay: {
  //     delay: 300,
  //   },
  slidesPerView: 1,
  direction: "vertical",
  spaceBetween: 0,
  autoHeight: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //breakpoints
  breakpoints: {
    1075: {
      direction: "horizontal",
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

export default swiper;
