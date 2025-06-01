//the keywords are reserved words, that can't be used as names or function names or even for labeling, they're already type of syntax in js

//we have some keywords for example: var, const, let, function, if, else, for, while, break, continue and return

//2
//create constructor function

//1
function Monitors(make, year, price){
    this.make = make;
    this.year = year;
    this.price = price
}

//create objects using by new method
let comp1 = new Monitors("Asus ROG Swift 32", 2024, "1200$");
let comp2 = new Monitors("Samsung Odyssey Ark", 2022, "2000$")
let comp3 = new Monitors("Dell Ultrasharp 43", 2020 , "880$")

//print out our statements
console.log(comp1)
console.log(comp2)
console.log(comp3)

//2
//create constructor function
function keyboard(make, color, price){
  this.make = make;
  this.color = color;
  this.price = price
}

//create objects using by new method
let key1 = new keyboard("Dry Studio Diamond", "Black", "279$");
let key2 = new keyboard("Mercury K1 Pro", "Gray", "180$")
let key3 = new keyboard("ASUS Gamers Azoth", "White" , "230$")

//print out our statements
console.log(key1)
console.log(key2)
console.log(key3)

//3
//create constructor function
function Bus(make, model, price){
  this.make = make;
  this.model = model;
  this.price = price
}

//create objects using by new method
let bus1 = new Bus("MCI", "102A3", "30000$");
let bus2 = new Bus("IC Bus", "CE2608", "29000$")
let bus3 = new Bus("Cabot Coach Builders", "Sprinter", "45000$")

//print out our statements
console.log(bus1)
console.log(bus2)
console.log(bus3)
