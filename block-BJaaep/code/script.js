let boxes = document.querySelectorAll('.box');
function random() {
  return Math.floor(Math.random() * 13);
}

function timeout(box) {
  box.innerText = random();
  setTimeout(() => {
    box.innerText = '';
  }, 2 * 1000);
}
boxes[0].addEventListener('click', () => {
  timeout(boxes[0]);
});
boxes[1].addEventListener('click', () => {
  timeout(boxes[1]);
});
boxes[2].addEventListener('click', () => {
  timeout(boxes[2]);
});
boxes[3].addEventListener('click', () => {
  timeout(boxes[3]);
});
boxes[4].addEventListener('click', () => {
  timeout(boxes[4]);
});
boxes[5].addEventListener('click', () => {
  timeout(boxes[5]);
});
boxes[6].addEventListener('click', () => {
  timeout(boxes[6]);
});
boxes[7].addEventListener('click', () => {
  timeout(boxes[7]);
});
boxes[8].addEventListener('click', () => {
  timeout(boxes[8]);
});
boxes[9].addEventListener('click', () => {
  timeout(boxes[9]);
});
boxes[10].addEventListener('click', () => {
  timeout(boxes[10]);
});
boxes[11].addEventListener('click', () => {
  timeout(boxes[11]);
});
