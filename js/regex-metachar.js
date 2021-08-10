console.log("Regular Expressions- Metacharacters");

let regex = /amartya/i;
regex = /^amar/;  //^ symbol denotes starts with
regex = /ya$/;    // $ symbol denotes endswith
regex = /ama.tya/; // each . denotes one character
regex = /b*t/; // * can be replaced with as many characters   NOT WORKING
regex = /ama?rt?ya/;  // makes char before ? optional
regex = /ama\*tya/;

let str = "ama*tya nigam is best amartya nigam, nigam amartya";
let result = regex.exec(str);
console.log(result);