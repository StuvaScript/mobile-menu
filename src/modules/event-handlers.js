// import { innerNav, lowerMenuWrap, mobileMenu, shellWrap } from '..';
import {
  initMobileMenu,
  innerNav,
  lowerMenuWrap,
  mobileMenu,
  mobileWrap,
  populateMobileMenu,
  shellWrap,
  toggleOuterNav,
} from './functions';

export {
  // watchWindowSize,
  openMobileMenu,
  closeMobileMenu,
  outerNav,
  lookForOuterNavClass,
};

//! **`` This needs to match the css media query parameter
const windowSizeWatcher = window.matchMedia('(width <= 450px)');
console.log('windowSizeWatcher');
console.log(windowSizeWatcher.matches);

let outerNav;

// let mobileMenu;
// let mobileMenu, lowerMenuWrap, shellWrap, innerNav;

//? **`` This watches when the media query kicks in and adds all the elements and functions when the window matches the media size and removes them when the size gets bigger than the media query parameter.

function watchWindowSize() {
  //? **`` Checks to see if the screen size is *initially* the specified size to kick in the mobile menu.
  if (windowSizeWatcher.matches) {
    initMobileMenu();
  }

  //? **`` Watches for *changes* in the screen size and either initiates or removes the mobile menu.
  windowSizeWatcher.addEventListener('change', (e) => {
    // e.matches ? console.log('Thats dope!') : console.log('please kill meeeee');
    if (e.matches) {
      initMobileMenu();
    } else {
      console.log('please kill meeeee');
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

// function initMobileMenu() {
//   console.log('Thats dope!');
//   populateMobileMenu();
//   mobileMenu = document.querySelector('.mobile-menu');
//   lowerMenuWrap = document.querySelector('.lower-menu-wrap');
//   shellWrap = document.querySelector('.shell-wrap');
//   innerNav = document.querySelector('.inner-nav');
//   openMobileMenu();
//   closeMobileMenu();
// }

function lookForOuterNavClass() {
  if (document.querySelector('.outer-nav-for-mobile-menu')) {
    console.log('gotcha!');
    outerNav = document.querySelector('.outer-nav-for-mobile-menu');
    watchWindowSize();
  }
}

// lookForOuterNavClass();
