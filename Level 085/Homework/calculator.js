//1
function getAnswer(num1, num2, operation) {
    let result;

    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        if (num2 !== 0) {
            result = num1 / num2;
        }
    } else {
        return 'Error: Invalid operation';
    }

    return result;
}

//2
function filter(list1, callback){
    const result2 = []
    for(let i = 0; i < list1.length; i++){
        if(callback(list1[i])){
            result2.push(list1[i])
        }
    }
    return result2
}

function calculator(num1, num2, operat){
    let result1;

    if (operat === 'sum') {
        result1 = num1 + num2;
    } else if (operat === 'subtraction') {
        result1 = num1 - num2;
    } else if (operat === 'multiplication') {
        result1 = num1 * num2;
    } else if (operat === 'division') {
        if (num2 !== 0) {
            result1 = num1 / num2;
        }
    } else {
        return 'Error: Invalid operation';
    }

    return result1;
}


module.exports =  { getAnswer }
module.exports =  { filter, calculator }