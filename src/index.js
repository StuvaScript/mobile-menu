import './normalize.css';
import './style.css';

//todo **`` Need to figure out the animations without normalize.css

//* **`` SELECTORS ``**

const mobileWrap = document.querySelector('.mobile-wrap');
const outerNavList = document.querySelectorAll('.outer-nav li');
const watcher = window.matchMedia('(width <= 400px)');
const mobileMenu = document.querySelector('.mobile-menu');
const lowerMenuWrap = document.querySelector('.lower-menu-wrap');
const shellWrap = document.querySelector('.shell-wrap');
const innerNav = document.querySelector('.inner-nav');

//* **`` EVENT HANDLERS ``**

//? **`` This watches when the media query kicks in.

watcher.addEventListener('change', (e) => {
  e.matches ? console.log('Thats dope!') : console.log('please kill meeeee');
});

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

//* **`` FUNCTIONS ``**

const navArray = [];

function addListItemsToArray() {
  [...outerNavList].map((li) => {
    navArray.push(li.innerText);
  });
}
addListItemsToArray();

//* **`` DOM MANIPULATION ``**

function createInnerNav() {
  const nav = document.createElement('nav');
  nav.classList.add('inner-nav');
  mobileWrap.append(nav);

  const ul = document.createElement('ul');
  ul.classList.add('nav-ul');
  nav.append(ul);

  navArray.map((item) => {
    const li = document.createElement('li');
    li.innerText = item;
    ul.append(li);
  });
}

createInnerNav();

//todo Got the function to create the inner-nav but when I comment out the hard coded inner nav it throws an error.
