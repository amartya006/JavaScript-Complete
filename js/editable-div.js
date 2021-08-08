console.log("Creating Editable Div");

let container = document.querySelector('.container');
let first = document.querySelector(".classes");
let divElem = document.createElement('div');
divElem.id = 'elem';
divElem.className = 'elems';
divElem.setAttribute('style', 'border: 2px solid black; padding: 3px;');

let displayText = localStorage.getItem('edit');

let text;
if(displayText == null){
    let str = "This is the editable Div";
    text = document.createTextNode(str);
    
} else{
    text = document.createTextNode(displayText);
}




divElem.appendChild(text);


container.insertBefore(divElem, first);
divElem.addEventListener('click', () =>{
    let noTextArea = document.getElementsByClassName('textarea').length;
    if(noTextArea == 0){
        let data = elem.innerHTML;
        let html= `<textarea width= 100% class='textarea' id='textarea'>${data}</textarea>`
        
        divElem.innerHTML = html;
    }

    let textArea = document.getElementById('textarea');
    textArea.addEventListener('blur', function(){
        elem.innerText = textArea.value;
        localStorage.setItem('edit', elem.innerText);
    })

    
    
})

console.log(divElem);
console.log(hello.innerHTML)


