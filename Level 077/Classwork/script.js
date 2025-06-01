//1 
//First Example of for of loop
const arr1 = [1,2,3,4,5];

for(const a of arr1){
    console.log(a);
}

//second Example of for of loop
const name1 = "Giorgi";

for(const names of name1){
    console.log(names);
}

//third Example of for of loop
const teams = ["Barcelona", "Real Madrid", "Valencia"];

for(const t of teams){
    console.log(t);
}

//we can use for of loop on strings, arrays, string arrays and numbers list

//2
//First Example of for in loop
const numberslst = [10 , 20, 30, 40, 50];
for(const lst in numberslst){
    console.log(lst)
}

////Second Example of for in loop
const names1 = {namee: "Giorgi", age: 16};
for(const na in names1){
    console.log(na)
}

//third Example of for in loop
const players = ["Cristiano", "Messi", "Sergio Ramos"];
for(const play in players){
    console.log(play)
}
//it also worked like of loop but the difference is that of loop gives a value of variable and in in loop, it gives you variable name in console.

//3

//First Example of function and const arrow function
function multiply(x, y){
    return x * y
}

const multiply2 = (x, y) => {
    return x * y
}

console.log(multiply(6,12))
console.log(multiply2(3,6))

//second Example of function and const arrow function
function myname(h, n){
    return h + " " + n
}

const mentorname = (h, n) =>{
    return h + " " + n
}

console.log(myname("Hello", "Giorgi"))
console.log(mentorname("Hello", "Data"))

//4
function subtract(a, b) {
    return a - b
}

console.log(subtract(1200, 600))

//5
const car = {
    name2:"Mustang",
    model: "GT",
    year: 2017,
    info(){
        this.name2 == "BMW"
    }
};

car.info()
console.log(car.name2)

//6
const key = "name";
const user = {
    [key]: "Giorgi",
    age: 16
};

console.log(user.name);

//7
const person1 = {
    name3: "Giorgi",
    age16: 16,
    sex: "male",
}

const person2 = {
    name3: "Tekla",
    age16: 15,
    sex: "Female"
}

const assign = Object.assign({}, person1, person2)
console.log(assign)






