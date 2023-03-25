
const open = document.querySelector('.btn-list');
const divList = document.querySelector('.container');
divList.style.display = 'none';

open.addEventListener('click', () => {
  divList.style.display = 'block';
});


const listUI = document.querySelector('ul');
const lis = listUI.parentNode;
function createBtn(li) {
  const remove = document.createElement('button');
  remove.style.backgroundColor = "#fc0356";
  remove.style.height = "35px";
  remove.style.width = "30px";
  remove.style.borderRadius = "5px";
  remove.style.fontSize = "18px";
  remove.style.marginLeft = "15px";
  remove.className = "fa-solid fa-xmark";
  li.appendChild(remove);

  const up = document.createElement('button');
  up.style.backgroundColor = "#0362fc";
  up.style.height = "35px";
  up.style.width = "30px";
  up.style.borderRadius = "5px";
  up.style.margin = "4px";
  up.style.fontSize = "18px";
  up.className = "fa-solid fa-arrow-up";
  li.appendChild(up);

  const down = document.createElement('button');
  down.style.backgroundColor = "#fc9003";
  down.style.height = "35px";
  down.style.width = "30px";
  down.style.borderRadius = "5px";
  down.style.fontSize = "18px";
  down.className = "fa-solid fa-arrow-down";
  li.appendChild(down);
  return li;
}

for (var i = 0; i < lis.length; i++) {
  createBtn(lis[i]);
}

divList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if (button.className === 'fa-solid fa-xmark') {
      ul.removeChild(li);
    } else if (button.className === 'fa-solid fa-arrow-down') {
      const nextLi = li.nextElementSibling;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    } else if (button.className === 'fa-solid fa-arrow-up') {
      const prevLi = li.previousElementSibling;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
  }
});
const inputText = document.querySelector('#myInput');
const myButton = document.querySelector('.btn-list');
const list = document.querySelector('.container ul');
myButton.addEventListener('click', (e) => {
  if (inputText.value != "") {
    e.preventDefault();
    const myLi = document.createElement('li');
    myLi.innerHTML = inputText.value;
    inputText.value="";
    createBtn(myLi);
    list.appendChild(myLi);


  }
});
