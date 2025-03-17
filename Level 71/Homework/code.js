//1
//This Code helps our child container to move in parent div through right bottom, left, top.

//we have to take our element by id and connect it into js file
// const child = document.getElementById("child-container");


// let left = 0;
// let y = 0;
// let direction = "right"

//lets start to make directions for child-div
// const moveRight = setInterval(function(){
//     if(direction == "right"){
//         left++;
//         if(left == 240){
//             direction = "bottom"
//         }
//     } else if(direction == "bottom"){
//         y++;
//         if(y == 300){
//             direction = "left";
//         }
//     } else if(direction == "left"){
//         left--;
//         if(left == 0){
//             direction = "top"
//         }
//     } else{
//         y--;
//         if(y == 0 && left == 0){
//             clearInterval(moveRight);
//         }
//     }

//     child.style.left = left + 'px';
//     child.style.top = y + 'px';
// }, 10);