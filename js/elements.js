console.log("CREATING - REMOVING - REPLACING");

let element = document.createElement('h1');
let element2 = document.createElement('h2');
element2. innerText = "This is a Created Element";
let text = document.createTextNode("This is Created Element 2");
element.appendChild(text);
element.className = "main-head";
element.id = "main-id";
element.setAttribute('key', "main-head");

let main = document.querySelector('body');
main.appendChild(element);

element.replaceWith(element2);

let div = document.getElementById('lastDiv');
// console.log(document.getElementsByClassName('link')[0])
div.replaceChild(element2, document.getElementsByClassName('link2')[0]);

div.removeChild(document.getElementById('link1'));
console.log(div.getAttribute('id'));
// console.log(element);

// Exercise
div = document.querySelector('.container');
let exerciseElement = document.createElement('h1');
exerciseElement.innerText = "Go to CodeWithHarry";
let aTag = document.createElement('a');
aTag.appendChild(exerciseElement);
div.appendChild(aTag);
div.append("element2");

