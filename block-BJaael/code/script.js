let boxes = document.querySelector('.boxes');

for (let i = 0; i < 500; i++) {
  let newBox = document.createElement('div');
  newBox.classList.add('box');
  boxes.append(newBox);
}

let boxElm = document.querySelectorAll('.box');

let randomHsl = () =>
  `rgba(${Math.random() * 360}, ${Math.random() * 360}, ${
    Math.random() * 360
  }, 0.5)`;

boxes.addEventListener('mouseover', () => {
  for (let box of boxElm) {
    box.style.background = randomHsl();
    box.innerHTML = `<h3>${Math.floor(Math.random() * 501)}</h3>`;
  }
});
