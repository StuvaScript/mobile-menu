import './normalize.css';
import './style.css';

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

//todo **`` Need to figure out how to do a transition event when you click on the hamburger menu to slowly spring open the mobile menu.
