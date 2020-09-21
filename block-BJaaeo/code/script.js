let numElm = document.querySelectorAll('.num');
let resultBox = document.querySelector('.result');
let clearBtn = document.querySelector('.clear');
let result = 0;

// function printResult() {
//   result += Number(elm.children[0].innerText);
//   resultBox.innerText = result;
// }

function dataCalc(elm) {
  resultBox.innerText += elm.children[0].innerText;
}

numElm.forEach((elm) => {
  elm.addEventListener('click', function () {
    dataCalc(elm);
  });
});

clearBtn.addEventListener('click', () => {
  resultBox.innerText = '';
});
