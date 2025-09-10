//1 https://www.codewars.com/kata/59df2f8f08c6cec835000012
// function meeting(s) {
//     let upper = s.toUpperCase();
//     upper = upper.split(";");
//   for(let i = 0; i < upper.length; i ++ ){
//       upper[i] = upper[i].split(":").reverse();
//     }
//   return upper.sort().reduce((acc, name1) => {
//     return acc += `(${name1[0]}, ${name1[1]})`
//   }, "")
    
// }

//2 https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript
// function bingo(ticket, win){
//   let miniWins = 0;
//   for(let i = 0; i < ticket.length; i ++ ){
//     const [str, num] = ticket[i]
//     for(let j = 0; j < str.length; j ++ ){
//       if(str.charCodeAt(j) === num){
//         miniWins++;
//         break;
//       }
//     }
//   }
//   return miniWins >= win ? "Winner!":"Loser!"
// }

//3