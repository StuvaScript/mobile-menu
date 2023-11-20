import { innerNav, lowerMenuWrap, shellWrap } from '..';

export { watchWindowSize, openMobileMenu, closeMobileMenu };

const windowSizeWatcher = window.matchMedia('(width <= 400px)');
const mobileMenu = document.querySelector('.mobile-menu');
// const lowerMenuWrap = document.querySelector('.lower-menu-wrap');
// const shellWrap = document.querySelector('.shell-wrap');

//? **`` This watches when the media query kicks in.

function watchWindowSize() {
  windowSizeWatcher.addEventListener('change', (e) => {
    e.matches ? console.log('Thats dope!') : console.log('please kill meeeee');
  });
}

//? **`` When clicking the mobile hamburger menu, it opens the mobile menu and toggles a class name to allow for animations elsewhere. Look at the css for more details.

function openMobileMenu() {
  mobileMenu.addEventListener('click', function () {
    shellWrap.classList.toggle('clicked');
    lowerMenuWrap.classList.toggle('clicked');
    innerNav.classList.toggle('clicked');
  });
}

//? **`` When clicking the exit button, it removes class names and closes the mobile menu

function closeMobileMenu() {
  lowerMenuWrap.addEventListener('click', function () {
    lowerMenuWrap.classList.toggle('clicked');
    shellWrap.classList.toggle('clicked');
    innerNav.classList.toggle('clicked');
  });
}
