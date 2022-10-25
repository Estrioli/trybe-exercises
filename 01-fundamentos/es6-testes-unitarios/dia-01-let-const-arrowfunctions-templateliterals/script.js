const testingScope = escopo => {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    escopo === true ?
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`) :
    console.log('Não devo ser utilizada fora do meu escopo (else)');
    
  }

  testingScope(false);

  

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  

  const sortOddsAndEvens = () => `Os números ${oddsAndEvens.sort((a , b) => a - b )} se encontram ordenados de forma crescente!`

  console.log(sortOddsAndEvens()); // será necessário alterar essa linha 😉

//   const nomes = ['rafael', 'bruno', 'xablau', 'Bruno']
//   console.log(nomes.sort());


//exercicio parte II

//EX1

const factorial = (param) => {
    let result = 4

    for (let index = result; index >= 1; index-=1) {
        console.log(index)
    }
    return param!
} 