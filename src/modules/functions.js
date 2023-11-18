export { navArray, addListItemsToArray };

const navArray = [];
const outerNavList = document.querySelectorAll('.outer-nav li');

function addListItemsToArray() {
  [...outerNavList].map((li) => {
    navArray.push(li.innerText);
  });
}
