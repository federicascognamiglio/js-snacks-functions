/* Scrivi una funzione che accetti una stringa contenente un nome 
e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name1 = 'Mario';

// Dichiara la funzione qui.

const greeting = (nameToGreet) => {
    const date = new Date();
    let message;
    if (date.getHours() <= 13) {
        message = "Buongiorno";
    } else if (date.getHours() <= 17) {
        message = "Buon pomeriggio";
    } else {
        message = "Buonasera";
    }
    return `${message} ${nameToGreet}!`;
}

// Invoca la funzione qui e stampa il risultato in console

const timeGreeting = greeting(name1);
console.log(timeGreeting);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.