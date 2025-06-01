//1
const form = document.getElementById("form1");

form.addEventListener('submit', function(e){
    e.preventDefault();
    

    const name = form.elements.name.name;
    const email = form.elements.email.email;
    const password = form.elements.name.pass;

    console.log(name);
    console.log(email)
    console.log(password)
})

//2
// es6 is introducing us keywords, which we know, cosnt let function and etc, that keywords are created for more easier work in js

//3
//scope's are part of program, which doesn't allow you to call your function(make console.log on it) outside the codeblock, for example, if you have statements like that

//{
    //let age = 15
//}
//console.log(age)
//result of this will be error and it will say "Variable age is undefined", However we can also console it without any problem by using war instead of let, let and const's trying to catch their victim(victim is value) and var can't catch variable, so that means that var doesn't have any problems on scopes.

//trannslate: სკოუპები არის პროგრამირების ნაწილი, რომელიც არ გაძლევს იმის უფლებას რომ გამოიძახო შენი ფუნქცია ქოუდბლოკის გარეშე

//{
    //let age = 15
//}
//console.log(age)
//როგორც ზევით ვნახეთ ამის შედეგი იქნება ერორი და ის იტყვის "ცვლადი არარის დადასტურებული", თუმცა ჩვენ ასევე შეგვიძლია დავაკონსოლოთ იგი ყოველგვარი პრობლემის გარეშე var ქივორდის დახმარებით, ანუ const და let ცდილობენ რო დაიჭირონ თავიანთი მსხვერპლი(ცვლადი), ხოლო ჩვენს ვარს არ შეუძლია ამ ცვლადის დაჭერა, ეს ნიშნავს რომ ვარს არანაირი პრობლემები არ აქვს სკოუპებთან

//4
let bool1 = true

console.log(bool1? "true" : "False")

//2
let bol2 = false
console.log(bol2 ? "true" : "false")

//3
let bol3 = true
console.log(bol3 ? "false": "false")

//5
//1
let temp = 30;

if(temp<=40){
    console.log(true)
}else{
    console.log(false)
}
//2
let score = 8;

if(temp>=12){
    console.log(true)
}else{
    console.log(false)
}

//3
let number = 99;

if(number==100){
    console.log(true)
}else{
    console.log(false)
}

//6
let bool = true;
bool && console.log("You are adult.");

//1
let booo = false;
bool && console.log("You aren't adult")

//2
let booo2 = true
booo2 && console.log("You are adult again")