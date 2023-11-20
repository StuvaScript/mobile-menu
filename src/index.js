export { innerNav, shellWrap, lowerMenuWrap };
import {
  createInnerNav,
  createLowerMenuWrap,
  createShellWrap,
} from './modules/dom-manipulation';
import {
  closeMobileMenu,
  openMobileMenu,
  watchWindowSize,
} from './modules/event-handlers';
import './normalize.css';
import './style.css';

//todo **`` Need to figure out the animations without normalize.css
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
