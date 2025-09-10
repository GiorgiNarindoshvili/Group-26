//1https://www.codewars.com/kata/5b6db1acb118141f6b000060/train/javascript
// function recycle(array) {
//   const bins = {
//     paper: [],
//     glass: [],
//     organic: [],
//     plastic: []
//   };
  
//   array.forEach(item => {
    
//     if(item.material){
//       bins[item.material].push(item.type)
//     }
//     if (item.secondMaterial) {
//       bins[item.secondMaterial].push(item.type);
//     }
//   })
//   return[
//     bins.paper,
//     bins.glass,
//     bins.organic,
//     bins.plastic
//   ]
// }