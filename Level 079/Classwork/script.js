//1
//first example

//list examples
const numbers = [1, 3, 5];
const [first, third, fifth] = numbers

console.log(first)
console.log(third)
console.log(fifth)

//second
const numbersEven = [2, 4, 6];
const [second, fourth, sixth] = numbersEven

console.log(second)
console.log(fourth)
console.log(sixth)

//third
const numbers1 = [1, 2, 3, 4, 5, 6];
const [first2, second2, third2, fourth2, fifth2, sixth2] = numbers1

console.log(first2)
console.log(second2)
console.log(third2)
console.log(fourth2)
console.log(fifth2)
console.log(sixth2)

//object examples

//first example
const person1 = {name1: "Giorgi", age1: 15};
const {name1, age1} = person1

console.log(name1)
console.log(age1)


//second
const car1 = {make1: "Mustang", year1: 2019};
const {make1, year1} = car1

console.log(make1)
console.log(year1)

//third

const person2 = {name2: "Data", age2: 17};
const {name2, age2} = person2

console.log(name2)
console.log(age2)

//2
//first example

const arr1 = [1, 2, 3, 4, 5, 6]

const[firstone, secondtwo, ...rest] = arr1
console.log(firstone);
console.log(secondtwo)
console.log(rest)

//second example
const namee = {nametw: "Giorgi", lst: "Narindoshvili"}
const{nametw, ...rest1} = namee
console.log(nametw)
console.log(rest1)

//third
const arr2 = [8, 3, 12, 16, 2, 9]

const[firstone1, secondtwo2, ...rest2] = arr2
console.log(firstone1);
console.log(secondtwo2)
console.log(rest2)

//3
const arrr1 = [1, 2, 3];
const arrr2 = [4, 5, 6];

const Array = [...arrr1, ...arrr2];

console.log(Array);

//second example
const person = { name: "Giorgi", age: 15 };
const newPerson = { ...person };

console.log(newPerson);

//third
const ar1 = [15, 60, 3];
const ar2 = [98, 23, 123];

const bigarray = [...ar1, ...ar2];

console.log(bigarray);

//4
//so i noticed that ..spread and rest have differencies, that spread can join the lists or object from our list and rest can split lists or our object together and display it on screen, also ..spread is work