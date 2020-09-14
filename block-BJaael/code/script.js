let randomHsl = () =>
  `rgb(${Math.random() * 360}, ${Math.random() * 360}, ${Math.random() * 360})`;
let boxes = document.querySelector('.boxes');
let boxElm = document.querySelectorAll('.box');
boxes.addEventListener('mouseover', () => {
  for (let box of boxElm) {
    box.style.background = randomHsl();
    box.innerText = Math.floor(Math.random() * 500 + 1);
  }
});
