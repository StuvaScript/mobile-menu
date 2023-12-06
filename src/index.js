// export { innerNav, shellWrap, lowerMenuWrap, mobileMenu };

//! **`` This "body" import is needed even though it's saying it's not being read.
import { body } from './modules/dom-manipulation';

import {
  lookForOuterNavClass,
  // closeMobileMenu,
  // openMobileMenu,
  watchWindowSize,
} from './modules/event-handlers';

import { populateMobileMenu } from './modules/functions';

import './normalize.css';
import './style.css';

//todo **`` Need to figure out the animations without normalize.css
lookForOuterNavClass();
// watchWindowSize();

// populateMobileMenu();

// const mobileMenu = document.querySelector('.mobile-menu');
// console.log('mobileMenu');
// console.log(mobileMenu);

// const lowerMenuWrap = document.querySelector('.lower-menu-wrap');

// const shellWrap = document.querySelector('.shell-wrap');

// const innerNav = document.querySelector('.inner-nav');

// openMobileMenu();
// closeMobileMenu();

//todo **`` Need to dynamically create the rest of the elements based on if the class "mobile-wrap" is present

//todo **`` Remove the outer nav when the mobile menu pops up.
