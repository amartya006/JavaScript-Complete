console.log("Character Classes");

//Character Classes

let regex = /harry/;
regex = /\wame /;
regex = /\w+ame /;
regex = /\WI/;
regex = /\W+I/;
regex = /\d /;
regex = /\d+/;
regex = /\D 55/;
regex = /\D+ 55/;
regex = /\sh/;

//Word Boundary
regex = /founder\b/;  //next word should start after founder

//Assertions
regex = /my(?=n)/;   //n should be after my
regex = /found(?!lr)/;  //lr should not be after found


let str = "Hello 55 myname is harry, I am founder of CodewithHarry";

let result = regex.exec(str); 
console.log(result);