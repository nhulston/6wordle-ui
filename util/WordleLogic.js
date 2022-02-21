let word = '';
let words = [];

export function getWord() {
    return word.toUpperCase();
}

export function pickWord() {
    let now = new Date();
    let fullDaysSinceEpoch = Math.floor(now/8.64e7);
    fetch('/6letterWordle.txt')
        .then((r) => r.text())
        .then(text  => {
            words = text.split('\n');
            let newWord = words[fullDaysSinceEpoch % words.length];
            if (word.length !== 6) {
                word = newWord;
                console.log('The word is: ' + newWord);
            }
        });
}

export function pickRandomWord() {
    fetch('/6letterWordle.txt')
        .then((r) => r.text())
        .then(text  => {
            words = text.split('\n');
            let newWord = words[Math.floor(Math.random() * words.length)];
            if (word.length !== 6) {
                word = newWord;
                console.log('The word is: ' + newWord);
            }
        });
}

export function isAWord(guess) {
    return words.includes(guess.toLowerCase());
}

export function isWinner(guess) {
    return guess.length === 6 && guess.toLowerCase() === word;
}