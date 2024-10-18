console.log('DEFAULT CONNECTION TEST')

/* ESERCIZIO 1 - Parola Palindroma
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */


// Chiedo all'utente una stringa
let userInput = prompt('Inserisci una parola palindroma');

// Dichiaro la variabile del mio testo in reverse, per portarla fuori dalla funzione
let reversedString;

// Creo una funzione per ribaltare la stringa scelta dall'utente
/**
 * La funzione ribalta i caratteri di una stringa, posizionando l'ultimo carattere come primo e così via.
 * @param {String} string String è il parametro esterno di tipo stringa da elaborare
 */
function reverseString(string) {
    const reversedCharacters = [];

    for (let i = string.length; i >= 0; i--) {
        let extractedCharacter = string.charAt(i);
    
        reversedCharacters.push(extractedCharacter);
    }
    
    reversedString = reversedCharacters.join('');
    
    return reversedString;
    
}

// Utilizzo la funzione reverseString
reverseString(userInput);

// Stampo il risultato ottenuto come variabile per verificare che sia stato elaborato correttamente
console.log('La stringa rigirata è: ' + reversedString);


// Creo una funzione per verificare se la stringa dichiarata dall'utente sia palindroma
/**
 * La funzione verifica se una stringa è palindroma.
 * @param {String} checkedString String è il parametro esterno di tipo stringa da elaborare
 */
function isPalindromo(checkedString) {
    
    let checkedString;
    let reversedString = reverseString(checkedString);

    let isPalindromo = (checkedString == reversedString) ? ('The string is Palindromo: ' + checkedString) : 'The string i NOT Palindromo';
}


// Utilizzo la funzione isPalindromo
isPalindromo(checkedString);
console.log(isPalindromo(checkedString)):
    























/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
