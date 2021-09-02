console.log("Generators Tutorial");

function* generateNum(){
    let i = 0;
    // yield 1;
    // yield 2;
    // yield 3;

    while(true){
        yield i++;
    }
}

const gen = generateNum();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());
