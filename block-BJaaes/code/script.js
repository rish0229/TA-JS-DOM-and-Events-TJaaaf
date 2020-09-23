let form = document.querySelector('form');

// let userInfo = {};
function checkNum(str) {
  return str.split('').some((e) => Number(e));
}
function checkSymbol(str) {
  return str.split('').some((e) => {
    if (e === '@') {
      return true;
    }
  });
}

function handleSubmit(event) {
  event.preventDefault();
  let nameElm = form.elements.name;
  let nameElmSmall = nameElm.nextElementSibling;
  let nameElmParent = nameElm.parentElement;
  if (checkNum(nameElm.value)) {
    nameElmSmall.innerText = `name can't contain numbers.`;
    nameElmParent.classList.add('error');
    return;
  } else {
    nameElmSmall.innerText = '';
    nameElmParent.classList.remove('error');
    nameElmParent.classList.add('success');
  }

  let passwordElm = form.elements.password[0];
  let passwordElmSmall = passwordElm.nextElementSibling;
  let passwordElmParent = passwordElm.parentElement;
  if (!checkNum(passwordElm.value) || !checkSymbol(passwordElm.value)) {
    passwordElmSmall.innerText = `password must contain at least a number and a symbol.`;
    passwordElmParent.classList.add('error');
    return;
  } else {
    passwordElmSmall.innerText = '';
    passwordElmParent.classList.remove('error');
    passwordElmParent.classList.add('success');
  }

  let cnfrmPassword = form.elements.password[1];
  let cnfrmPasswordSmall = cnfrmPassword.nextElementSibling;
  let cnfrmPasswordParent = cnfrmPassword.parentElement;
  if (passwordElm.value !== cnfrmPassword.value) {
    cnfrmPasswordParent.classList.add('error');
    cnfrmPasswordSmall.innerText = `Password didn't match`;
    return;
  } else {
    cnfrmPasswordParent.classList.remove('error');
    cnfrmPasswordParent.classList.add('success');
    cnfrmPasswordSmall.innerText = ``;
  }

  alert('success');
}

form.addEventListener('submit', handleSubmit);
