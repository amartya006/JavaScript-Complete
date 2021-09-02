console.log("Maps in Js");

let map = new Map();

map.set(54, "This is Number");
console.log(map);

let val = map.get(54);
console.log(val);
console.log(map.size);

//Iterating a Map

for(let [key, value] of map){
    console.log(key,":",value);
}

for(let key of map.keys()){
    console.log(key);
}

for(let value of map.values()){
    console.log(value);
}

map.forEach((value, key)=>{
    console.log(key, value);
})


// Converting Map into Array
let myArr = Array.from(map);
console.log(myArr);

myArr = Array.from(map.keys());
console.log(myArr);

myArr = Array.from(map.values());
console.log(myArr);