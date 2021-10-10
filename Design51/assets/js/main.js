let menuToggleBtn = document.querySelector('.menu-btn');
let mainNavMenu = document.querySelector('.header__nav');
let body = document.querySelector('body');
let menuOpen = false;

menuToggleBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuToggleBtn.classList.add('active');
    mainNavMenu.classList.add('active');
    body.style.overflow = 'hidden';
    menuOpen = true;
  } else {
    menuToggleBtn.classList.remove('active');
    mainNavMenu.classList.remove('active');
    body.style.overflow = 'visible';
    menuOpen = false;
  }
});
