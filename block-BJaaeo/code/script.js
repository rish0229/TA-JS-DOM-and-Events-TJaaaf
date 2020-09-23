let numElm = document.querySelectorAll('.num');
let resultBox = document.querySelector('.result');
let clearBtn = document.querySelector('.clear');
let equalBtn = document.querySelector('.equal');
let result = 0;

function dataCalc(elm) {
  resultBox.innerText += elm.children[0].innerText;
}

numElm.forEach((elm) => {
  elm.addEventListener('click', function () {
    dataCalc(elm);
  });
});

equalBtn.addEventListener('click', function () {
  resultBox.innerText = eval(resultBox.innerText);
});

clearBtn.addEventListener('click', () => {
  resultBox.innerText = '';
});
