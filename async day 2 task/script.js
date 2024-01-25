
let head = document.head;
let link = document.createElement('link')
head.append(link);
link.setAttribute('href', "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css", 'rel', "stylesheet", 'integrity', "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN", 'crossorigin', "anonymous")
link.setAttribute('rel', "stylesheet", 'integrity', "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN", 'crossorigin', "anonymous")
link.setAttribute('integrity', "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN", 'crossorigin', "anonymous")
link.setAttribute('crossorigin', "anonymous")
let body = document.body;
body.id="body";
let navbar = document.createElement('nav');
body.append(navbar);
navbar.setAttribute('class', 'd-flex justify-content-center')
navbar.setAttribute('id', 'navbar')

let navdiv = document.createElement('div');
navbar.append(navdiv);
navdiv.setAttribute('class', 'd-flex justify-content-center');
let h3 = document.createElement('h3');
navdiv.append(h3);
h3.setAttribute('class', 'text');
h3.setAttribute('id', 'textinnav');
h3.innerText = "Get wheather of any countries"

let h1 = document.createElement('h1');
body.append(h1);
h1.setAttribute('id', 'title');
h1.setAttribute('class', 'text-center');
h1.innerText = "weather updates and country informations"

let div = document.createElement('div');
body.append(div);



div.setAttribute('class', 'container');
div.setAttribute('id', 'container');
let row = document.createElement('div')
div.append(row);
row.setAttribute('class', 'row')
async function getdata() {
    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();
    console.log(data);
    let count = 0;
    for (var i = 0; i < data.length; i++) {
        let card = document.createElement('div');
        row.append(card);
        card.setAttribute('class','card col-lg-4 col-sm-12 col-sm-6 col-md-4 col-xl-4 h-100 DIV');
        // card.classList.add("card","col-lg-4","col-sm-12","col-md-4","col-xl-4");
        card.tagName='DIV'
        card.id= 'country-details';
        card.style= 'width: 18rem';

        let countryName = document.createElement('div');
        card.appendChild(countryName);
        countryName.setAttribute('class', 'text-center card-header')
        countryName.setAttribute('id', 'card-header')
        countryName.tagName="DIV"
        countryName.innerText = data[i].name.common;

        let img = document.createElement('img');
        card.append(img);
        img.setAttribute('src', data[i].flags.png)
        img.setAttribute("class", "card-img-top ")
        img.setAttribute('alt', data[i].flags.alt)
        img.tagName="IMG";
        img.setAttribute('id', 'IMG')

        let div2 = document.createElement('div');
        card.appendChild(div2);
        div2.tagName="DIV";
        div2.setAttribute('class', 'card-body')

        let capital = document.createElement('div');
        div2.appendChild(capital);
        capital.setAttribute('class', 'card-text');
        capital.tagName="DIV";
        capital.innerText = `Capital - ${data[i].capital}`;

        let region = document.createElement('div');
        div2.appendChild(region);
        region.setAttribute('class', 'card-text');
        region.tagName="DIV";
        region.innerText = `Region - ${data[i].region}`

        

        let cc = document.createElement('div');
        div2.appendChild(cc);
        cc.setAttribute('class', 'card-text');
        cc.tagName="DIV"
        cc.innerText = `Country code - ${data[i].cca3}`

        let population = document.createElement('div');
        div2.appendChild(population);
        population.setAttribute('class', 'card-text');
        population.tagName="DIV"
        population.innerText = `population - ${data[i].population}`

        let button = document.createElement('button');
        div2.appendChild(button);
        button.setAttribute('class', 'btn btn-primary')

        button.innerText = 'Click for weather'
       
        button.onclick = search.bind(null, data[i].capital);


        async function search(input) {
            let city = input;
            console.log(city);
            let Apikey = "f05be2eff5875b9822b7b4fe3c40fa72";
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&limit=5&appid=${Apikey}`)
            let dat = await res.json();
            console.log(dat);
            let weatherreport = div2.querySelector('#weather')
            if (weatherreport) {
                div2.removeChild(weather)
            } else {
                let weatherreport = document.createElement('div')
                div2.append(weatherreport);
                weatherreport.id = "weather";

                let des = document.createElement('h6');
                weatherreport.append(des);
                des.innerText = ` weather - ${dat.weather[0].description}`;


                let temp = document.createElement('h6');
                const degreeSymbol = '\u00B0';
                weatherreport.append(temp);
                temp.innerText = `Temp - ${((dat.main.temp) - 273.15).toFixed(2)} ${degreeSymbol}`;

                let feel = document.createElement('h6');
                weatherreport.append(feel);
                feel.innerText = `Feels-like - ${((dat.main.feels_like) - 273.15).toFixed(2)} ${degreeSymbol}`;

                let hum = document.createElement('h6');
                weatherreport.append(hum);
                hum.innerText = ` humidity - ${dat.main.humidity}`;


                console.log(dat.weather[0].main)



            }
        }

    }
}
getdata();
// async function search(event){
//     let city=event;
//     console.log(city);
//     let Apikey="f05be2eff5875b9822b7b4fe3c40fa72";
//             let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&limit=5&appid=${Apikey}`)
//             let dat= await res.json();
//             console.log(dat);
// let weatherreport=document.createElement('h6')
// alert.append(weatherreport);
// weatherreport.innerText=dat.weather;
// }
// search('Delhi')

 // button.onclick=((capital)=>{
        //     return function(){
        //         search(capital);
        //     }
        // })(data[i].capital);

// button.onclick= ( (ele)=> {
//         return function(){
//             getdel(ele);
//         }
//     }),(data[i].capital);
//   function getdel(ele){
//         let Apikey="f05be2eff5875b9822b7b4fe3c40fa72";
//         let city=data[i].capital
//         let res= fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&limit=5&appid=${Apikey}')
//         let dat=res.json();
//         console.log(dat)
//     }
// first card
// let card=document.createElement('div');
// row.append(card);
// card .setAttribute('class', 'card');
// card.setAttribute('style','width: 18rem');

// let countryName=document .createElement('h5');
// card.append(countryName);
// countryName.setAttribute('class','text-center card-header')
// countryName.innerText="country";

// let img=document.createElement('img');
// card.append(img);
// img.setAttribute('src','...')
// img.setAttribute("class","card-img-top")
// img.setAttribute('alt','Country flag')
// img.setAttribute('id','country flag')

// let div2=document.createElement('div');
// card.append(div2);
// div2.setAttribute('class','card-body')

// let capital=document.createElement('h6');
// div2.append(capital);
// capital.setAttribute('class','card-text');
// capital.innerText='capital - '

// let region=document.createElement('h6');
// div2.append(region);
// region.setAttribute('class','card-text');
// region.innerText='region - '

// let cc=document.createElement('h6');
// div2.append(cc);
// cc.setAttribute('class','card-text');
// cc.innerText='Country code -'

// let button=document.createElement('button');
// div2.append(button);
// button.setAttribute('class','btn btn-primary')
// button.innerText='Click for weather'


////
// let div3=document.createElement('div');
// row.append(div3);
// div3.setAttribute('class','card');
// div3.setAttribute('style','width: 18rem');

// let countryName1=document.createElement('h5');
// div3.append(countryName1);
// countryName1.setAttribute('class','text-center card-header')
// countryName1.innerText='country'

// let img1=document.createElement('img');
// div3.append(img1);
// img1.setAttribute('src','...');
// img1.setAttribute("class","card-img-top");
// img1.setAttribute('alt','Country flag');

// let div4=document.createElement('div');
// div3.append(div4);
// div4.setAttribute('class','card-body');

// let hh5=document.createElement('h5');
// div4.append(hh5);
// hh5.setAttribute('class','card-title');