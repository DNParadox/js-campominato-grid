// Consegna
// L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
// Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce 
// con un messaggio di vittoria.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un
//  numero che non era una bomba.


// Indichiamo con un prompt il livello di difficoltà (1-3)
const userChoice = parseInt(prompt ('Scegli la difficoltà tramite un numero da 1 a 3'));
let gameDifficulties;

// Livello di difficoltà 1 -> 100 , 2 -> 81 , 3 -> 49
if (userChoice === 1) {
    gameDifficulties = 100;
} else if (userChoice === 2) {
    gameDifficulties  = 81;
} else if (userChoice === 3) {
    gameDifficulties  = 49;
}


// Darà il risultato della difficoltà impostata, quindi quante caselle abbiamo a disposizione
console.log('fuori scoop', gameDifficulties)

// Dichiariamo quante bombe ci sono nel gioco (16) e generiamole
const numberOfBombs = 16;

let randomNumbers= []


for (let i = 0; i <= 16; i++) {
   andomNumbers = Math.floor(Math.random() * (gameDifficulties - 1 + 1) ) + 1;
    // console.log(randomnumbers)
 
}

console.log(randomNumbers)

function randomBombs(min, gameDifficulties) {
    for (let i = 0; i < 16; i++) {
        mathrandom = Math.floor(Math.random() * (gameDifficulties - min + 1) ) + min;
    }
    return mathrandom
}

const randomBombs1 = randomBombs(1, gameDifficulties)
console.log('qui bomberandom',randomBombs1)

