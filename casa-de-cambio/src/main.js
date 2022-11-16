import Swal from "sweetalert2";

import './style.css';

const searchButton = document.querySelector('.search-btn');

const coinInput = document.querySelector('#coin-input');

const coinsList = document.querySelector('.coins');

function fetchAPI(coin){
    const url = `https://api.exchangerate.host/latest?base=${coin}`;
    return fetch(url)
    .then((response) => response.json())
    .then((data) => {
       if (data.base !== coin.toUpperCase()){
        throw new Error('Moeda não existente!')
       }
       return data.rates;
    })
}

function renderCoins(coins) {
    coinsList.innerHTML = '';

    const coinsArray = Object.entries(coins); //retorna objeto em array
    console.log(coinsArray);

coinsArray.forEach((coin) => {
    //coin = [ ['sss', 222]]
    //coinname=sss value=2222
    const [coinName, value] = coin;
    
    const li = document.createElement('li');
    li.textContent = `${coinName} - ${value}`;
    coinsList.appendChild(li)
})
}

function handleSearch(){
    const coin = coinInput.value; //valor do input USD

    if(!coin) {
        Swal.fire({
          icon: 'error',
          title: 'opsss...',
          text: 'Você precisa digitar uma moeda'
        })
    }

    fetchAPI(coin) //retorno dela é data.rates
    .then(renderCoins)
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'opsss...',
            text: error.message('Você precisa digitar uma moeda')
          })
    });
}

searchButton.addEventListener('click', handleSearch);
