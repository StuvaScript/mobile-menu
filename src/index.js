export { innerNav, shellWrap, lowerMenuWrap, mobileMenu, mobileWrap };
import {
  createInnerNav,
  createLowerMenuWrap,
  createMobileWrap,
  createShellWrap,
  createUpperMenuWrap,
} from './modules/dom-manipulation';
import {
  closeMobileMenu,
  openMobileMenu,
  watchWindowSize,
} from './modules/event-handlers';
import './normalize.css';
import './style.css';

//todo **`` Need to figure out the animations without normalize.css

createMobileWrap();
const mobileWrap = document.querySelector('.mobile-wrap');

createUpperMenuWrap();
const mobileMenu = document.querySelector('.mobile-menu');

createLowerMenuWrap();
const lowerMenuWrap = document.querySelector('.lower-menu-wrap');

createShellWrap();
const shellWrap = document.querySelector('.shell-wrap');

createInnerNav();
const innerNav = document.querySelector('.inner-nav');

watchWindowSize();
openMobileMenu();
closeMobileMenu();

//todo **`` Need to dynamically create the rest of the elements based on if the class "mobile-wrap" is present

//todo **`` Remove the outer nav when the mobile menu pops up.
