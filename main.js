import "./style.scss";

const BODY = document.querySelector("body");
const MENU_BTN = document.querySelector(".header__menu-btn");
const NAV = document.querySelector(".header_nav");
const MENU_BTN_IMG = document.querySelector(".header__menu-btn-img");

import Swiper from "swiper";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

if (MENU_BTN) {
  MENU_BTN.addEventListener("click", () => {
    BODY.classList.toggle("page__body--lock");
    NAV.classList.toggle("header_nav--open");
    MENU_BTN_IMG.classList.toggle("header__menu-btn-img--open");
  });
}

window.addEventListener("resize", () => {
  BODY.classList.remove("page__body--lock");
  NAV.classList.remove("header_nav--open");
  MENU_BTN_IMG.classList.remove("header__menu-btn-img--open");
});

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination, EffectCoverflow],
  direction: "horizontal",
  loop: true,
  speed: 1000,
  initialSlide: 2,

  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",

  effect: "coverflow",
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
