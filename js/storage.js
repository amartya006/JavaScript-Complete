console.log("Local and Session Storage");
localStorage.setItem('name', 'Amartya Nigam');
localStorage.setItem('name1', 'Amartya');
localStorage.setItem('name2', 'Nigam');
localStorage.setItem('name3', 'AmartyaNigam');
// localStorage.clear();
let name = localStorage.getItem('name');
console.log(name);
localStorage.removeItem('name2');

let arr = ["amartya", "nigam", "btech"];
localStorage.setItem('Array', JSON.stringify(arr));
let array = JSON.parse(localStorage.getItem('Array'));
console.log(array);