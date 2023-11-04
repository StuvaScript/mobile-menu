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
