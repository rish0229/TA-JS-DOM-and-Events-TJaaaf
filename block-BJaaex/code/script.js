let parent = document.querySelector('.parent');

for (let i = 0; i < 16; i++) {
  createUI();
}

function randomNumber(elm) {
  elm.innerText = Math.floor(Math.random() * 10);
  elm.style.color = 'white';
}

function createUI() {
  let box = document.createElement('div');
  box.classList.add('box', 'fa');
  box.addEventListener('click', () => {
    randomNumber(box);
  });
  parent.append(box);
}