// let name = document.querySelector('#name');
// let email = document.querySelector('#email');
// let entertainment = document.querySelector('#gender');
// let color = document.querySelector('#color');
// let rating = document.querySelector('#range');
// let radio = document.querySelectorAll('[name = "drone"]');
let newDiv = document.createElement('div');
newDiv.classList.add('container');
let btnElm = document.createElement('button');
btnElm.classList.add('close-btn');
btnElm.innerText = 'Close';
let form = document.querySelector('form');
let completeInfo = {};

// function handleName(event) {
//   completeInfo.name = event.target.value;
// }
// function handleEmail(event) {
//   completeInfo.email = event.target.value;
// }
// function handleSelect(event) {
//   completeInfo.type = event.target.value;
// }
// function handleColor(event) {
//   completeInfo.color = event.target.value;
// }
// function handleRate(event) {
//   completeInfo.rating = event.target.value;
// }
// function handleRadio(event) {
//   completeInfo['Book Genre'] = event.target.value;
// }

// name.addEventListener('input', handleName);
// email.addEventListener('input', handleEmail);
// entertainment.addEventListener('input', handleSelect);
// color.addEventListener('input', handleColor);
// rating.addEventListener('input', handleRate);
// radio.forEach((elm) => elm.addEventListener('input', handleRadio));

function handleForm(event) {
  event.preventDefault();
  completeInfo.name = form.elements.name.value;
  completeInfo.email = form.elements.email.value;
  completeInfo.loves = form.elements.genre.value;
  completeInfo['Book Genre'] = form.elements.drone.value;
  completeInfo.rate = form.elements.rate.value;
  completeInfo.isTermsChecked = form.elements.terms.checked;
  completeInfo.color = form.elements.color.value;
  // console.log(completeInfo);
  createModel();
}

form.addEventListener('submit', handleForm);

function createModel() {
  form.style.display = 'none';
  let nameElm = document.createElement('h1');
  nameElm.innerText = `Hello ${completeInfo.name}`;
  let emailElm = document.createElement('h2');
  emailElm.innerText = `Email: ${completeInfo.email}`;
  let lovesElm = document.createElement('h2');
  lovesElm.innerText = `You Love: ${completeInfo.loves}`;
  let colorElm = document.createElement('h2');
  colorElm.innerText = `Color: ${completeInfo.color}`;
  let rateElm = document.createElement('h2');
  rateElm.innerText = `Rating: ${completeInfo.rate}`;
  let bookElm = document.createElement('h2');
  bookElm.innerText = `Book Genre: ${completeInfo['Book Genre']}`;
  let termElm = document.createElement('h2');
  termElm.classList.add('underline');
  termElm.innerText = `You agree to Terms and Conditions`;
  document.body.append(newDiv);
  newDiv.append(
    nameElm,
    emailElm,
    lovesElm,
    colorElm,
    rateElm,
    bookElm,
    termElm,
    btnElm
  );
}

btnElm.addEventListener('click', backToForm);

function backToForm() {
  form.style.display = 'none';
  newDiv.style.display = 'none';
}
