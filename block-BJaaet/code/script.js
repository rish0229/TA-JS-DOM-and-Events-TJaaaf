let parentElm = document.querySelector('.parent-elm');
let addBtn = document.querySelector('.add-btn');
let inputElm = document.querySelector('input');

function createUI(event) {
  if (inputElm.value == '') {
    return;
  }
  let divElm = document.createElement('div');
  divElm.classList.add('list-item', 'flex');
  let h2Elm = document.createElement('h2');
  h2Elm.innerText = inputElm.value;
  let delBtn = document.createElement('button');
  delBtn.classList.add('del-btn');
  delBtn.innerText = 'del';
  delBtn.addEventListener('click', function () {
    removeData(divElm);
  });
  divElm.append(h2Elm, delBtn);
  parentElm.append(divElm);
  inputElm.value = '';
}

function removeData(elm) {
  elm.parentNode.removeChild(elm);
}

addBtn.addEventListener('click', createUI);
