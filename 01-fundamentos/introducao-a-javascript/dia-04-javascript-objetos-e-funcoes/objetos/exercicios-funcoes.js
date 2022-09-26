//SOMA
function sum(num1, num2){
    return num1 + num2
}

//console.log(sum(10, 20));

//MAIOR DE 2 NUMEROS

function biggest (firstNumber, secondNumber){
    if(firstNumber > secondNumber){
        return 'O maior valor é: ' + firstNumber;
    }else if(firstNumber === secondNumber){
        return 'Empate';
    }else{
        return 'O maior valor é: ' + secondNumber;
    }
}

console.log(biggest(10, 5));


function fullName(firstName, lastName){
    return (firstName + ' ' + lastName);
}
console.log(fullName('Jack', 'Xablau'))

function generateArray(character, num){
    let characterArray = [];
    for(let index = 0; index < num; index += 1){
        characterArray.push(character);
    }
    return characterArray
}

console.log(generateArray('*', 10));