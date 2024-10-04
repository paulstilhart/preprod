//==============================================================================================================================
//VARIABLES GENERALES
const html = document.querySelector("html");
const body = document.querySelector("body");
const header = document.querySelector("header");



const swiper_thematiques = new Swiper(".swiper_thematiques", {
  slidesPerView: "auto", // S'adapte à la taille des slides définie par CSS
  spaceBetween: 16, // espace entre les slides
  slidesOffsetBefore: 16,
  slidesOffsetAfter: 16, //ne change pas
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
    768: {
      spaceBetween: 32,
      slidesOffsetBefore: 32,
      slidesOffsetAfter: 16,
    },
    1280: {
      spaceBetween: 32,
      slidesOffsetBefore: 120,
      slidesOffsetAfter: 16,
    },
  },
});

function swiper_centre(
  containerClass,
  nextButtonClass,
  prevButtonClass,
  swiperLegend = {}
) {
  return new Swiper(containerClass, {
    effect: "coverflow",
    slidesPerView: "auto",
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 24,
    loop: false,
    //slideToClickedSlide:true,
    preventClicks: true,
    preventClicksPropagation: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
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

    on: {
      init: function () {
        legendImage(this.slides, this.realIndex, swiperLegend);
      },
      realIndexChange: function () {
        legendImage(this.slides, this.realIndex, swiperLegend);
      },
      click: function () {
        popInImage(this.slides, this.activeIndex);
      },
    },
  });
}

function legendImage(slides, realIndex, swiperLegend) {
  legendText = document.querySelector(swiperLegend);
  const imageLegend = slides[realIndex].getAttribute("data-legend");
  legendText.textContent = imageLegend;
}

function popInImage(slides, activeIndex) {
  swiper_popin = document.querySelector(".swiper_popin");
  swiper_popin_img = document.querySelector(".swiper_popin>img");
  const image = slides[activeIndex].src;
  if (image && swiper_popin && swiper_popin_img) {
    body.setAttribute("aria-hidden", "true");
    swiper_popin.setAttribute("aria-hidden", "false");
    swiper_popin_img.src = image;
  } else {
    return;
  }
}

function closePopIn() {
  const swiper_popin_img_close = document.querySelector(".swiper_popin>button");
  if (swiper_popin_img_close) {
    swiper_popin_img_close.addEventListener("click", () => {
      body.setAttribute("aria-hidden", "false");
      swiper_popin.setAttribute("aria-hidden", "true");
    });
  }
}

closePopIn();

// Initialisation des Swipers
const swiper_centre_1 = swiper_centre(
  ".swiper_centre_1",
  ".swiper_centre_1_next",
  ".swiper_centre_1_prev",
  ".swiper_legend_1"
);
const swiper_centre_2 = swiper_centre(
  ".swiper_centre_2",
  ".swiper_centre_2_next",
  ".swiper_centre_2_prev",
  ".swiper_legend_2"
);
const swiper_centre_3 = swiper_centre(
  ".swiper_centre_3",
  ".swiper_centre_3_next",
  ".swiper_centre_3_prev",
  ".swiper_legend_3"
);






