"use strict";

/** takes a word and some letters to determine if the letters can create
 * the word. Will return true or false
 */

function canConstructWord(word, letters) {
    // create an object of the frequency of letters in letters 
    // O(n)
    let lettersCount = {};

    for (let letter of letters) {
        console.log(`letter: ${letter} | lettersCount[letter]: ${lettersCount[letter]}`);
        lettersCount[letter] = (lettersCount[letter]) ? lettersCount[letter] + 1 : 1;
    }
    console.log(`lettersCount: ${lettersCount}`)

    // iterate through a for loop that subtracts 1 from the letters object
    // O(m)
    for (let letter of word) {
        console.log("letter: ", letter, "lettersCount[letter]", lettersCount[letter]);
        // if there's no letter found, then return false
        // if value goes -1, then return false
        if (!lettersCount[letter] || lettersCount[letter] === 0) {
            return false;
        }

        lettersCount[letter]--;

    }
    // return true
    return true;

}
