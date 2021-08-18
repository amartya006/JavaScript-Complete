console.log("Charactersets Tutorial JavaScript");

//Character Sets
let regex = /harry/;
regex = /ha[a-z]y/;
regex = /har[^ryt]y/;  //Other than r,t,y
regex = /har[ryt]y/;   //Only r,t,y
regex = /har[0-9]y/;

//Quantifiers
regex = /har{2}y/; //r need to occur 2 times exactly
regex = /har{0,2}y/; // r can occur from 0 to 2 times

//Grouping
regex = /(har ){0,2}mahadev/;

let str = "har mahadev is the best Programming Channel";

let result = regex.exec(str);
console.log(result);