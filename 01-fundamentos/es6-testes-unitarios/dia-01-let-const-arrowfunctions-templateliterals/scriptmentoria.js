// Exercício 1: Escreva uma função que dado um valor numérico retorne se o valor é par.
// const par = number => number % 2 === 0? 
// console.log('par'): console.log('impar'); 

// return par(2)


// Exercício 2: Escreva uma função que recebe por parâmetro um array de números e retorna a soma dos números pares.
const funcao = array => {
let soma = 0;

    for (let index = 0; index < array.length; index+=1) {
        array[index] % 2 === 0? 
        soma += array[index]:
        soma += 0
    typeof(1)
}
console.log(soma);
}
funcao([2,1,1,1,3,0])


// Exercício 3: Escreva uma função que dado um parâmetro retorna se o tipo de dado é Number.

// Exercício 4: Escreva uma função que receba um nome de usuário e retorne a seguinte mensagem: "Boas vindas, USERNAME!". Valide que o tipo de dado seja string e o texto tenha pelo menos 1 caracter, e caso o parâmetro não atenda alguma das condições o retorno deve ser a string "Parâmetro inválido.".

// Exercício 5: Escreva uma função que calcule a velocidade final de um objeto em queda livre dado o tempo que levou para atingir o solo. A fórmula para o cálculo é velocidade = tempo * gravidade. Considere a gravidade constante de 9.8.

// Exercício 6: Utilizando operadores ternários e arrow functions reescreva a seguinte função:

// function isZero(number) {
// 	if (number === 0) {
// 		return "Zero";
// 	}
// 	return "Not zero";
// }
// Exercício 7: Escreva uma função que, dado um array, verifique se todos os valores são iguais. Valide que o tipo de entrada seja array e que o tamanho seja maior que 1, e caso a entrada não atenda alguma das condições o retorno deve ser a string "Parâmetro inválido.".