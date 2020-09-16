let parentBox = document.querySelector('.content');
let userOptions = document.querySelectorAll('.user-options > i');
let computerOptions = document.querySelectorAll('.computer-options > i');
let userPoint = document.querySelector('.user-point');
let computerPoint = document.querySelector('.computer-point');
let userOptionDetails = document.querySelector('.user-option-details');
let computerOptionDetails = document.querySelector('.computer-option-details');
let btn = document.querySelector('.reset-btn > i');
let userPointCount = 0;
let computerPointCount = 0;

function randomIndex() {
  let randomIndex = Math.floor(Math.random() * 5);
  return randomIndex == 0
    ? 'Rock'
    : randomIndex == 1
    ? 'Paper'
    : randomIndex == 2
    ? 'Scissor'
    : randomIndex == 3
    ? 'Lizard'
    : 'Spock';
}

userOptions[0].addEventListener('click', () => {
  let userWeapon = 'Rock';
  userOptionDetails.innerText = userWeapon;
  matching();
  let computerWeapon = randomIndex();
  computerOptionDetails.innerText = computerWeapon;
  switch (computerWeapon) {
    case 'Paper':
      computerPointCount++;
      break;
    case 'Scissor':
      userPointCount++;
      break;
    case 'Lizard':
      userPointCount++;
      break;
    case 'Spock':
      computerPointCount++;
      break;
    default:
      alert('tie');
  }
  userPoint.innerText = userPointCount;
  computerPoint.innerText = computerPointCount;
});
userOptions[1].addEventListener('click', () => {
  let userWeapon = 'Paper';
  userOptionDetails.innerText = userWeapon;
  matching();
  let computerWeapon = randomIndex();
  computerOptionDetails.innerText = computerWeapon;
  switch (computerWeapon) {
    case 'Rock':
      userPointCount++;
      break;
    case 'Scissor':
      computerPointCount++;
      break;
    case 'Lizard':
      computerPointCount++;
      break;
    case 'Spock':
      userPointCount++;
      break;
    default:
      alert('tie');
  }
  userPoint.innerText = userPointCount;
  computerPoint.innerText = computerPointCount;
});
userOptions[2].addEventListener('click', () => {
  let userWeapon = 'Scissor';
  userOptionDetails.innerText = userWeapon;
  matching();
  let computerWeapon = randomIndex();
  computerOptionDetails.innerText = computerWeapon;
  switch (computerWeapon) {
    case 'Paper':
      userPointCount++;
      break;
    case 'Rock':
      computerPointCount++;
      break;
    case 'Lizard':
      userPointCount++;
      break;
    case 'Spock':
      computerPointCount++;
      break;
    default:
      alert('tie');
  }
  userPoint.innerText = userPointCount;
  computerPoint.innerText = computerPointCount;
});
userOptions[3].addEventListener('click', () => {
  let userWeapon = 'Lizard';
  userOptionDetails.innerText = userWeapon;
  matching();
  let computerWeapon = randomIndex();
  computerOptionDetails.innerText = computerWeapon;
  switch (computerWeapon) {
    case 'Paper':
      userPointCount++;
      break;
    case 'Scissor':
      computerPointCount++;
      break;
    case 'Rock':
      computerPointCount++;
      break;
    case 'Spock':
      userPointCount++;
      break;
    default:
      alert('tie');
  }
  userPoint.innerText = userPointCount;
  computerPoint.innerText = computerPointCount;
});
userOptions[4].addEventListener('click', () => {
  let userWeapon = 'Spock';
  userOptionDetails.innerText = userWeapon;
  matching();
  let computerWeapon = randomIndex();
  computerOptionDetails.innerText = computerWeapon;
  switch (computerWeapon) {
    case 'Paper':
      computerPointCount++;
      break;
    case 'Scissor':
      userPointCount++;
      break;
    case 'Lizard':
      computerPointCount++;
      break;
    case 'Rock':
      userPointCount++;
      break;
    default:
      alert('tie');
  }
  userPoint.innerText = userPointCount;
  computerPoint.innerText = computerPointCount;
});

btn.addEventListener('click', function () {
  userPoint.innerText = 0;
  userPointCount = 0;
  computerPoint.innerText = 0;
  computerPointCount = 0;
  computerOptionDetails.innerText = '';
  userOptionDetails.innerText = '';
});
