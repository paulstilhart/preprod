function getUrl(slide) {
  const style = getComputedStyle(slide); // Récupérer le style de la diapositive
  const backgroundImage = style.backgroundImage; // Extraire l'URL de l'image de fond
  console.log(backgroundImage);
  const url = backgroundImage.slice(5, -2); // Extraire l'URL de l'image (en enlevant les guillemets)
  //console.log(`URL de l'image de fond : ${url}`);
}

function zoomInSlide() {
  const slides = document.querySelectorAll(".js_zoom_in"); // Sélectionnez toutes les diapositives
  slides.forEach((slide) => {
    slide.addEventListener("click", () => getUrl(slide));
  }); // Ajoutez un écouteur d'événements à chaque diapositive
}
zoomInSlide();
