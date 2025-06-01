//1 შექმენით რაიმე Array და გამოიყენეთ slice მეთოდი 3'ჯერ

//1
const array = ["C++", "Java", "Python", "React"];
console.log(array.slice(0, 2))

//2
const arr1 = new Array("Giorgi", "Studies", "In", "GOAL-ORIENTED-ACADEMY");
console.log(arr1.slice(1, 4))

//3
const array1 = new Array();
array1[0] = "Apple"
array1[1] = "Pineanpple"
array1[2] = "Peach"
array1[3] = "Grape"
console.log(array1.slice(0, 3))

//2  გამოიტანეთ ახლანდელი, ზუსტი დრო ასეთი ფორმატით: "წელი/თვე/დღე/საათი/წამი"
const date = new Date();
console.log(date)

//3 გააკეთეთ password generator javascript'ით (გამოიყენეთ Math.random())

function generatePassword() {
    var length = 7,
        password = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234556789",
        randmm = "";
    for (var i = 0, n = password.length; i < length; ++i) {
        randmm += password.charAt(Math.floor(Math.random() * n));
    }
    return randmm;
}