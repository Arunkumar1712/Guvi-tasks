
// Create the audio element
const audioElement = document.createElement('audio');
audioElement.id = 'sound';

// Create the container div
const containerDiv = document.createElement('div');
containerDiv.classList.add('container');


// Create the search box div
const searchBoxDiv = document.createElement('div');
searchBoxDiv.classList.add('search-box');

// Create the input element for search
const searchInput = document.createElement('input');
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('placeholder', 'Type the word here..');
searchInput.id = 'inp-word';

// Create the search button
const searchButton = document.createElement('button');
searchButton.id = 'search-btn';
searchButton.textContent = 'Search';

// Append input and button to search box div
searchBoxDiv.appendChild(searchInput);
searchBoxDiv.appendChild(searchButton);

// Create the result div
const resultDiv = document.createElement('div');
resultDiv.classList.add('result');
resultDiv.id = 'result';

// Append search box and result div to container div
containerDiv.appendChild(searchBoxDiv);
containerDiv.appendChild(resultDiv);


const title=document.createElement("div");

title.innerText="English Dictionary App";
title.id="title";

// Append the audio element and container div to the body
document.body.appendChild(audioElement);
document.body.appendChild(containerDiv);
document.body.appendChild(title);

///////////////////////////////////////////////////////////////////////////
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                    <h3>${inpWord}</h3>
                    <button onclick="playSound()">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
            sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});
function playSound() {
    sound.play();
}
