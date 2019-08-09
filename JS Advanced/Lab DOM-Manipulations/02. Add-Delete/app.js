function addItem() {
    let newItem = document.querySelector('#newText').value;
    let item = document.createElement('li');
    item.textContent = newItem;
    

    let deleteLink = document.createElement('a')
  deleteLink.href = '#'
  deleteLink.textContent = '[Delete]'
  deleteLink.addEventListener('click', ev => {
    ev.target.parentNode.remove()
  })

  item.appendChild(deleteLink)
  document.querySelector('#items').appendChild(item)
}