import { addListItemsToArray, navArray } from './functions';

export { createInnerNav };

const mobileWrap = document.querySelector('.mobile-wrap');
addListItemsToArray();

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
