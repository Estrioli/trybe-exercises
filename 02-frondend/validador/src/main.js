import validator from 'validator';
import './style.css';

const input = document.querySelector('#value');
const select = document.querySelector('#option');
const button = document.querySelector('#button');
const answer = document.querySelector('#answer');
const UUID_VERSION = 4;

button.addEventListener('click', (event) => {
  event.preventDefault();

  const options = {
    cpf: validator.isTaxID(input.value, 'pt-BR'),
    hexColorcor: validator.isHexColor(input.value),
    email: validator.isEmail(input.value),
    uuid: validator.isUUID(input.value, UUID_VERSION),
    url: validator.isURL(input.value),
  };
  console.log(select.value);
  answer.innerHTML = `${select.value} é ${options[select.value]}`;
});
