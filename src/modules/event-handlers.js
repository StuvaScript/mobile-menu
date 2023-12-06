export { openMobileMenu, closeMobileMenu, outerNav, lookForOuterNavClass };

import {
  initMobileMenu,
  innerNav,
  lowerMenuWrap,
  mobileMenu,
  mobileWrap,
  shellWrap,
  toggleOuterNav,
} from './functions';

//! **`` This needs to match the css media query parameter
const windowSizeWatcher = window.matchMedia('(width <= 450px)');

let outerNav;

//? **`` This watches when the media query kicks in and adds all the elements and functions when the window matches the media size and removes them when the size gets bigger than the media query parameter.

function watchWindowSize() {
  //? **`` Checks to see if the screen size is *initially* the specified size to kick in the mobile menu.
  if (windowSizeWatcher.matches) {
    initMobileMenu();
    return;
  }

  //? **`` Watches for *changes* in the screen size and either initiates or removes the mobile menu.
  windowSizeWatcher.addEventListener('change', (e) => {
    if (e.matches) {
      initMobileMenu();
    } else {
      mobileWrap.remove();
      toggleOuterNav();
    }
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

//? **`` Checks to see if 'outer-nav-for-mobile-menu' exists. If so, it runs the mobile menu code

function lookForOuterNavClass() {
  if (document.querySelector('.outer-nav-for-mobile-menu')) {
    outerNav = document.querySelector('.outer-nav-for-mobile-menu');
    watchWindowSize();
  }
}
