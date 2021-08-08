console.log("Prototype Inheritence");


// Creating Prototype
const proto = {
    sayHello: function(){
        return "To Kaise hn Aap Log";
    },
    happy: "Me"
}


// Creating object using Prototype

//Method 1
/* let obj = Object.create(proto);
obj1.name = "Amartya";
obj1.Std = "High";
*/

//Method 2
/*
let obj1= Object.create(proto, {
    name: {value: "Amartya", writable: true},
    Std: {value: "High"}
});
*/

//Prototypal Inheritance

//Creating Constructor
function Employee(name, salary, exp){
    this.name = name;
    this.salary = salary;
    this.experience = exp;
}

Employee.prototype.sayHello = function(){
    return "To Kaise hn Aap Log";
}

let emp1 = new Employee("Amartya", 1500000, 6);
console.log(emp1);

// Now creating new Constructor and Inheriting the Prototype

function Programmer(name, salary, experience, language){
    Employee.call(this, name, salary, experience);
    this.language = language;
}

//Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually Set the Constructor
Programmer.prototype.constructor = Programmer;

let pro1 = new Programmer("Nigam", 600000, 5, "JavaScript");
console.log(pro1);

//Quiz


