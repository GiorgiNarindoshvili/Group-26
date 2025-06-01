//1
class Car{
    constructor(brand, model, year, color){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    startEn(){
        return `${this.brand} ${this.model} engine started`
    }
    paint(newColor){
        this.color = newColor;
        return `${this.brand} ${this.model} is ${this.color}`;

    }
}
const car1 =  new Car("Toyota", "Camry", 2020, "Red")
const car2 = new Car("Honda", "Civic", 2021, "Blue");
const car3 = new Car("Ford", "Mustang", 2022, "Black");

//car number 1
console.log(car1.brand, car1.model, car1.year, car1.color)
console.log(car1.startEn())
console.log(car1.paint("Black"))

//car number 2
console.log(car2.brand, car2.model, car2.year, car2.color)
console.log(car2.startEn())
console.log(car2.paint("Red"))

//car number 3
console.log(car3.brand, car3.model, car3.year, car3.color)
console.log(car3.startEn())
console.log(car3.paint("Green"))

//2
class person{
    constructor(name, lastname){
        this._name = name;
        this._lastname = lastname;
        
    }
    get name(){
        return this._name
    }
    get last(){
        return this._lastname
    }
    
    
}
const prs1 = new person("Giorgi", "Narindoshvili")
const prs2 = new person("Zura", "Shavadze")

console.log(prs1)
console.log(prs2)