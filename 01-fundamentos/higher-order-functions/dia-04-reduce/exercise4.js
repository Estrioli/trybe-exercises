// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];

const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

const studentAverage = (students, grades) => {
  return students.map((student, index) => {     //'pedro henrique'
      let media = grades[index].reduce((acc, cur) => {       //[9, 8, 10, 7, 5] 
        return acc + cur;   //soma as notas
      }) / 5;  // divide a soma/qtd  para media
   return { name: student, average: media }; //retorno do map 
  });
};
console.log(studentAverage(students, grades));


// const numbers = [1,2,3,4,5]
// const vogais = ['a', 'e', 'i', 'o', 'u']

// numbers.forEach((numero, index) => {
// console.log(numbers[index], vogais[index]);
// })

//retorna um array com cada elemento ao quadrado

// let numberQuadrado = numbers.map((number) => (number**2))
// console.log(numberQuadrado);

// let umNumero = numbers.reduce((acc, number) => acc+number)
// console.log(umNumero);