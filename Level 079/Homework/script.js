//1
let number1 = 80;
let number2 = 50

const swap = [number1, number2] = [number2, number1]
console.log(swap)

//2
//first example
const lst = [1,2,3,4,5,6]
const[first, second, ...rest] = lst
console.log(first)
console.log(second)
console.log(rest)

//3
//second example
const lst1 = {name1: "Giorgi", lastname1 : "Narindoshvili"}
const{firstone, ...rest2} = lst1
console.log(firstone)
console.log(rest2)

//third
const lst3 = [15, 60, 43]
const[firsto, secondo, ...rest3] = lst3
console.log(firsto)
console.log(secondo)
console.log(rest3)

//4 
//first example
const lsta = [13, 89, 35, 65, 78];
const lsta2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Lstao = [...lsta, ...lsta2];
console.log(Lstao)

//second example 
const personal1 = {name1: "Daviti" , Lastname1: "Latsabidze"};
const personal2 = {namese: "Erekle", Lastnamese: "Shavdatuashvili"};

const concatenate = {...personal1, ...personal2}
console.log(concatenate)

//third

const person1 = {namep: "Zura", age: 15}
const person2 = {namep2: "Giga", agep2: 26}
const person3 = {namep3: "Ilia", agep3: 35}

const allperson = {...person1, ...person2, ...person3}
console.log(allperson)


function magic(...nums) {
    let sum = 0;
    nums.filter(n => n % 2 == 0).map(el => sum+= el);
    return sum;
  }
  console.log(magic(1, 2, 3, 4, 5, 6));