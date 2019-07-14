function solve() {
 
    
    let wholeList = document.querySelectorAll('li');
 
    function capitalize(text){
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
 
 
    let addButton = document.querySelector('button');
    addButton.addEventListener('click', function () {
      let input = document.querySelector('input');
        let currentName = input.value.toLowerCase();
        let position = currentName[0].charCodeAt(0) - 97;
        if (wholeList[position].textContent === ''){
            wholeList[position].textContent = capitalize(currentName);
        }
        else{
            wholeList[position].textContent += `, ${capitalize(currentName)}`;
        }
       
        input.value = '';
    })
 
}