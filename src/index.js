export { innerNav };
import { createInnerNav } from './modules/dom-manipulation';
import {
  closeMobileMenu,
  openMobileMenu,
  watchWindowSize,
} from './modules/event-handlers';
import './normalize.css';
import './style.css';

//todo **`` Need to figure out the animations without normalize.css

createInnerNav();
const innerNav = document.querySelector('.inner-nav');

watchWindowSize();
openMobileMenu();
closeMobileMenu();

//todo **`` Need to dynamically create the rest of the elements based on if the class "mobile-wrap" is present
