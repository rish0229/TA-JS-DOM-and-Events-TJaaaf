function main() {
  // SELECT THE REQUIRED ELEMENTS
  let parentElm = document.querySelector('.parent-elm');
  let inputElm = document.querySelector('input');
  let ul = document.querySelector('ul');
  let allTodos = JSON.parse(localStorage.getItem('todos')) || []; // DISPLAY LOCAL STORAGE OR EMPTY ARRAY

  // WHEN THE USER PRESSES ENTER KEY CALL THE BELOW FUNCTION

  function handleInput(event) {
    let value = event.target.value; // GET THE VALUE
    if (value == '') {
      // WHAT IF EMPTY? RETURN.
      return;
    }
    let todo = {
      // ARRAY DATA
      name: value,
      isDone: false,
    };
    allTodos.push(todo); // PUSH TO ARRAY
    localStorage.setItem('todos', JSON.stringify(allTodos)); // ADD TO LOCAL STORAGE
    event.target.value = ''; // CLEAR THE INPUT ELEMENT
    createUI(allTodos, ul); // CREATE THE UI AS ENTER IS PRESSED
  }

  // WHEN THE USER PRESSES CROSS BTN THEN CALL THE BELOW FUNCTION

  function removeElm(index) {
    allTodos.splice(index, 1); // PLAY SMART
    localStorage.setItem('todos', JSON.stringify(allTodos)); // UPDATE LOCAL STORAGE
    createUI(allTodos, ul); // CREATE THE UPDATED UI
  }

  // WHEN THE USER CHECKS THE CHECKBOX, CALL THE BELOW FUNCTION

  function status(e, index) {
    allTodos[index].isDone = !allTodos[index].isDone; // PLAY SMART i.e, RIGHT WAY TO TOGGLE
    localStorage.setItem('todos', JSON.stringify(allTodos)); // UPDATE LOCAL STORAGE
    createUI(allTodos, ul); // CREATE THE UPDATED UI
  }

  // CREATE THE UI

  function createUI(data, rootElm) {
    rootElm.innerHTML = ''; // FIRST CLEAR THE INNER HTML AND THEN CREATE UI
    data.forEach((elm, index) => {
      // DAMN SMART i.e, PASS THE INDEX
      let liElm = document.createElement('li');
      let divElm = document.createElement('div');
      divElm.classList.add('flex');
      let checkboxElm = document.createElement('input');
      checkboxElm.type = 'checkbox';
      checkboxElm.checked = elm.isDone;
      // ADD EVENT LISTENER TO EACH CHECKBOX ELEMENT
      checkboxElm.addEventListener('input', (e) => {
        status(e, index);
      });
      let h2Elm = document.createElement('h2');
      h2Elm.innerText = elm.name;
      if (elm.isDone == true) {
        h2Elm.classList.add('taskCompleted');
      }
      let delBtn = document.createElement('button');
      delBtn.innerHTML = ' &#10006;';
      delBtn.classList.add('delete-btn');
      // ADD EVENT LISTENER TO EACH BTN ELEMENT
      delBtn.addEventListener('click', () => {
        removeElm(index);
      });
      divElm.append(checkboxElm, h2Elm);
      liElm.append(divElm, delBtn);
      rootElm.append(liElm);
      parentElm.append(rootElm);
    });
    createFeaturesUI(ul);
  }

  function createFeaturesUI(rootElm) {
    let featureLi = document.createElement('li');
    let div1 = document.createElement('div');
    let p = document.createElement('p');
    p.innerText = ` item(s) left`;
    div1.append(p);
    let div2 = document.createElement('div');
    div2.classList.add('flex');
    let btn1 = document.createElement('button');
    btn1.innerText = 'All';
    btn1.addEventListener('click', () => {
      createUI(allTodos, ul);
    });
    let btn2 = document.createElement('button');
    btn2.innerText = 'Active';
    btn2.addEventListener('click', () => {
      createActiveUI();
    });
    let btn3 = document.createElement('button');
    btn3.innerText = 'Completed';
    btn3.addEventListener('click', () => {
      createCompletedUI();
    });
    div2.append(btn1, btn2, btn3);
    featureLi.append(div1, div2);
    rootElm.append(featureLi);
  }

  function createActiveUI() {
    let activeTodos = allTodos.filter((elm) => !elm.isDone);
    createUI(activeTodos, ul);
  }

  function createCompletedUI() {
    let completedTodos = allTodos.filter((elm) => elm.isDone);
    createUI(completedTodos, ul);
  }

  inputElm.addEventListener('keydown', function (event) {
    // ACTIVATE ONLY WHEN ENTER KEY IS PRESSED
    if (event.code === 'Enter') {
      handleInput(event);
    }
  });

  createUI(allTodos, ul); // CREATE UI WHEN PAGE IS LOADED
}
main();
