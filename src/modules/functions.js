export { navArray, addListItemsToArray };

const navArray = [];
const outerNavList = document.querySelectorAll('.outer-nav li');

//? **`` This loops through all the items in the outer-nav class and adds them to the nav array.

function addListItemsToArray() {
  [...outerNavList].map((li) => {
    navArray.push(li.innerText);
  });
}
