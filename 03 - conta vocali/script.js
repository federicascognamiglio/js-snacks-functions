/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.

/**
 * Funzione che, data una parola, restituisce il numero di vocali al suo interno
 * @param {string} wordToCheck
 * @returns {number}
 */

function vowelsInWord(wordToCheck) {
    const vowels = ["a", "e", "i", "o", "u"];
    let wordVowelsNum = 0;
    let arrayVowelsInWord = [];
    for (let i = 0; i < wordToCheck.length; i++) {
        const curChar = wordToCheck[i];
        for (let j = 0; j < vowels.length; j++) {
            const curVowel = vowels[j];
            if (curChar === curVowel) {
                wordVowelsNum += 1;
                arrayVowelsInWord.push(curVowel);
            }
        }
    }
    return (`${wordVowelsNum} vocali (${arrayVowelsInWord})`);
}

// Invoca la funzione qui e stampa il risultato in console

const wordVowels = vowelsInWord(word);
console.log(`La parola "${word}" contiene ${wordVowels}`);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)