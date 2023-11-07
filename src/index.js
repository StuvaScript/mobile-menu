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

const lowerMenu = document.querySelector('.lower-menu-wrap');
const shellWrap = document.querySelector('.shell-wrap');

//* **`` EVENT HANDLERS ``**

//? **`` When clicking the mobile hamburger menu, it toggles a class name to allow for animations elsewhere. Look at the css for more details.

document.querySelector('.mobile-menu').addEventListener('click', function () {
  shellWrap.classList.toggle('clicked');
  lowerMenu.classList.toggle('clicked');
});

lowerMenu.addEventListener('click', function () {
  this.classList.toggle('clicked');
  shellWrap.classList.toggle('clicked');
});
