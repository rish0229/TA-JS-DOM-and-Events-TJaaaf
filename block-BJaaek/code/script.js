let button = document.querySelector('.box-1');
let elm = document.querySelector('.box-1');
const randomHsl = () => `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
button.addEventListener('click', function () {
  elm.style.background = randomHsl();
});
let secondBtn = document.querySelector('.box-2');
let secondElm = document.querySelector('.box-2');
secondBtn.addEventListener('mousemove', function () {
  secondElm.style.background = randomHsl();
});
