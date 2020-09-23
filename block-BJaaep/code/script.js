let boxes = document.querySelectorAll('.type-1 .box');
let parentBox = document.querySelector('.type-2 .boxes');

function timeout(box) {
  box.innerText = Math.floor(Math.random() * 13);
  setTimeout(() => {
    box.innerText = '';
  }, 2 * 1000);
}

// WITHOUT EVENT DELEGATION

boxes.forEach((elm) => {
  elm.addEventListener('click', function () {
    timeout(elm);
  });
});

// WITH EVENT DELEGATION

parentBox.addEventListener('click', function (e) {
  if (e.target.className === 'box') {
    timeout(e.target);
  }
});

//BUBBLING

// document.querySelector('.boxes').addEventListener('click', function () {
//   console.log('inside parent box');
// });
// document.querySelector('.wrapper').addEventListener('click', function () {
//   console.log('inside wrapper');
// });
// document.querySelector('.container').addEventListener('click', function () {
//   console.log('inside container');
// });
// document.body.addEventListener('click', function () {
//   console.log('inside body');
// });
