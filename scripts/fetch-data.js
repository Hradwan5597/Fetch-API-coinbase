const dropdown = document.getElementById('coin-select');
const idElement=document.getElementById('id');
const symbolElement = document.getElementById('symbol');
const supplyElement = document.getElementById('supply');
const priceElement = document.getElementById('priceUsd');
const changePercent24HrElement = document.getElementById('changePercent24Hr');

let coinData = [];

fetch('https://api.coincap.io/v2/assets')
.then(response => {
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);
  }
  return response.json();
})
.then(data => {
  coinData = data.data;
  populateDropdown(coinData);
  
});



function populateDropdown(data){

    data.forEach(item => {

        const option = document.createElement('option');
        option.value = item.id;
        option.text = item.id;
        dropdown.appendChild(option);

      });

      addEventListener('change',displaySelectedCryptocurrency);
    }

function displaySelectedCryptocurrency() {

        const selectedCryptocurrencyId = dropdown.value;
        const selectedCryptocurrency = coinData.find(item => item.id === selectedCryptocurrencyId);
    
            idElement.textContent=selectedCryptocurrency.id;
            symbolElement.textContent = selectedCryptocurrency.symbol;
            supplyElement.textContent = Math.round(selectedCryptocurrency.supply);
            priceElement.textContent = selectedCryptocurrency.priceUsd;
            changePercent24HrElement.textContent = selectedCryptocurrency.changePercent24Hr;
    }