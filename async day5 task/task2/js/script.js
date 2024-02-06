// Create header element and append it to the wrapper
const header = document.createElement("header");
const headerIcon = document.createElement("i");
headerIcon.classList.add("bx", "bx-left-arrow-alt");
header.append(headerIcon);
header.textContent = "Weather App";
document.querySelector(".wrapper").appendChild(header);

// Create input-part section and its child elements
const inputPart = document.createElement("section");
inputPart.classList.add("input-part");

const infoTxt = document.createElement("p");
infoTxt.classList.add("info-txt");
inputPart.appendChild(infoTxt);

const content = document.createElement("div");
content.classList.add("content");

const cityInput = document.createElement("input");
cityInput.setAttribute("type", "text");
cityInput.setAttribute("spellcheck", "false");
cityInput.setAttribute("placeholder", "Enter city name");
cityInput.setAttribute("required", "true");
content.appendChild(cityInput);

const separator = document.createElement("div");
separator.classList.add("separator");
content.appendChild(separator);

const getLocationBtn = document.createElement("button");
getLocationBtn.textContent = "Get Device Location";
content.appendChild(getLocationBtn);

inputPart.appendChild(content);
document.querySelector(".wrapper").appendChild(inputPart);

// Create weather-part section and its child elements
const weatherPart = document.createElement("section");
weatherPart.classList.add("weather-part");

const weatherIcon = document.createElement("img");
weatherIcon.setAttribute("src", "");
weatherIcon.setAttribute("alt", "Weather Icon");
weatherPart.appendChild(weatherIcon);

const temp = document.createElement("div");
temp.classList.add("temp");
const tempNumb = document.createElement("span");
tempNumb.classList.add("numb");
tempNumb.textContent = "_";
const tempDeg = document.createElement("span");
tempDeg.classList.add("deg");
tempDeg.textContent = "°C";
temp.appendChild(tempNumb);
temp.appendChild(tempDeg);
weatherPart.appendChild(temp);

const weatherDesc = document.createElement("div");
weatherDesc.classList.add("weather");
weatherDesc.textContent = "_ _";
weatherPart.appendChild(weatherDesc);

const locationDiv = document.createElement("div");
locationDiv.classList.add("location");
const locationIcon = document.createElement("i");
locationIcon.classList.add("bx", "bx-map");
const locationText = document.createElement("span");
locationText.textContent = "_, _";
locationDiv.appendChild(locationIcon);
locationDiv.appendChild(locationText);
weatherPart.appendChild(locationDiv);

const bottomDetails = document.createElement("div");
bottomDetails.classList.add("bottom-details");

const feelsColumn = document.createElement("div");
feelsColumn.classList.add("column", "feels");
const feelsIcon = document.createElement("i");
feelsIcon.classList.add("bx", "bxs-thermometer");
const feelsDetails = document.createElement("div");
feelsDetails.classList.add("details");
const feelsTemp = document.createElement("div");
feelsTemp.classList.add("temp");
const feelsNumb = document.createElement("span");
feelsNumb.classList.add("numb-2");
feelsNumb.textContent = "_";
const feelsDeg = document.createElement("span");
feelsDeg.classList.add("deg");
feelsDeg.textContent = "°C";
feelsTemp.appendChild(feelsNumb);
feelsTemp.appendChild(feelsDeg);
const feelsDesc = document.createElement("p");
feelsDesc.textContent = "Feels like";
feelsDetails.appendChild(feelsTemp);
feelsDetails.appendChild(feelsDesc);
feelsColumn.appendChild(feelsIcon);
feelsColumn.appendChild(feelsDetails);
bottomDetails.appendChild(feelsColumn);

const humidityColumn = document.createElement("div");
humidityColumn.classList.add("column", "humidity");
const humidityIcon = document.createElement("i");
humidityIcon.classList.add("bx", "bxs-droplet-half");
const humidityDetails = document.createElement("div");
humidityDetails.classList.add("details");
const humidityValue = document.createElement("span");
humidityValue.textContent = "_";
const humidityDesc = document.createElement("p");
humidityDesc.textContent = "Humidity";
humidityDetails.appendChild(humidityValue);
humidityDetails.appendChild(humidityDesc);
humidityColumn.appendChild(humidityIcon);
humidityColumn.appendChild(humidityDetails);
bottomDetails.appendChild(humidityColumn);

