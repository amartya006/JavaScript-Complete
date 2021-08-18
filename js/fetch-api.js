console.log("We are in Fetch API");

let fetchBtn = document.getElementById("fetch");
let postBtn = document.getElementById("post");

let list = document.getElementById("studentsList");

// let url = '../amartya.txt';

fetchBtn.addEventListener("click", function(){
    console.log("Started");

    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}) 

fetch("../amartya.json")
    .then(response => response.json())
    .then(data => console.log(data))




// function postData(){
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// }
// console.log("Start it");
// postData();