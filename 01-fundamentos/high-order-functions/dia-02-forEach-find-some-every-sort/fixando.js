const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
  emailListInData.forEach((email) => console.log(`O email ${email} esta cadastrado em nosso banco de dados!`)) 


const numeros = [1,2,3,4,5,6,7,8,9,10]
const numerosBaguncados = [7,5,8,3,2,1,9,13]

console.log(numeros.some((numero) => numero % 2 == 0))
console.log(numeros.every((numero) => numero > 0))
console.log(numeros.find((numero) => numero % 2 == 0))
console.log(numeros.filter((numero) => numero % 2 == 0))

let string = '';
numeros.forEach((numero) => string+= numero)
console.log(string);

console.log(numerosBaguncados.sort((a, b) => b-a))

console.log(numeros.map((numero) => numero * 2))

console.log(numeros.reduce((acumulador, atual) => acumulador+atual))

