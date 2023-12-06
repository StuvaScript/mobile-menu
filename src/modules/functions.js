export {
  navArray,
  addListItemsToArray,
  // populateMobileMenu,
  mobileWrap,
  initMobileMenu,
  mobileMenu,
  lowerMenuWrap,
  shellWrap,
  innerNav,
  toggleOuterNav,
};

import {
  createInnerNav,
  createLowerMenuWrap,
  createMobileWrap,
  createShellWrap,
  createUpperMenuWrap,
} from './dom-manipulation';
import { closeMobileMenu, openMobileMenu, outerNav } from './event-handlers';

const navArray = [];
const outerNavList = document.querySelectorAll('.outer-nav-for-mobile-menu li');
let mobileWrap, mobileMenu, lowerMenuWrap, shellWrap, innerNav;

//? **`` This loops through all the items in the outer-nav class and adds them to the nav array.

function addListItemsToArray() {
  [...outerNavList].map((li) => {
    navArray.push(li.innerText);
  });
}

//? **`` This creates all the html needed for the mobile menu and assigns the 'mobileWrap' a value after the element is created

// function populateMobileMenu() {
//   createMobileWrap();
//   mobileWrap = document.querySelector('.mobile-wrap');

//   createUpperMenuWrap();
//   createLowerMenuWrap();
//   createShellWrap();
//   createInnerNav();
// }

//? **`` This initializes all the html and functionality for the mobile menu
function initMobileMenu() {
  console.log('Thats dope!');
  // populateMobileMenu();

  createMobileWrap();
  mobileWrap = document.querySelector('.mobile-wrap');

  createUpperMenuWrap();
  createLowerMenuWrap();
  createShellWrap();
  createInnerNav();

  mobileMenu = document.querySelector('.mobile-menu');
  lowerMenuWrap = document.querySelector('.lower-menu-wrap');
  shellWrap = document.querySelector('.shell-wrap');
  innerNav = document.querySelector('.inner-nav');
  openMobileMenu();
  closeMobileMenu();
  toggleOuterNav();
}

//? **`` This hides or makes visible the outer nav
function toggleOuterNav() {
  outerNav.classList.toggle('clicked');
}
