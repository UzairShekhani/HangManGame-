const letterContainer = document.getElementById(".letter-Container")
const optionContainer = document.getElementById(".option-Container")
const userInputSection = document.getElementById(".user-input-section")
const newGameContainer = document.getElementById(".new-game-container")
const newGameButton = document.getElementById(".new-game-butto  n")
const Canvas = document.getElementById(".canvas")
const resultText = document.getElementById(".result-text")

let option = {
    fruits: [
        "Apple",
        "Blueberry",
        "Mandrin",
        "pineapple",
        "pomegranate",
        "watermelon",
    ],
    animals: [
        "Hedgehog",
        "Rehinoceros",
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
        "Domincica",
        "Waziristan",
    ]
};

let winCount = 0;
let Count = 0;

let chosenWord = "";


