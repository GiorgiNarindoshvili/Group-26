//1
const promise1 = new Promise((resolve)=>{
    resolve("Hello, Promise!")
    
})
promise1
    .then((result1) => {console.log(result1);})


//2
const promisses = new Promise((reject)=> {
    reject("Something went wrong!")
})

promisses
    .then((r) => {console.log(r);})
    .catch((errorr) => {console.log(errorr)})

//3
const promise11 = new Promise((resolve)=>{
    setTimeout(() =>{
        resolve("2 seconds have passed")
    }, 2000)
})

promise11
    .then((resulti) => {console.log(resulti)})

//4
const Promisee = new Promise((resolve, reject)=>{
    if(Math.random() < 0.5){
        resolve("Success!")
    }else{
        reject("Failed")
    }
})

Promisee
    .then((resu) => {console.log("Resolved: ", resu)})
    .catch((re) => {console.log("Failed: ", re)})


//5 
const resso = new Promise((resolve)=>{
    resolve(5)
})

resso
    .then((nums) =>{
        nums = nums * 2;
        console.log(nums);
        return nums;
    })
    .then((nums) =>{
        nums = nums * 2;
        console.log(nums);
        return nums;
    })
    .then((nums) =>{
        nums = nums * 2;
        console.log(nums);
        return nums;
    })
    .then((nums) =>{
        nums = nums * 2;
        console.log(nums);
        return nums;
    })
    .then((nums) =>{
        nums = nums * 2;
        console.log(nums);
        return nums;
    })

//6
const promis11 = new Promise((resolve)=>{
    setTimeout(() =>{
        resolve("Data fetched!")
    }, 1000)
})
promis11
    .then((rs) => {console.log(rs);})