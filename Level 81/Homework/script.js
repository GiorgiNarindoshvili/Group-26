//1
//first class
class Car{
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }
}
const car1 = new Car("BMW", "M3 E46", 2005);
const car2 = new Car("Mustang", "GT", 2007);

console.log(car1)
console.log(car2)

//second class
class Person{
    constructor(name, lastname, age){
        this.name = name
        this.lastname = lastname
        this.age = age
    }
}

const pers1 = new Person("Giorgi", "Narindoshvili", 15);
const pers2 = new Person("Erekle" , "Narindoshvili", 12);

console.log(pers1)
console.log(pers2)

//third class 
class Animal{
    constructor(animal, color){
        this.animal = animal
        this.color = color
    }
}
const an1 = new Animal("Lion", "Yellow");
const an2 = new Animal("Wolf", "Black");
const an3 = new Animal("Crocodile", "Dark Green");

console.log(an1);
console.log(an2);
console.log(an3);

//2 
class An{
    constructor(name){
        this.name = name;
    }
    speak(){
    console.log(`${this.name} speaks.`);
    }
}

//first child class
class Dog extends An{
    constructor(name, color){
        super(name)
        this.color = color
    }
    speak(){
        console.log(`${this.name} is barking`)
    }
}

//second child class
class Cat extends An{
    constructor(name, age){
        super(name)
        this.age = age
    }
    speak(){
        console.log(`${this.name} meows`)
    }
}

//third child class
class Bird extends An{
    constructor(name, feather){
        super(name)
        this.fe = feather
    }
    speak(){
        console.log(`${this.name} chirsps`)
    }
}

const dog = new Dog("Max", "Black");
const cat = new Cat("Kitty" , 1);
const parrot = new Bird("Piko", "blue feather");

dog.speak();
cat.speak();
parrot.speak();
//4
// Inheritance can be shared on several classes and objects, and after sharing we can use them, also we can use super() method which will call main constructor parameter from parent class in child class

//5 classes have big influence in js language, because classes can be used to create an blueprints for our objects, also we can create a parent and child classes which will join them together and certain objects will create