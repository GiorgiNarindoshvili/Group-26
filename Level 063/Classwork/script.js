//1
//first person
const man  = {
    name: "Giorgi",
    age: 15,
    height: 175,
    FavColor: "SkyBlue"
};
//second person
const man2 = {
    name: "Data",
    age: 17,
    height: 175,
    FavColor: "Blue"
}

//third
const man3 = {
    name: "Erekle",
    age: 12,
    height: 162,
    FavColor: "Yellow"
}

//print our statements for firts person
console.log(man.name)
console.log(man.age)
console.log(man.height)
console.log(man.FavColor)

//print our statements for second person
console.log(man2.name)
console.log(man2.age)
console.log(man2.height)
console.log(man2.FavColor)

//print for third 
console.log(man3.name)
console.log(man3.age)
console.log(man3.height)
console.log(man3.FavColor)

//2
//make our function
function Car(make, year, color){
    this.make = make
    this.year = year
    this.color = color
}
//create objects
let car1 = new Car("Mercedes-Benz", 2021, "black")
let car2 = new Car("Audi", 2019, "blue")
let car3 = new Car("Mustang GT", 2015, "White")

//print our statements
console.log(car1)
console.log(car2)
console.log(car3)

//3
//make our function about person
function Person(name, lastname, age, role){
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.role = role;
}

//create objects of our persons
let prsn1 = new Person("Giorgi", "Narindoshvili", 15, "Student");
let prsn2 = new Person ("Nika", "Keshelava", 28, "Mentor")
let prsn3 = new Person("Data", "Diasamidze", 17, "Mentor");

//print our statements
console.log(prsn1);
console.log(prsn2);
console.log(prsn3);

//3 
//make our function for our animals
function Animal(name, color1, generation){
    this.name = name
    this.color1 = color1
    this.gene = generation
}
//create objects
let an1 = new Animal("Wolf pup","black", "Wolf")
let an2 = new Animal("Pup", "brown", "Dog")
let an3 = new Animal("Kitten", "White", "Cat")

//print our statements
console.log(an1)
console.log(an2)
console.log(an3)

//constructions are used to create a new objects with the specified name, and in this object we can give some info to our created object 