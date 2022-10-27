const newEmployees = () => {
    const employees = {
      id1: recEmployees('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: recEmployees('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: recEmployees('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const recEmployees = (nome) => {
    const email = nome.split(' ').join('_').toLowerCase()
    return {nomeCompleto : nome,
            email: `${email}@trybe.com`}
  }

  console.log(newEmployees());

const funcao = (name) => `Olá! ${name}!`;
const executaFuncao = (name,fn) => {
    return fn(name)
    
}

console.log(executaFuncao('rafael',funcao));


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



// melhor exemplo de callback*
// const ex = (nome) => `Ola ${nome}`

// const curtir = (nome, ficante) => ficante(nome)

// console.log(curtir('rafael', ex));0


// Crie uma HOF que receberá três parâmetros:

// O primeiro será um array de respostas corretas (soluções);

// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for “N.A”);
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corretorExame = (solucoes, respostas, comparacao) => {
  let pontos = 0;
for (let index = 0; index < solucoes.length; index+=1) {
  pontos += comparacao(solucoes[index], respostas[index]);
}
return pontos
}

const comparacao = (solucao, resposta) => {
  
  if (solucao === resposta) return 1;
  else if (resposta === 'N.A') return 0;
  else return -0.5
}

console.log(corretorExame(RIGHT_ANSWERS, STUDENT_ANSWERS, comparacao));