weatherPart.appendChild(bottomDetails);
document.querySelector(".wrapper").appendChild(weatherPart);

//////////////////

const wrapper1 = document.querySelector(".wrapper"),
inputPart1 = document.querySelector(".input-part"),
infoTxt1 = inputPart.querySelector(".info-txt"),
inputField = inputPart.querySelector("input"),
locationBtn = inputPart.querySelector("button"),
weatherPart1 = wrapper1.querySelector(".weather-part"),
wIcon = weatherPart.querySelector("img"),
arrowBack = wrapper1.querySelector("header i");

let api;
let concatStrings = splitString[0] + splitString[1],
lastString = ["c", "7", "e", "e"],
reverseString = lastString.reverse().join("");

inputField.addEventListener("keyup", e =>{
    // if user pressed enter btn and input value is not empty
    if(e.key == "Enter" && inputField.value != ""){
        requestApi(inputField.value);
        inputField.blur();
    }
});

locationBtn.addEventListener("click", () =>{
    if(navigator.geolocation){ // if browser support geolocation api
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        alert("Your browser not support geolocation api");
    }
});
function requestApi(city){
    const key = reverseString + concatStrings;
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
    fetchData();
}

function onSuccess(position){
    const {latitude, longitude} = position.coords; // getting lat and lon of the user device from coords obj
    const key = reverseString + concatStrings;
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`;
    fetchData();
}


function onError(error){
    infoTxt.classList.add("error");
    // if any error occur while getting user location then we'll show it in infoText
    infoTxt.innerText = error.message;
}

function fetchData(){
    infoTxt.innerText = "Getting weather details...";
    infoTxt.classList.add("pending");
    // getting api response and returning it with parsing into js obj and in another 
    // then function calling weatherDetails function with passing api result as an argument
    fetch(api).then(res => res.json()).then(result => weatherDetails(result)).catch(() =>{
        infoTxt.classList.replace("pending", "error");
        infoTxt.innerText = "Something went wrong";
    });
}

function weatherDetails(info){
    if(info.cod == "404"){ // if user entered city name isn't valid
        infoTxt.classList.replace("pending", "error");
        infoTxt.innerText = `${inputField.value} isn't a valid city name`;
    }else{
        //getting required properties value from the whole weather information
        const city = info.name;
        let country = info.sys.country;
        const {description, id} = info.weather[0];
        const {temp, feels_like, humidity} = info.main;

        for(i in countryList){
            if(i == country){
              country = countryList[i];
            }
          }
        
        // custom weather icon according to the id which api gives to us
        if(id == 800){
            wIcon.src = "icons/clear.svg";
        }else if(id >= 200 && id <= 232){
            wIcon.src = "icons/storm.svg";  
        }else if(id >= 600 && id <= 622){
            wIcon.src = "icons/snow.svg";
        }else if(id >= 701 && id <= 781){
            wIcon.src = "icons/haze.svg";
        }else if(id >= 801 && id <= 804){
            wIcon.src = "icons/cloud.svg";
        }else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
            wIcon.src = "icons/rain.svg";
        }
        
        //passing a particular weather info to a particular element
        weatherPart.querySelector(".temp .numb").innerText = Math.floor(temp);
        weatherPart.querySelector(".weather").innerText = description;
        weatherPart.querySelector(".location span").innerText = `${city}, ${country}`;
        weatherPart.querySelector(".temp .numb-2").innerText = Math.floor(feels_like);
        weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;
        setTimeout(()=>{
            infoTxt.classList.remove("pending", "error");
            infoTxt.innerText = "";
            inputField.value = "";
            wrapper1.classList.add("active");
        }, 800);
    }
}

arrowBack.addEventListener("click", ()=>{
    wrapper1.classList.remove("active");
});