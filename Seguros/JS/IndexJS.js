// Agregar efecto deslizante a la sección de seguros
document.addEventListener("DOMContentLoaded", function() {
  const insuranceSection = document.querySelector(".insurance-section");
  insuranceSection.style.opacity = 0;

  function fadeInElement(element) {
    let opacity = 0;
    const timer = setInterval(function() {
      opacity += 0.5;
      element.style.opacity = opacity;
      if (opacity >= 1) clearInterval(timer);
    }, 100);
  }

  fadeInElement(insuranceSection);
});