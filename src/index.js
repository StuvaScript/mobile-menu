import './normalize.css';
import './style.css';

//todo **`` Need to figure out the animations without normalize.css

//! **`` This "window width" is known to be inaccurate and has been giving me the wrong values. Maybe just rely on media queries.

window.addEventListener('resize', () => {
  let w = window.innerWidth;
  console.log('w');
  console.log(w);
  let h = window.innerHeight;
  console.log('h');
  console.log(h);
  if (w <= 400) {
    console.log('hellz ya');
  }
});

//* **`` SELECTORS ``**

const mobileMenu = document.querySelector('.mobile-menu');
const lowerMenuWrap = document.querySelector('.lower-menu-wrap');
const shellWrap = document.querySelector('.shell-wrap');
const innerNav = document.querySelector('.inner-nav');

//* **`` EVENT HANDLERS ``**

//? **`` When clicking the mobile hamburger menu, it toggles a class name to allow for animations elsewhere. Look at the css for more details.

mobileMenu.addEventListener('click', function () {
  shellWrap.classList.toggle('clicked');
  lowerMenuWrap.classList.toggle('clicked');
  innerNav.classList.toggle('clicked');
});

lowerMenuWrap.addEventListener('click', function () {
  this.classList.toggle('clicked');
  shellWrap.classList.toggle('clicked');
  innerNav.classList.toggle('clicked');
});
