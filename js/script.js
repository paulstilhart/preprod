//==============================================================================================================================
//VARIABLES GENERALES
const html = document.querySelector("html");
const body = document.querySelector("body");
const header = document.querySelector("header");


const swiper_thematiques = new Swiper(".swiper_thematiques", {
  slidesPerView: "auto", // S'adapte à la taille des slides définie par CSS
  spaceBetween: 16, // espace entre les slides
  slidesOffsetBefore:16,
  slidesOffsetAfter:16,//ne change pas
  grabCursor: false,
  /*  
  pagination: {
    el: ".swiper_pagination",
    clickable: true,
  },
  */
  //<!--<div class="swiper_pagination"></div>-->
  navigation: {
    nextEl: ".swiper_thematiques_next",
    prevEl: ".swiper_thematiques_prev",
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

function swiper_centre(containerClass, nextButtonClass, prevButtonClass = {}) {
  return new Swiper(containerClass, {
      effect: "coverflow",
      slidesPerView: "auto",
      grabCursor: true,
      centeredSlides: true,
      spaceBetween: 24,
      loop: true,
      coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
      },
      navigation: {
          nextEl: nextButtonClass,
          prevEl: prevButtonClass,
      },
      breakpoints: {
          768: {
              spaceBetween: 32,
          },
      },
  });
};

// Initialisation des Swipers
const swiper_centre_1 = swiper_centre(".swiper_centre_1", ".swiper_centre_1_next", ".swiper_centre_1_prev");
const swiper_centre_2 = swiper_centre(".swiper_centre_2", ".swiper_centre_2_next", ".swiper_centre_2_prev");
const swiper_centre_3 = swiper_centre(".swiper_centre_3", ".swiper_centre_3_next", ".swiper_centre_3_prev");