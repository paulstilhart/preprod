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
    loop: true,
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
      500: {
        spaceBetween: 32,
      },
      1024: {
        spaceBetween: 36,
      },
    },

    on: {
      init: function () {
        legendImage(this.slides, this.activeIndex, swiperLegend);
      },
      activeIndexChange: function () {
        legendImage(this.slides, this.activeIndex, swiperLegend);
      },
      click: function () {
        popInImage(this.slides, this.activeIndex);
      },
    },
  });
}

function legendImage(slides, activeIndex, swiperLegend) {
  legendText = document.querySelector(swiperLegend);
  const imageLegend = slides[activeIndex].getAttribute("data-legend");
  legendText.textContent = imageLegend;
}

function popInImage(slides, activeIndex) {
  js_popin_swiper = document.querySelector(".js_popin_swiper");
  js_popin_swiper_img = document.querySelector(".js_popin_swiper>img");
  const image = slides[activeIndex].src;
  if (image && js_popin_swiper && js_popin_swiper_img) {
    body.setAttribute("aria-hidden", "true");
    js_popin_swiper.setAttribute("aria-hidden", "false");
    js_popin_swiper_img.src = image;
  } else {
    return;
  }
}

function closePopInImage() {
  const js_popin_swiper_img_close = document.querySelector(
    ".js_popin_swiper>button"
  );
  if (js_popin_swiper_img_close) {
    js_popin_swiper_img_close.addEventListener("click", () => {
      body.setAttribute("aria-hidden", "false");
      js_popin_swiper.setAttribute("aria-hidden", "true");
    });
  }
}

closePopInImage();

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

const swiper_detail_colo = swiper_centre(
  ".swiper_detail_colo",
  ".swiper_detail_colo_next",
  ".swiper_detail_colo_prev",
  ".swiper_detail_colo_legend"
);

function popInHandler(popinBaseClass) {
  const popin = document.querySelector(`.${popinBaseClass}`);
  if (!popin) return;

  const triggers = document.querySelectorAll(`.${popinBaseClass}_trigger`);
  const popinClose = document.querySelectorAll(`.${popinBaseClass}_close`);
  const body = document.body;

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", function (event) {
      event.preventDefault(); // Prévenir le comportement par défaut
      body.setAttribute("aria-hidden", "true");
      popin.setAttribute("aria-hidden", "false");
    });
  });
  popinClose.forEach((close) => {
    close.addEventListener("click", function (event) {
      body.setAttribute("aria-hidden", "false");
      popin.setAttribute("aria-hidden", "true");
    });
  });
}

popInHandler("js_popin_cart");
popInHandler("js_popin_quote");
popInHandler("js_popin_documents");


//Gestion du nom du fichier input type file
function inputFileName() {
  const fileInputs = document.querySelectorAll("input[type='file']");

  fileInputs.forEach(fileInput => {
    const fileText = document.getElementById(`${fileInput.id}_text`);

    if (fileText) {
      fileInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
          fileText.setAttribute("aria-hidden", "false");
          fileText.textContent = file.name;
        }
      });
    }
  });
}

inputFileName();
