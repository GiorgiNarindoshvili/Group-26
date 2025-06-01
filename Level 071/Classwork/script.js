const small = document.getElementById('small');

let x = 0;
let y = 0;

const Right = setInterval(function(){
    if (x === 257){
        clearInterval(Right);
        const Down = setInterval(function(){
            if (y === 257){
                clearInterval(Down);
                const Left = setInterval(function(){
                    if (x === 1){
                        clearInterval(Left)
                        const moveUp = setInterval(function(){
                            if(x === 1){
                                clearInterval(moveUp)
                            }
                            x--;
                            small.style.top = `${x}px`;
                        }, 10)
                    }
                    x--;
                    small.style.left = `${x}px`;
                }, 10)
            }
            y++;
            small.style.top = `${y}px`;
        }, 10)
    }
    x++;
    small.style.left = `${x}px`;
}, 10)