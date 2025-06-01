const inn = document.getElementById('inner');

let x = 0;
let y = 0;

const down = setInterval(function(){
    if (x === 247){
        clearInterval(down);
        const Right = setInterval(function(){
            if (y === 250){
                clearInterval(Right);
                const Up = setInterval(function(){
                    if (x === 1){
                        clearInterval(Up)
                        const left = setInterval(function(){
                            if(x === 1){
                                clearInterval(left)
                            }
                            x++;
                            inn.style.left = `${x}px`;
                        }, 10)
                    }
                    x--;
                    inn.style.top = `${x}px`;
                }, 10)
            }
            y++;
            inn.style.left = `${y}px`;
        }, 10)
    }
    x++;
    inn.style.top = `${x}px`;
}, 10)