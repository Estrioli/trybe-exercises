const sayHello = () => {
    return ('hello trybers');
  }
  
  const printGreeting = (callback) => {
      console.log(callback());
  }
  
  printGreeting(sayHello);

/////////////////////////////////////////////////////

  const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }
  
  const initialSum = sumFixAmount(15)
  console.log(initialSum(5));

  //////////////////////////////////////////////////

//   const button = document.querySelector('#signup-button');

// const registerUser = () => {
//   console.log('Registrado com sucesso!');
// };

// button.addEventListener('click', registerUser);

/////////////////////////////////////////////////////////////////

const wakeUp = () => 'Acordando!!'
const breakfast = () => 'Bora tomar café!!'
const toSleep = () => 'Partiu dormir!!'

const doingThings = (func) => func()
// Ao chamar a função doingThings:
console.log(doingThings(wakeUp));
console.log(doingThings(breakfast))
console.log(doingThings(toSleep))

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!