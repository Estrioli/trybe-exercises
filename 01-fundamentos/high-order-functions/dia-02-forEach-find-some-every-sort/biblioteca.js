const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// const authorBornIn1947 = (array, age) =>
//   array.find((book) => book.author.birthYear === age);
// console.log(authorBornIn1947(books, 1920));

// const smallerName = (books) => {
//    let nameBook;
//    let menor = books[0].name.length
//    books.forEach(book => {
//     if(book.name.length < menor) {
//         menor = book.name.length
//         nameBook = book.name
//     }
//    })
//    return nameBook;
// }
// console.log(smallerName(books))

// const smallerName = (books) => {
//     let nameBook;
//     books.forEach(book => {
//         if(!nameBook || book.name.length < nameBook.length) {

//             nameBook = book.name
//         }
//     });

//     // Variável nameBook que receberá o valor do menor nome;
//     return nameBook;
// }
// console.log(smallerName(books));

//Encontre o primeiro livro cujo nome possui 26 caracteres.

const getNamedBook = (books) => books.find((book) => book.name.length === 26);
console.log(getNamedBook(books));

//Ordene os livros por data de lançamento em ordem decrescente.
const compare = (a, b) => b.releaseYear - a.releaseYear;

const booksOrderedByReleaseYearDesc = (books) => books.sort(compare);
booksOrderedByReleaseYearDesc(books);

console.log(books);

//Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

const everyoneWasBornOnSecXX = (books) =>
  books.every((book) => book.author.birthYear > 1900 && book.author.birthYear < 2000);
console.log(everyoneWasBornOnSecXX(books));

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

const someBookWasReleaseOnThe80s = (books) =>
  books.some((book) => book.releaseYear <= 1990 && book.releaseYear >= 1980);
console.log(someBookWasReleaseOnThe80s(books));

// Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
const authorUnique = (books) =>
  books.every((book) =>
    !books.some(
      (otherBook) => book.author.birthYear === otherBook.author.birthYear
    )
  );
  console.log(authorUnique(books))