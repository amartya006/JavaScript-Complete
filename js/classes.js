console.log("Javascript classes and Inheritence");

class Employee {
    constructor(givenName, giveAge, givenExperience) {
        this.name = givenName;
        this.age = giveAge;
        this.exp = givenExperience;
    };
    static go() {
        console.log(`Amartya wants to leave this fucking company`)
    }



};


// let amartya = new Employee("Amartya", 19, 3);
// console.log(amartya);

class Programmer extends Employee {
    constructor(givenName, giveAge, givenExperience, language, technology) {
        super(givenName, giveAge, givenExperience);
        this.language = language;
        this.technology = technology;
        this.best = () => {
            console.log(`${this.name} says JavaScript is the Best Languge`);
        }
    }

}

let amartya = new Programmer("Amartya", 19, 3, "JavaScript", "Node.js");
Employee.go()