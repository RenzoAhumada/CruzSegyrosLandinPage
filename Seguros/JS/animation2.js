const sections = document.querySelectorAll('.section');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const section = entry.target;
      sectionObserver.unobserve(section); 

      section.classList.add('visible');
    }
  });
}, options);

sections.forEach(section => {
  sectionObserver.observe(section);
});