console.log("For-in vs For-of Loops in JavaScript");

//1. for-in loops

//Iterating Object using for-in Loop
let obj = {
    name: "Amartya Nigam",
    year: "Second",
    branch: "IT"
}

for(let key in obj){
    console.log(obj[key]);
}

// Iterating Array using for-in Loops
let arr = ["Amartya Nigam", "Second year", "IT Branch"];

for(let index in arr){
    console.log(arr[index]);
    console.log(index);
}

//Similarly we can use it for Strings

// 2. for-of loop
// It can be Used with Strings and Arrays 

for(let val of arr){
    console.log(val);
}

// for(let val of obj){
//     console.log(val);
// }                     //Not Possible