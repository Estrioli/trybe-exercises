// const newEmployees = () => {
//     const employees = {
//       id1: recEmployees('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: recEmployees('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: recEmployees('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

//   const recEmployees = (nome) => {
//     const email = nome.split(' ').join('_').toLowerCase()
//     return {nomeCompleto : nome,
//             email: `${email}@trybe.com`}
//   }

//   console.log(newEmployees());

// const funcao = (name) => `Olá! ${name}!`;
// const executaFuncao = (name,fn) => {
//     return fn(name)
    
// }

// console.log(executaFuncao('rafael',funcao));


// Sorteador de loteria
// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

const sorteio = (numero, check) => {
    const sorteado = getRandomArbitrary(1, 5)
    return check(numero, sorteado)
    
}
const verificar = (numero1, numero2) => {
   return numero1 === numero2 ? 'Parabéns você ganhou' : 'Tente novamente'
}

sorteio(3, verificar)

console.log(sorteio(1, verificar));



//melhor exemplo de callback*
// const ex = (nome) => `Ola ${nome}`

// const curtir = (nome, ficante) => ficante(nome)

// console.log(curtir('rafael', ex));
