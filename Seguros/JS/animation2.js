const sections = document.querySelectorAll('.section');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Puedes ajustar este valor
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // La sección está en el punto de vista
      const section = entry.target;
      sectionObserver.unobserve(section); // Dejar de observar para no repetir la carga

      // Cargar contenido adicional de la sección (si es necesario)
      // Por ejemplo, imágenes, videos, etc.

      // Agregar una clase para activar la animación de entrada
      section.classList.add('visible');
    }
  });
}, options);

sections.forEach(section => {
  sectionObserver.observe(section);
});