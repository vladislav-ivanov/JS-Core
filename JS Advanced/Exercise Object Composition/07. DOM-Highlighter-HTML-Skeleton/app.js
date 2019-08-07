function solve(selector){
   let element = document.querySelector(selector);
   (function changeClass(element){
if(element.hasChildNodes()){
    element.className += 'highlight';
    changeClass(Array.from(element.childNodes))
}
   })(element);
}

// solve('#content'); <-- Try it.