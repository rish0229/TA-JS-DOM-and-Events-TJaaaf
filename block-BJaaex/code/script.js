let parent = document.querySelector('.parent');
let moveElm = document.querySelector('.move');
let timeElm = document.querySelector('.time');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let items = ['dove', 'cat', 'horse', 'frog', 'dragon', 'paw', 'dog', 'hippo'];
let data = () => {
  return items.concat(items).sort(() => Math.random() - 0.5);
};
let data2 = [...data()];
let counter = 0;
let selectedElm = [];
let move = 0;
let s = 0;
let m = -1;

for (let i = 0; i < 16; i++) {
  createUI(i);
}

function createUI(dataIndex) {
  let box = document.createElement('div');
  box.classList.add('box', 'flex', 'hidden');
  box.setAttribute('data-type', data2[dataIndex]);
  let i = document.createElement('i');
  i.classList.add(`fas`, `fa-${data2[dataIndex]}`);
  box.append(i);
  parent.append(box);
}

function displayContent(e) {
  let target = e.target;
  if (target.classList.contains('box')) {
    target.classList.remove('hidden');
    target.classList.add('selected', 'disabled');
    selectedElm.push(target);
  } else {
    target.parentElement.classList.remove('hidden');
    target.parentElement.classList.add('selected', 'disabled');
    selectedElm.push(target.parentElement);
  }
}

parent.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('box') ||
    e.target.classList.contains('fas')
  ) {
    counter++;
    displayContent(e);
    if (counter === 2) {
      matchOrNot();
      move++;
      moveElm.innerText = move;
    }
  }
});

function disabled(root) {
  root
    .querySelectorAll('.hidden')
    .forEach((elm) => elm.classList.add('disabled')); // (document. === parentElm.) (disabled class)
}

function enabled(root) {
  root
    .querySelectorAll('.hidden')
    .forEach((elm) => elm.classList.remove('disabled')); // (document. === parentElm.) (disabled class)
}

function matchSelected(elm) {
  let type = elm.map((elm) => elm.dataset.type);
  // elm.forEach((elm) => elm.classList.remove('disabled'));
  // disabled(parent);
  if (type[0] === type[1]) {
    elm.forEach((elm) => elm.classList.add('matched', 'disabled'));
    enabled(parent);
  } else {
    elm.forEach((elm) => {
      elm.classList.add('error');
    });
    setTimeout(() => {
      enabled(parent);
      elm.forEach((elm) => {
        elm.classList.add('hidden');
      });
      elm.forEach((elm) => {
        elm.classList.remove('error', 'selected', 'disabled');
      });
    }, 2000);
    // enabled(parent);
  }
}

function matchOrNot() {
  disabled(parent);
  // match the selected one
  matchSelected(selectedElm);
  // match or not
  // console.log('working');
  counter = 0;
  selectedElm = [];
}

// TIMER

// function incS() {
//   if (s > 59) {
//     s = 0;
//   }
//   if (s == 59) {
//     incM();
//   }
//   s++;
//   sec.innerText = s < 10 ? '0' + s : s;
// }
// function incM() {
//   m++;
//   min.innerText = m < 10 ? '0' + m : m;
// }
// incS();
// setInterval(incS, 1000);
