const addForm = document.querySelector('.add-form');
const input = document.querySelector('#item-input');
const shoppingList = document.querySelector('.shopping-list');

function onAdd() {
  const inputValue = input.value;
  if (inputValue.length === 0) {
    input.focus();
    return;
  }
  const item = createItem(inputValue);
  shoppingList.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
}

function createItem(text) {
  const shoppingItem = document.createElement('li');
  shoppingItem.classList.add('shopping-item');

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

  deleteButton.addEventListener('click', () => {
    shoppingList.removeChild(shoppingItem);
  });

  const itemText = document.createElement('span');
  itemText.textContent = text;

  shoppingItem.appendChild(itemText);
  shoppingItem.appendChild(deleteButton);
  return shoppingItem;
}

addForm.addEventListener('submit', (event) => {
  console.log('submit');
  event.preventDefault();
  onAdd();
});
