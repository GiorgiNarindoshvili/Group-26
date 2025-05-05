import { sum, myName, division } from "./script2.js";

console.log(sum(5, 30))
console.log(myName("Giorgi"))
console.log(division(120, 10))


//2
//first example
let age = 18;
const voteAdult = age >= 18 ? "Yes" : "No"
console.log(voteAdult)

//second example
let number1 = 20
const compare = number1 >= 20 ? "It's greater than 20" : "It's not greater than 20"
console.log(compare)

//third
let age1 = 14;
const application = age1 >= 14 ? "It's allowed to us to get him in this gym" : "We can't apply him in gym according to his age"
console.log(application)


//3 
//first example
let list1 = [1,2,3]
console.log(list1.map((x) => {return x * 2}))

//second example 
let list2 = [1,2,3,4,5,6,7,8,9,10]
console.log(list2.filter((y) => {return y % 2 == 0}))

//third
let list3 = ["Giorgi", "Gega", "Niko", "Nino"]
console.log(list3.filter((na) => {return na[0] != "G"}))

//4
//first example
console.log(true && "Hello That's me giorgi")

//second
console.log(true ?? false)

//third
console.log("12345" ?? "Giorgi")

//5 
//first example of default promise
let name  = "Luka"
const promise1 = new Promise((resolve, reject) =>{
    if(name == "Giorgi"){
        setTimeout(() => {
        resolve("Hello My name is Giorgi")
    }, 1000)
    }else{
        reject("Enter Name Correcttly")
    }
    
    
})
promise1
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)})


//second
const promise2 = new Promise((resolve) => {
    resolve("You're 14 years old")
})
promise2.
    then((res) => {console.log(res)})

//third
const promise3 = new Promise((resolve, reject) => {
    reject("Message is rejected!")
})
promise3
    .then((res) => {console.log(res)})
    .catch((err) => {console.error(err)})

//async await functions

//first example
const pro1 = async() => {
    let name1 = await "Giorgi Narindoshvili";
    console.log(name1)
}
pro1()

//second
const pro2  = async() =>{
    let num = await 1;
    console.log(num)
}
pro2()

//third
const pro3 = async() => {
    let name23 = await "Second Name is Giga";
    console.log(name23)
}
pro3()