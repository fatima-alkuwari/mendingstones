const swatches = document.querySelectorAll('.color-swatch');

swatches.forEach(swatch => {
  swatch.addEventListener('click', function() {
    const color = this.id;
    const body = document.body;
    const textColor = color === 'black' || color === 'red' || color === 'blue' ? 'white' : 'black';
    body.style.backgroundColor = color;
    body.style.color = textColor;
  });
});

const list1 = document.querySelector('#list1');
const list2 = document.querySelector('#list2');
const list3 = document.querySelector('#list3');
const addButton1 = document.querySelector('#add-button1');
const addButton2 = document.querySelector('#add-button2');
const addButton3 = document.querySelector('#add-button3');
const addAllButton = document.querySelector('#add-all');
const clearAllButton = document.querySelector('#clear-all');
const displaySelected = document.querySelector('#display-selected');

let item1 = '';
let item2 = '';
let item3 = '';

addButton1.addEventListener('click', () => {
  if (list1.value !== '') {
    item1 = list1.value;
    displaySelected.textContent = item1;
    displaySelected.style.fontSize = '15pt';
displaySelected.style.color = 'yellow';
    displaySelected.style.textShadow = '1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black';    displaySelected.style.position = 'absolute'
     displaySelected.style.top = '101%'
  }
});

addButton2.addEventListener('click', () => {
  if (list2.value !== '') {
    item2 = list2.value;
    displaySelected.textContent = item1 + '          ' + item2;
    displaySelected.style.fontSize = '15pt';
    displaySelected.style.color = 'yellow';
        displaySelected.style.textShadow = '1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black';    displaySelected.style.position = 'absolute'
    displaySelected.style.top = '101%'

  }
});

addButton3.addEventListener('click', () => {
  if (list3.value !== '') {
    item3 = list3.value;
    displaySelected.textContent = item1 + ' ' + item2 + ' ' + item3;
    displaySelected.style.fontSize = '15pt';
    displaySelected.style.color = 'yellow';
        displaySelected.style.textShadow = '1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black';    displaySelected.style.position = 'absolute'
    displaySelected.style.top = '101%'
  }
});

addAllButton.addEventListener('click', () => {
  if (list1.value !== '' && list2.value !== '' && list3.value !== '') {
    item1 = list1.value;
    item2 = list2.value;
    item3 = list3.value;
    displaySelected.textContent = item1 + ' ' + item2 + ' ' + item3;
    displaySelected.style.fontSize = '16pt';
    displaySelected.style.color = 'yellow';
  }
});

clearAllButton.addEventListener('click', () => {
  list1.value = '';
  list2.value = '';
  list3.value = '';
  item1 = '';
  item2 = '';
  item3 = '';
  displaySelected.textContent = '';
  displaySelected.style.fontSize = '';
  displaySelected.style.color = '';
});



