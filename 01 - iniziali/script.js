/* Scrivi una funzione che accetti un array di nomi e 
restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

/**
 * Funzione che ritorna un nuovo array con le iniziali di ogni elemento di un array di nomi
 * @param {array} arrayNames
 * @returns {array}
 */

function initialsArray(arrayNames) {
    let newArray = [];
    for (let i = 0; i < arrayNames.length; i++) {
        const curItem = arrayNames[i];
        if (isNaN(curItem)) {
            newArray.push(curItem.charAt(0));
        } else {
            console.log("Non contiene nomi");
        }
    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

const initials = initialsArray(names);
console.log(initials);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]