const addForm = document.querySelector('.add-form');
const input = document.querySelector('#item-input');
const shoppingList = document.querySelector('.shopping-list');

addForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const shoppingItem = document.createElement('li');
  const deleteButton = document.createElement('button');
  shoppingItem.classList.add('shopping-item');
  shoppingItem.textContent = input.value;
  deleteButton.textContent = 'X';
  shoppingItem.appendChild(deleteButton);
  input.value = '';

  shoppingList.appendChild(shoppingItem);
});

shoppingList.addEventListener('click', (event) => {
  if (event.target.tagName === 'UL') return;
  const targetItem = event.target.closest('li');
  shoppingList.removeChild(targetItem);
});
