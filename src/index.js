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

//todo **`` Need to reshape and resize the blue circles.

document.querySelector('.mobile-menu').addEventListener('click', function () {
  this.classList.toggle('clicked');
  document.querySelector('.lower-menu-wrap').classList.toggle('clicked');
});
