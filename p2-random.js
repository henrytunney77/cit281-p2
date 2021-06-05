/*
    CIT 281 Project 1
    Name: Henry Tunney
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1,alphabet.length-1)];
}

console.log(result);


//returns a single, random, lowercase letter
function getRandomLetter() {
    
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";
return alphabet[Math.floor(Math.random()* alphabet.lenght)]
}

console.log(result);



