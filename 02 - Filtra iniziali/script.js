/* Scrivi una funzione che accetti un'array di stringhe e una lettera 
e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

/**
 * Funzione che partendo da un array di stringhe, restituisce un nuovo array solo con le parole che iniziano con una specifica lettera.
 * @param {array} wordArray
 * @param {string} letter
 * @returns {array}
 */

function wordsByInitials(wordArray, letter) {
    let newArray = [];
    for (let i = 0; i < wordArray.length; i++) {
        const curItem = wordArray[i];
        if (isNaN(curItem) && (curItem.charAt(0) === letter)) {
            newArray.push(curItem);
        }
    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

const arrayByInitials = wordsByInitials(names, "A");
console.log(arrayByInitials);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
