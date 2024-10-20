// console.log('DEFAULT CONNECTION TEST')

// /* ESERCIZIO 1 - Parola Palindroma
// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma */


// // Chiedo all'utente una stringa
// let userInput = prompt('Inserisci una parola palindroma');

// // Dichiaro la variabile del mio testo in reverse, per portarla fuori dalla funzione
// let parolaInvertita;

// // Creo una funzione per ribaltare la stringa scelta dall'utente
// /**
//  * La funzione ribalta i caratteri di una stringa, posizionando l'ultimo carattere come primo e così via.
//  * @param {String} string String è il parametro esterno di tipo stringa da elaborare
//  */
// function reverseString(string) {
//     const reversedCharacters = [];

//     for (let i = string.length; i >= 0; i--) {
//         let extractedCharacter = string.charAt(i);
    
//         reversedCharacters.push(extractedCharacter);
//     }
    
//     reversedString = reversedCharacters.join('');
    
//     return reversedString;
    
// }

// // Utilizzo la funzione reverseString assegnando il risutato alla variabile dichiarata in precedenza.
// parolaInvertita = reverseString(userInput);

// // Stampo il risultato ottenuto come variabile per verificare che sia stato elaborato correttamente
// console.log('La stringa rigirata è: ' + parolaInvertita);


// // Creo una funzione per verificare se la stringa dichiarata dall'utente sia palindroma
// /**
//  * La funzione verifica se una stringa è palindroma, e necessita della funzione reverseString per elaborare i dati.
//  * @param {String} checkedString String è il parametro esterno di tipo stringa da elaborare
//  */
// function isPalindroma(checkedString) {
    
//     let reversedString = reverseString(checkedString);

//     let isPalindroma = (checkedString == reversedString) ? ('The string is Palindroma: ' + checkedString) : 'The string i NOT Palindroma';

//     return isPalindroma;
// }


// // Utilizzo la funzione isPalindroma e stampo il risultato.
// let verificaPalindromia = isPalindroma(userInput);
// console.log(verificaPalindromia);
    























/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


// // Dichiaro la variabile per la scelta dell'utente
let userChoice;

// Dichiaro il criterio di validità del valore che inserirà l'utente
let isValid_userChoice = userChoice == 'pari' || userChoice == 'dispari';
console.log(isValid_userChoice);

// Imposto inizialmente il criterio di validità su "false" per entrare nel WHILE
isValid_userChoice = false;


// FINCHE' il criterio di cui sotto non è rispettato

while (!isValid_userChoice) {

    // Continuo a chiedere all'utente di inserire un valore
    userChoice = prompt('Scegli tra "pari" e "dispari"');
    console.log('Valore non valido: ' + userChoice);

    // Se il valore rispetta il criterio di validit, porto la variabile riguardante il criterio su "true", uscendo dal WHILE
    if (userChoice == 'pari' || userChoice == 'dispari') {
        isValid_userChoice = true;
        console.log('Il valore inserito è valido: ' + userChoice);
    }
}

console.log(userChoice);


// Faccio scegliere all'utente un numero tra 1 e 5
let userNumber = parseInt(prompt('Inserisci un numero intero da 1 a 5'));

// FINCHE? il numero scelto dall'utente non è compreso tra 1 e 5:
while (isNaN(userNumber) || userNumber > 5 || userNumber <= 0) {

    // Continuo a chiedere un numero all'utente
    userNumber = parseInt(prompt('Riprova inserendo un numero intero da 1 a 5'));
    console.log('Valore non valido: ' + userNumber);
}


// Dichiaro la funzione per generare numeri casuali tra 1 e 5;

/**
 * La funzione genera un numero random tra 1 e 5;
 */
function diceOneFive () {
    const myNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

    return myNumber;
}

// Genero un numero tramite la mia funzione da assegnare al Computer
const computerNumber = diceOneFive();
console.log('Numero del computer: ' + computerNumber);

// Ottenuti i due numeri dichiaro la variabile che rappresenta la somma tra i due.
const laMiaSomma = computerNumber + userNumber;
console.log('La somma è uguale a: ' + laMiaSomma);


// Dichiaro la funzione per eseguire la verifica

/**
 * La funzione verifica se un numero sia "pari" o "dispari".
 * @param {Number} numberToTest
 */
function pariODispari(numberToTest) {
    if (numberToTest % 2 === 0) {
        let result = true;
    } else {
        let result = false;
    }

    return result;
}

// Utilizzo la funzione pariODispari come condizione del SE

// SE la condizione è vera
if (pariODispari(userNumber)) {

}

