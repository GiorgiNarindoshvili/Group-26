//1
//prtomisses are way to create asynchronous programs which resolves or rejects our result


//2
const promises1 = new Promise((resolve)=>{
    setTimeout(() =>{
        resolve("Hello It's me Giorgi")
    }, 1000)
}) 
promises1
    .then((res) => {console.log(res);})
    .catch((err) => {console.log(err);})

//3
const rejpro = new Promise((reject) => {
    setTimeout(()=>{
        reject("My name ain't Luka")
    },2000)
})

rejpro
    .then((result) => {console.log(result);})
    .catch((rejected) => {console.log(rejected);}) 




//4
const promise3 = new Promise((resolve, reject) =>{
    const names = true
    if(names != "Giorgi"){
        setTimeout(() =>{
        reject("My Name isn't Nika")
    }, 1000)
    }else{
        setTimeout(() =>{
        resolve("My Name is Giorgi")
    },3000)
    }
})

promise3
    .then((result1) => {console.log(result1)})
    .catch((res2)=> {console.log(res2)})