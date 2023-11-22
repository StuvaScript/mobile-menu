import { mobileWrap } from '..';
import { addListItemsToArray, navArray } from './functions';

export {
  createInnerNav,
  createShellWrap,
  createLowerMenuWrap,
  createUpperMenuWrap,
  createMobileWrap,
};

const body = document.querySelector('body');

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

function createShellWrap() {
  const div = document.createElement('div');
  div.classList.add('shell-wrap');
  mobileWrap.append(div);

  const firstChildDiv = document.createElement('div');
  firstChildDiv.classList.add('outer-shell');
  div.append(firstChildDiv);

  const secondChildDiv = document.createElement('div');
  secondChildDiv.classList.add('inner-shell');
  div.append(secondChildDiv);
}

function createLowerMenuWrap() {
  const div = document.createElement('div');
  div.classList.add('lower-menu-wrap');
  mobileWrap.append(div);

  const firstChildDiv = document.createElement('div');
  firstChildDiv.classList.add('mobile-exit');
  firstChildDiv.innerText = 'X';
  div.append(firstChildDiv);
}

function createUpperMenuWrap() {
  const div = document.createElement('div');
  div.classList.add('upper-menu-wrap');
  mobileWrap.append(div);

  const firstChildDiv = document.createElement('div');
  firstChildDiv.classList.add('mobile-menu');
  div.append(firstChildDiv);

  const firstLineDiv = document.createElement('div');
  firstLineDiv.classList.add('line1');
  firstChildDiv.append(firstLineDiv);

  const secondLineDiv = document.createElement('div');
  secondLineDiv.classList.add('line2');
  firstChildDiv.append(secondLineDiv);
}

function createMobileWrap() {
  const div = document.createElement('div');
  div.classList.add('mobile-wrap');
  body.prepend(div);
}
