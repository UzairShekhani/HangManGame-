const letterContainer = document.getElementById("letter-container");
const optionContainer = document.getElementById("option-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

let options = {
    fruits: [
        "Apple",
        "Blueberry",
        "Mandarin",
        "Pineapple",
        "Pomegranate",
        "Watermelon",
    ],
    animals: [
        "Hedgehog",
        "Rhinoceros",
        "Squirrel",
        "Panther",
        "Walrus",
        "Zebra",
    ],
    countries: [
        "Pakistan",
        "India",
        "Zimbabwe",
        "Switzerland",
        "Dominica",
        "Waziristan",
    ]
};

let winCount = 0;
let Count = 0;

let chosenWord = "";

const displayOption = () => {
    optionContainer.innerHTML += '<h3>Please Select An Option</h3>';

    let buttonCon = document.createElement("div");
    for (let value in options) {
        buttonCon.innerHTML += `<button class="option" onclick="generateWord('${value}')">${value}</button>`;
    }
    optionContainer.appendChild(buttonCon);
};


const generateWord = (optionValue) => {
    let optionButtons = document.querySelectorAll(".option")

    optionButtons.forEach((button) => {
        if(button.innerText.toLowerCase() === optionValue){
            button.classList.add("active")
        }
        button.disabled = true
    })
}


const initializer = () => {
    winCount = 0;
    Count = 0;

    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        button.innerText = String.fromCharCode(i);
        letterContainer.append(button);
    }

    displayOption();
};


newGameButton.addEventListener("click", initializer);
window.onload = initializer;
