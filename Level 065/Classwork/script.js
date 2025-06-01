//1 შექმენით Array array literal'ით (ხელით)

const arr = ["HTML", "CSS", "Java", "Python"];
console.log(arr)

//2  შექმენით Array new keyword'ით და ელემენტები ჩაწერეთ Array ფუნქციაში

const array = new Array("Giorgi", "Studies", "In Goal- Oriented Academy");
console.log(array)

//3  შექმენით Array new keyword'ით, Array ფუნქციაში ჩაწერეთ რამდენი ელემენტი გინდათ რომ იყოს და შემდეგ ცალცალკე მიანიჭეთ ინდექსებს თავიანთი მნიშვნელობები
const array2 = new Array(3)
array2[0] = "Apple"
array2[1] = "Peach"
array2[2] = "Grapes"

console.log(array2)

//4 გამოიყენეთ indexing სამივე array'ზე
//1
const arr1 = ["HTML", "CSS", "Java", "Python"];
console.log(arr1[0], arr1[1])

//2
const ar = new Array("Giorgi", "Studies", "In Goal- Oriented Academy");
console.log(ar[0] ,ar[1])

//3
const array3 = new Array(3)
array3[0] = "Apple"
array3[1] = "Peach"
array3[2] = "Grapes"

console.log(array3[0], array3[1], array3[2])

//5 გამოიყენეთ slicing სამივე array'ზე
//1
const ara1 = ["HTML", "CSS", "Java", "Python"];
console.log(ara1.slice(0, 3))

//2
const ar2 = new Array("Giorgi", "Studies", "In Goal- Oriented Academy");
console.log(ar2.slice(1))

//3
const arry3 = new Array(3)
arry3[0] = "Apple"
arry3[1] = "Peach"
arry3[2] = "Grapes"

console.log(arry3.slice(0))

//6 შექმენით ფუნქცია რომელიც მიიღებს არგუმენტად რაიმე რიცხვს და დააბრუნებს 0'დან მაგ რიცხვამდე რაიმე random რიცხვს
function rndm(){
    var lenght = 7,
        lst = "12345567890"
        ran = "";
    for (var i = 0, n = lst.length; i < lenght; ++i){
        ran += lst.charAt((Math.floor(Math.random() * n)));
    }
    return ran
}

//7 შექმენით interval'ი, რომელიც დაითვლის 30'მდე და შემდეგ გაჩერდება
let count = 0;
const interval = setInterval(function(){
    count += 1
    console.log(5)
    if(count >= 30){
        clearInterval(interval)
    }
} ,200)

//8  გამოიტანეთ თანმიმდევრობით: დღევანდელი დღე(რიცხვი) / თვე / წელი
const date = new Date()
console.log(date)