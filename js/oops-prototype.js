let obj = {
    name: "Amartya Nigam",
    course: "B. Tech.",
    college: "KIET Group of Institutions, GZB (IIT Ghaziabad)"
}

// console.log(obj);

function details(name, course){
    this.name = name;
    this.course = course;
    this.college ="KIET Group of Institutions";
}

let student1 =new details("Mitanshu", "B. Tech.");
details.prototype.getName= function(){
    return this.name;
}

details.prototype.setName = function(newName){
    this.name = newName;
}

console.log(student1.getName());
student1.setName("Amartya");

console.log(student1);