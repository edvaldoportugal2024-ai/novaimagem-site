const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

if (menuButton && mainNav) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    mainNav.classList.remove('is-open');
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    mainNav.classList.toggle('is-open', !isOpen);
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 721px)').matches) closeMenu();
  });
}

const year = document.querySelector('#current-year');
if (year) year.textContent = String(new Date().getFullYear());
