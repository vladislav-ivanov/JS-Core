function encodeAndDecodeMessages() {
  
   let[sendAndEncodeButton, readAndDecodeButton] = document.querySelectorAll('button')

let sendTextArea = document.getElementsByTagName('textarea')[0];
let decodeTextArea = document.getElementsByTagName('textarea')[1];

sendAndEncodeButton.addEventListener('click', function(){
    let input = sendTextArea.value;
    let encodedMessage = '';

    for(let i =0;i< input.length;i++){
        encodedMessage += String.fromCharCode(input[i].charCodeAt(0)+1);
    }
    decodeTextArea.value = encodedMessage;
    sendTextArea.value = '';
});

readAndDecodeButton.addEventListener('click', function(){
let input = decodeTextArea.value;
let decodedMessage =  '';
for(let i =0;i<input.length;i++){
    decodedMessage += String.fromCharCode(input[i].charCodeAt(0)-1);

}
decodeTextArea.value = decodedMessage;
});


}