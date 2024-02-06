// Create wrapper div
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

// Create header element
const header = document.createElement('header');
header.textContent = 'Currency Exchange';
wrapper.appendChild(header);

// Create form element
const form = document.createElement('form');
form.setAttribute('action', '#');
wrapper.appendChild(form);

// Create amount div
const amountDiv = document.createElement('div');
amountDiv.classList.add('amount');
form.appendChild(amountDiv);

// Create amount paragraph
const amountParagraph = document.createElement('p');
amountParagraph.textContent = 'Enter Amount';
amountDiv.appendChild(amountParagraph);

// Create amount input
const amountInput = document.createElement('input');
amountInput.setAttribute('type', 'text');
amountInput.setAttribute('value', '1');
amountDiv.appendChild(amountInput);

// Create drop-list div
const dropListDiv = document.createElement('div');
dropListDiv.classList.add('drop-list');
form.appendChild(dropListDiv);

// Create 'From' div
const fromDiv = document.createElement('div');
fromDiv.classList.add('from');
dropListDiv.appendChild(fromDiv);

// Create 'From' paragraph
const fromParagraph = document.createElement('p');
fromParagraph.textContent = 'From';
fromDiv.appendChild(fromParagraph);

// Create select-box for 'From'
const fromSelectBox = document.createElement('div');
fromSelectBox.classList.add('select-box');
fromDiv.appendChild(fromSelectBox);

// Create flag image for 'From'
const fromFlagImg = document.createElement('img');
fromFlagImg.setAttribute('src', 'https://flagcdn.com/48x36/us.png');
fromFlagImg.setAttribute('alt', 'flag');
fromSelectBox.appendChild(fromFlagImg);

// Create select element for 'From'
const fromSelect = document.createElement('select');
fromSelectBox.appendChild(fromSelect);

// Create icon div
const iconDiv = document.createElement('div');
iconDiv.classList.add('icon');
dropListDiv.appendChild(iconDiv);

// Create exchange icon
const exchangeIcon = document.createElement('i');
exchangeIcon.classList.add('fas', 'fa-exchange-alt');
iconDiv.appendChild(exchangeIcon); 

// Create 'To' div
const toDiv = document.createElement('div');
toDiv.classList.add('to');
dropListDiv.appendChild(toDiv);

// Create 'To' paragraph
const toParagraph = document.createElement('p');
toParagraph.textContent = 'To';
toDiv.appendChild(toParagraph);

// Create select-box for 'To'
const toSelectBox = document.createElement('div');
toSelectBox.classList.add('select-box');
toDiv.appendChild(toSelectBox);

// Create flag image for 'To'
const toFlagImg = document.createElement('img');
toFlagImg.setAttribute('src', 'https://flagcdn.com/48x36/in.png');
toFlagImg.setAttribute('alt', 'flag');
toSelectBox.appendChild(toFlagImg);

// Create select element for 'To'
const toSelect = document.createElement('select');
toSelectBox.appendChild(toSelect);

// Create exchange-rate div
const exchangeRateDiv = document.createElement('div');
exchangeRateDiv.classList.add('exchange-rate');
exchangeRateDiv.textContent = 'Getting exchange rate...';
form.appendChild(exchangeRateDiv);

// Create button
const button = document.createElement('button');
button.textContent = 'Get Exchange Rate';
form.appendChild(button);

// Append the wrapper to the body
document.body.appendChild(wrapper);

// Load scripts
const countryListScript = document.createElement('script');
countryListScript.setAttribute('src', 'js/country-list.js');
document.body.appendChild(countryListScript);

const scriptScript = document.createElement('script');
scriptScript.setAttribute('src', 'js/script.js');
document.body.appendChild(scriptScript);


const dropList = document.querySelectorAll("form select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = document.querySelector("form button");

for (let i = 0; i < dropList.length; i++) {
    for(let currency_code in country_list){
        // selecting USD by default as FROM currency and INR as TO currency
        let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "INR" ? "selected" : "";
        // creating option tag with passing currency code as a text and value
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        // inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e =>{
        loadFlag(e.target); // calling loadFlag with passing target element as an argument
    });
}

function loadFlag(element){
    for(let code in country_list){
        if(code == element.value){ // if currency code of country list is equal to option value
            let imgTag = element.parentElement.querySelector("img"); // selecting img tag of particular drop list
            // passing country code of a selected currency code in a img url
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
        }
    }
} 

window.addEventListener("load", ()=>{
    getExchangeRate();
});

getButton.addEventListener("click", e =>{
    e.preventDefault(); //preventing form from submitting
    getExchangeRate();
});

exchangeIcon = document.querySelector(".icon");
exchangeIcon.addEventListener("click", ()=>{
    let tempCode = fromCurrency.value; // temporary currency code of FROM drop list
    fromCurrency.value = toCurrency.value; // passing TO currency code to FROM currency code
    toCurrency.value = tempCode; // passing temporary currency code to TO currency code
    loadFlag(fromCurrency); // calling loadFlag with passing select element (fromCurrency) of FROM
    loadFlag(toCurrency); // calling loadFlag with passing select element (toCurrency) of TO
    getExchangeRate(); // calling getExchangeRate
})

function getExchangeRate(){
    const amount = document.querySelector("form input");
    const exchangeRateTxt = document.querySelector("form .exchange-rate");
    let amountVal = amount.value;
    // if user don't enter any value or enter 0 then we'll put 1 value by default in the input field
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    exchangeRateTxt.innerText = "Getting exchange rate...";
    let url = `https://v6.exchangerate-api.com/v6/7ff92279d2d36bfdd34048fb/latest/${fromCurrency.value}`;
    // fetching api response and returning it with parsing into js obj and in another then method receiving that obj
    fetch(url).then(response => response.json()).then(result =>{
        let exchangeRate = result.conversion_rates[toCurrency.value]; // getting user selected TO currency rate
        let totalExRate = (amountVal * exchangeRate).toFixed(2); // multiplying user entered value with selected TO currency rate
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
    }).catch(() =>{ // if user is offline or any other error occured while fetching data then catch function will run
        exchangeRateTxt.innerText = "Something went wrong";
    });
}