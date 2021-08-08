console.log("Document Object Model");
// let a= document.all;
// a = document.links;
// let a= document.scripts;

// let a = document.getElementById('link1');
// console.log(a);

// let b = document.querySelectorAll(".link");
// console.log(b);

// console.log(a.classList);
// console.log(b.classList);

// b.forEach(element => {
//     console.log(element);
// });

let c = document.querySelector('h1');
console.log(c);

// Array.from(c).forEach(element => {
//     console.log(element);
// })
// console.log(Array.from(c));

c.innerHTML = "<i>Developers Arena</i>";

let div = document.querySelector('div');
console.log(div);

console.log(div.childNodes[2].nodeName);
console.log(div.children[2].nodeName);
console.log(div.firstElementChild)



