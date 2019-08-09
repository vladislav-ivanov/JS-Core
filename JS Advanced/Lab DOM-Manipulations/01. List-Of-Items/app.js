function addItem() {
    let newItem = document.querySelector('#newItemText').value;
    let item = document.createElement('li');
    item.textContent = newItem;
    document.querySelector('#items').appendChild(item);
    
}