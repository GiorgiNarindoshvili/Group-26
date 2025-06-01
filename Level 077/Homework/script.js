//Copying Of classwork

//1

//example first
const name1 = "Giorgi"

for(const a of name1){
    console.log(a)
}

//second

const cars1 = ["BMW", "Chevrolet", "Rolls-Royce"];

for(const i of cars1){
    console.log(i)
}

//third

const years = [15, 37, 37, 12]

for(const y of years){
    console.log(y)
}

//we can use for of on our list or on our tuples, it will display every element of our variable in console, also on our string too, it will split each letter.

//2
//first example
const bro = "Erekle"

for(const e in bro){
    console.log(e)
}

//second
const numbers = [1, 2, 3, 4, 5, 6, 7]
for(const n in numbers){
    console.log(n)
}

//third
const tuples = ["Giorgi", "Studies", "In GOA"]
for(const t in tuples){
    console.log(t)
}

//we can use in function for also everything, but here's one difference, in function will count, to how many elements are in our function

//3
//first example
function mul(x, y){
    return x * y
}

const mul2 = (x, y) =>{
    return x * y
}
console.log(mul(2,9))
console.log(mul2(2,17))

//second

function str(n, l){
    return n + " " + l
}

const str1 = (n, l) => {
    return n + " " + l
}

console.log(str("Giorgi", "Narindoshvili"))
console.log(str("Erekle", "Narindoshvili"))


//4
function adding(g, t){
    return g + t
}
console.log(adding(100, 500))

//5

const pet = {
    namee: "Rox",
    peet1: "Dog",
    year: 2,
    in(){
        this.namee = "Jack"
    }
}
pet.in()
console.log(pet.namee)
console.log(pet.peet1)
console.log(pet.year)

//6
const info = "last"
const about = {
    [info]: "Narindoshvili",
    age1: 15
     
}
console.log(about.last)

//7 
const persong = {
    namegi: "Giorgi"
}

const personl = {
    namel: "Luka"
}

const print = Object.assign({}, persong, personl)
console.log(print)

//homework

//1

//first example
const namew1 = "Nika"

for(const n of namew1){
    console.log(n)
}

//second example
const list2 = [13, 69, 45, 25]

for(const l of list2){
    console.log(l)
}

//third
const german1 = ["Mercedes", "Audi", "Porsche"];

for(const c of german1){
    console.log(c)
}

//we can use for of on our list or on our tuples, it will display every element of our variable in console, also on our string too, it will split each letter.

//2
//first
const listt = [1,2,3,4,5,6,7]
for(const la in listt){
    console.log(la)
}

//second
const namex = "Alex"
for(const x in namex){
    console.log(x)
}

//third 
const namez = "Zura"
for(const z in namez){
    console.log(z)
}

////we can use in function for also everything, but here's one difference, in function will count, to how many elements are in our function

//3

//first example
function multi(x, y){
    return x * y
}

const multi2 = (x, y) =>{
    return x * y
}
console.log(multi(8,9))
console.log(multi2(6,18))

//second

function string1(x, y){
    return x + " " + y
}

const string2 = (x, y) =>{
    return x + " " + y
}
console.log(string1("Zuka", "Tevzadze"))
console.log(string2("Gabriel", "Bochorishvili"))

//third

function cr1(x, y){
    return x + " " + y
}

const cr2 = (x, y) =>{
    return x + " " + y
}
console.log(cr1("Mercedes", "CLS 63 AMG V8 Biturbo"))
console.log(cr2("BMW", "M5 e39 V10"))

//4
//first
function adding1(g, t){
    return g + t
}
console.log(adding1(50, 200))

//second
function subtract(j, k){
    return j - k
}
console.log(subtract(900, 206))

//third
function divide(l, n){
    return l / n
}
console.log(divide(500, 12))

//5
const car9 = {
    name2:"Mustang",
    informationn(){
        this.name2 == "BMW"
    }
};

car9.informationn()
console.log(car9.name2)

//second
const car4 = {
    name6:"Dodge",
    informationn2(){
        this.name6 == "Toyota"
    }
};

car4.informationn2()
console.log(car4.name6)

//third
const myname = {
    name2:"Gio",
    informationame(){
        this.name2 == "Nana"
    }
};

myname.informationame()
console.log(myname.name2)

//6
//first
const i = "name";
const user = {
    [i]: "Zaza",
    
};

console.log(user.name);

//second
const in2 = "last";
const user2 = {
    [in2]: "Gviniashvili",
    
};

console.log(user2.last);

//third

const i3 = "age1";
const user3 = {
    [i3]: 15,
    
};

console.log(user3.age1);

//7
//first
const pe1 = {
    name3: "Tatia",
    age16: 15,
    sex: "female",
}

const pe2 = {
    name3: "Rati",
    age16: 13,
    sex: "male"
}

const assign1 = Object.assign({}, pe1, pe2)
console.log(assign1)

//second
const pe3 = {
    name3: "Ana",
    age16: 20,
    sex: "female",
}

const pe4 = {
    name3: "Mariami",
    age16: 24,
    sex: "female"
}

const assign2 = Object.assign({}, pe3, pe4)
console.log(assign2)

const pe5 = {
    name3: "Mate",
    age16: 10,
    sex: "male",
}

const pe6 = {
    name3: "Niako",
    age16: 15,
    sex: "female"
}

const assign3 = Object.assign({}, pe5, pe6)
console.log(assign3)



