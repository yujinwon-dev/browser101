const addForm = document.querySelector('.add-form');
const input = document.querySelector('#item-input');
const shoppingList = document.querySelector('.shopping-list');
let id = 0;

function createItem(text) {
  const shoppingItem = document.createElement('li');
  shoppingItem.classList.add('shopping-item');
  shoppingItem.setAttribute('data-id', id);
  shoppingItem.innerHTML = `
    <span>${text}</span>
    <button class="delete-button">
      <i class="fa-solid fa-trash-can" data-id=${id}></i>
    </button>`;
  id++;
  return shoppingItem;
}

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

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  onAdd();
});

shoppingList.addEventListener('click', (event) => {
  const targetItemId = event.target.dataset.id;
  if (event.target.tagName !== 'I' || !targetItemId) return;
  const targetItem = document.querySelector(`li[data-id="${targetItemId}"]`);
  targetItem.remove();
});
