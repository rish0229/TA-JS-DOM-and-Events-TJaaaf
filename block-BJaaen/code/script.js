let userOptions = document.querySelectorAll('.user-options > i');
let computerOptions = document.querySelectorAll('.computer-options > i');
let userPoint = document.querySelector('.user-point');
let computerPoint = document.querySelector('.computer-point');
let userOptionDetails = document.querySelector('.user-option-details');
let computerOptionDetails = document.querySelector('.computer-option-details');
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
  let computerWeapon = randomIndex();
  computerOptionDetails.innerText = computerWeapon;
  userPoint.innerText = userPointCount;
  computerPoint.innerText = computerPointCount;
});
userOptions[1].addEventListener('click', () => {
  let userWeapon = 'Paper';
  userOptionDetails.innerText = userWeapon;
  let computerWeapon = randomIndex();
  computerOptionDetails.innerText = computerWeapon;
  userPoint.innerText = userPointCount;
  computerPoint.innerText = computerPointCount;
});
userOptions[2].addEventListener('click', () => {
  let userWeapon = 'Scissor';
  userOptionDetails.innerText = userWeapon;
  let computerWeapon = randomIndex();
  computerOptionDetails.innerText = computerWeapon;
  userPoint.innerText = userPointCount;
  computerPoint.innerText = computerPointCount;
});
userOptions[3].addEventListener('click', () => {
  let userWeapon = 'Lizard';
  userOptionDetails.innerText = userWeapon;
  let computerWeapon = randomIndex();
  computerOptionDetails.innerText = randomIndex();
  userPoint.innerText = userPointCount;
  computerPoint.innerText = computerPointCount;
});
userOptions[4].addEventListener('click', () => {
  let userWeapon = 'Spock';
  userOptionDetails.innerText = userWeapon;
  let computerWeapon = randomIndex();
  computerOptionDetails.innerText = randomIndex();
  userPoint.innerText = userPointCount;
  computerPoint.innerText = computerPointCount;
});
