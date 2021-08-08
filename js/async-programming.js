console.log("This is Asynchronous Programming");
console.time("hello")
const a=5;

setTimeout(function(){
    if(a>5){
        console.log("Amartya");
    } else{
        console.log("Nigam");
    }
}, 1000
)


console.log("Done");

console.timeEnd("hello");