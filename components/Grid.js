import React, {useEffect, useState} from "react";
import {
    EmptyItem,
    GrayItem,
    GreenItem,
    GridRow,
    GridStyle,
    GridText,
    GridTextEditing,
    EditingItem,
    YellowItem, WordCorrectItem
} from "./Grid.style";
import {getWord, isAWord, isWinner} from "../util/WordleLogic";
import {setUsedLetters} from "./Keyboard";

const Grid = () => {
    let [guesses, setGuesses] = useState({
        0: '',
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
    });
    let [guessNumber, setGuessNumber] = useState(0);
    let rows = [];
    let [gameOver, setGameOver] = useState(false);
    let editable = true;

    for (let i = 0; i < 7; i++) {
        const items = [];
        if (gameOver && isWinner(guesses[i])) {
            for (let j = 0; j < 6; j++) {
                items[j] = (<WordCorrectItem key={j} index={j}>
                    <GridText>{guesses[i].charAt(j).toUpperCase()}</GridText>
                </WordCorrectItem>);
            }
        } else {
            for (let j = 0; j < 6; j++) {
                const guessChar = guesses[i].charAt(j).toUpperCase();
                const actualChar = getWord().charAt(j).toUpperCase();
                // console.log('Actual: ' + actualChar + ', guess: ' + guessChar);
                if (guessChar === undefined || guessChar.length !== 1) {
                    items[j] = (<EmptyItem key={j}/>)
                } else if (i === guessNumber) {
                    items[j] = (<EditingItem key={j}>
                        <GridTextEditing>{guessChar}</GridTextEditing>
                    </EditingItem>);
                } else {
                    if (actualChar === guessChar) {
                        items[j] = (<GreenItem key={j} index={j}>
                            <GridText>{guessChar}</GridText>
                        </GreenItem>);
                        setUsedLetters(guessChar, 2);
                    } else if (getWord().includes(guessChar)) {
                        items[j] = (<YellowItem key={j} index={j}>
                            <GridText>{guessChar}</GridText>
                        </YellowItem>);
                        setUsedLetters(guessChar, 1);
                    } else {
                        items[j] = (<GrayItem key={j} index={j}>
                            <GridText>{guessChar}</GridText>
                        </GrayItem>);
                        setUsedLetters(guessChar, 0);
                    }
                }
            }
        }

        rows[i] = (<GridRow key={i}>
            {items}
        </GridRow>);
    }

    function addCharacter(char, index) {
        console.log(char);
        if (guesses[index].length < 6) {
            guesses[index] = guesses[index] + char.toUpperCase();
            let newState = {...guesses};
            setGuesses(newState);
        }
    }

    function removeLast(index) {
        if (guesses[index].length > 0) {
            guesses[index] = guesses[index].substring(0, guesses[index].length - 1);
            let newState = {...guesses};
            setGuesses(newState);
        }
    }

    function handleKeyPress(e) {
        if (gameOver || !editable) return;

        if (e.key === 'Enter') {
            let guess = guesses[guessNumber];
            if (guess.length < 6) {
                alert('Not enough letters');
            } else if (!isAWord(guess)) {
                alert('Not in word list');
            } else {
                guessNumber = guessNumber + 1;
                let newState = guessNumber;
                setGuessNumber(newState);

                editable = false;
                setTimeout(function() { editable = true; }, 2500);

                if (isWinner(guess)) {
                    alert('You win!');
                    gameOver = true;
                    setGameOver(true);
                } else if (guessNumber >= 7) {
                    alert('You lose. The word was ' + getWord());
                    gameOver = true;
                    setGameOver(true);
                }
            }
        } else if (e.key === 'Backspace') {
            removeLast(guessNumber);
        } else if (e.code.charCodeAt(3) >= 65 && e.code.charCodeAt(3) <= 90 && e.key.length === 1) {
            addCharacter(e.key, guessNumber);
        } else {
            console.log("not a letter");
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', e => {
            handleKeyPress(e);
        });
    }, []);

    return (
        <GridStyle>
            {rows.map((current) => (
                current
            ))}
        </GridStyle>
    );
};

export default Grid;
