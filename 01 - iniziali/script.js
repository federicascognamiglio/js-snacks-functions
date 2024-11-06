/* Scrivi una funzione che accetti un array di nomi e 
restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/**
 * Funzione che ritorna le iniziali di ogni elemento di un array
 * @param {array} array
 * @returns {array}
 */

function initialsArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let curItem = array[i];
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