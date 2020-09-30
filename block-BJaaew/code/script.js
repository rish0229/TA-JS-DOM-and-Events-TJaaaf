let section = document.querySelector('section');
let parentElm = document.querySelector('.parentElm');
let input = document.querySelector('input');
let allBtn = document.querySelector('.all-btn');
let btnDiv = document.querySelector('.btn-parent');

allBtn.addEventListener('click', () => {
  btnDiv.innerHTML = '';
  parentElm.innerHTML = '';
  main();
});

function createBtnUI(data) {
  let btn = document.createElement('button');
  btn.classList.add('nav-btn');
  btn.innerText = data.name;
  btn.addEventListener('click', () => {
    parentElm.innerHTML = '';
    createUI(data, parentElm);
  });
  btnDiv.prepend(btn);
}

function createUI(data, rootElm) {
  data.people.forEach((elm) => {
    let divElm = document.createElement('div');
    divElm.setAttribute('data-set', elm.name);
    divElm.classList.add('box');
    let introElm = document.createElement('div');
    introElm.classList.add('flex');
    let imgElm = document.createElement('img');
    imgElm.setAttribute('src', elm.image);
    let nameElm = document.createElement('h2');
    nameElm.innerText = elm.name;
    let dscElm = document.createElement('p');
    dscElm.innerText = elm.description;
    let btnElm = document.createElement('button');
    btnElm.innerText = 'Learn More!';
    introElm.append(imgElm, nameElm);
    divElm.append(introElm, dscElm, btnElm);
    rootElm.append(divElm);
  });
}

function main() {
  for (let house of got.houses) {
    createUI(house, parentElm);
    createBtnUI(house);
  }
}

main();

let elmBox = document.querySelectorAll('.box');

function search(e) {
  let value = e.target.value;
  console.log(value);
}

input.addEventListener('input', (e) => {
  if (e.value != '') {
    search(e);
  }
});
