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
    1280: {
      spaceBetween: 32,
      slidesOffsetBefore:120,
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






// Ajout d'un gestionnaire d'événements pour le clic sur le swiper
const swiperContainer = document.querySelector('.swiper_centre_1');

swiperContainer.addEventListener('click', () => {
    // Obtenez l'index de la diapositive active
    const activeIndex = swiper_centre_1.activeIndex;
    console.log('Diapositive active au clic : ', activeIndex);

    // Vous pouvez également accéder à l'élément DOM de la diapositive active
    const activeSlide = swiper_centre_1.slides[activeIndex];
    console.log('Élément DOM de la diapositive active : ', activeSlide);
    console.log(getComputedStyle(activeSlide).backgroundImage);
});

