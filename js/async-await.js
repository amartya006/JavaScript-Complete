console.log("Tutorial of Async Await");

async function run(){
   console.log("Before Fetching")
   const response = await fetch('https://api.github.com/users');
   console.log("After Fetching");
   const users = await response.json();
   return users;
}
console.log("Before Running");
let var1 = run();
console.log(var1);
console.log("After Running");
var1.then(function(data){
    console.log(data);
    console.log(var1);
})

