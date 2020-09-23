let userDiv = document.querySelector('.user');
let computerDiv = document.querySelector('.computer');

let data = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function createData(data, operator) {
  let divElm = document.createElement('div');
  divElm.classList.add(`options`, `${operator}-options`, `row-flex`);
  data.forEach((elm) => {
    let iElm = document.createElement('i');
    iElm.classList.add(`fas`, `fa-hand-${elm}`, `fa-3x`);
    iElm.setAttribute('data-figure', elm);
    divElm.append(iElm);
  });
  return divElm;
}
userDiv.append(createData(data, 'user'));
computerDiv.append(createData(data, 'computer'));

let userOptions = document.querySelectorAll('.user-options > i');
let userPoint = document.querySelector('.user-point');
let computerPoint = document.querySelector('.computer-point');
let userOptionDetails = document.querySelector('.user-option-details');
let computerOptionDetails = document.querySelector('.computer-option-details');
let btn = document.querySelector('.reset-btn > i');
let userPointCount = 0;
let computerPointCount = 0;

function handleClick(event) {
  let computer = data[Math.floor(Math.random() * 5)];
  computerOptionDetails.innerText = computer;
  let selectedFig = event.target.dataset.figure;
  userOptionDetails.innerText = selectedFig;
  if (selectedFig === computer) {
    alert("it's a tie.");
  } else if (
    (selectedFig === 'rock' && computer === 'lizard') ||
    (selectedFig === 'scissors' && computer === 'paper') ||
    (selectedFig === 'paper' && computer === 'rock') ||
    (selectedFig === 'lizard' && computer === 'spock') ||
    (selectedFig === 'spock' && computer === 'scissors') ||
    (selectedFig === 'scissors' && computer === 'lizard') ||
    (selectedFig === 'lizard' && computer === 'paper') ||
    (selectedFig === 'paper' && computer === 'spock') ||
    (selectedFig === 'spock' && computer === 'rock') ||
    (selectedFig === 'rock' && computer === 'scissors')
  ) {
    userPointCount++;
  } else {
    computerPointCount++;
  }
  userPoint.innerText = userPointCount;
  computerPoint.innerText = computerPointCount;
}

userOptions.forEach((elm) => elm.addEventListener('click', handleClick));

btn.addEventListener('click', function () {
  userPoint.innerText = 0;
  userPointCount = 0;
  computerPoint.innerText = 0;
  computerPointCount = 0;
  computerOptionDetails.innerText = '';
  userOptionDetails.innerText = '';
});
