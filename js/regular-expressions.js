console.log("Regular Expressions Tutorial")

let reg = /amartya/;
reg = /amartya/g;
reg = /amartya/gi;
let string = "Amartya is a good boy. Amartya is a coder";


// 1. exec()

let result = reg.exec(string);
console.log(result);
// console.log(result[0], result['index'], result.input);
// result = reg.exec(string);
// console.log(result);

// 2.test()

result = reg.test(string);
console.log(result);


// 3. match()
 result = string.match(reg);
 console.log(result);

//  4. search()

result = string.search(reg);
console.log(result);

//5. replace()

result = string.replace(reg, "Nigam");
console.log(result);