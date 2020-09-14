let randomHsl = () => `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
let boxes = document.querySelector('.boxes');
let boxElm = document.querySelectorAll('.box');
boxes.addEventListener('mouseover', function () {
  for (let box of boxElm) {
    box.style.background = randomHsl();
    box.innerText = Math.floor(Math.random() * 500 + 1);
  }
});
