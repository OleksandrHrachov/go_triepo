import "./style.scss";

import Swiper from "swiper";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination, EffectCoverflow],
  direction: "horizontal",
  loop: true,
  speed: 1000,
  initialSlide: 2,

  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    depth: 0,
    slideShadows: false,
    scale: 0.85,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});

swiper.init();

