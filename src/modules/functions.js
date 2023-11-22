export { navArray, addListItemsToArray, populateMobileMenu, mobileWrap };

import {
  createInnerNav,
  createLowerMenuWrap,
  createMobileWrap,
  createShellWrap,
  createUpperMenuWrap,
} from './dom-manipulation';

const navArray = [];
const outerNavList = document.querySelectorAll('.outer-nav li');
let mobileWrap;

//? **`` This loops through all the items in the outer-nav class and adds them to the nav array.

function addListItemsToArray() {
  [...outerNavList].map((li) => {
    navArray.push(li.innerText);
  });
}

//? **`` This creates all the html needed for the mobile menu and assigns the 'mobileWrap' a value after the element is created

function populateMobileMenu() {
  createMobileWrap();
  mobileWrap = document.querySelector('.mobile-wrap');

  createUpperMenuWrap();
  createLowerMenuWrap();
  createShellWrap();
  createInnerNav();
}
