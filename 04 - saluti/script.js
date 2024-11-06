/* Scrivi una funzione che accetti una stringa contenente un nome 
e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name1 = 'Mario';

// Dichiara la funzione qui.

/**
 * Funzione che restituisce un saluto seguito da un nome fornito
 * @param {string} nameToGreet
 * @returns {string}
 */

const greeting = (nameToGreet) => `Ciao ${nameToGreet}`;

// Invoca la funzione qui e stampa il risultato in console

console.log(greeting(name1));

//Risultato atteso se si passa 'Mario': // ciao Mario