//==============================================================================================================================
//VARIABLES GENERALES
const html = document.querySelector("html");
const body = document.querySelector("body");
const header = document.querySelector("header");


const swiper = new Swiper(".swiper_cards_homepage", {
  slidesPerView: "auto", // S'adapte à la taille des slides définie par CSS
  spaceBetween: 16, // espace entre les slides
  //evolution du padding en fonction de largeur d'écran  0 (16px) 768 (32px) 1024 (64px) 1280 (120px)
  slidesOffsetBefore:16,
  slidesOffsetAfter:16,//ne change pas
  grabCursor: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  breakpoints: {
    768:{
      spaceBetween: 32,
      slidesOffsetBefore:32,
      slidesOffsetAfter:16,
    },
    1024: {
      spaceBetween: 32,
      slidesOffsetBefore:64,
      slidesOffsetAfter:16,
    },
  },
});
