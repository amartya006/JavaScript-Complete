console.log("OOPS Constructor");

let car = {
    carName: "Audi",
    carSpeed: 220,
    start: function(){
        console.log(`${this.carName}'s spped is ${this.carSpeed}`);
    }
}

console.log(car);

function makeCar(itsName, itsSpeed){
    this.carName = itsName;
    this.carSpeed = itsSpeed;
    this.start = function(){
        console.log(`${itsName}'s Speed is ${this.carSpeed}`);
    }
}
makeCar.hello = function(){
    console.log("I am a car");
}
let car2 = new makeCar("Audi", 220);

car2.hello();