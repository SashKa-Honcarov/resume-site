const links = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('.section');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-target');
    sections.forEach(sec => sec.classList.remove('visible'));
    document.getElementById(target).classList.add('visible');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
