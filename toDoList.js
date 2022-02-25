// If an li element is clicked, toggle the class "done" on the <li>
const parentList = document.querySelector('ul.today-list');

const toDoItems = document.querySelectorAll('li');

parentList.addEventListener('click', (e) => {
  const clickedItem = e.target;
  toDoItems.forEach(e => e.classList.toggle('done'));
});

// If a delete link is clicked, delete the li element / remove from the DOM

const deleteButton = document.querySelector('.delete');

const deletedItem = deleteButton.parentNode


deleteButton.addEventListener('click', (e) => {
  while (deletedItem.firstChild) {
    deletedItem.removeChild(deletedItem.firstChild);
  }
  deletedItem.removeChild;
});

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
console.log(text);
};
  
//I have no idea...
