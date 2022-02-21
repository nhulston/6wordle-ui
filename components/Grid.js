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
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function handleKeyPress() {}

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
    let [editable, setEditable] = useState(true);

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
        if (char === undefined) return;
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

    function isAlphabetic(e) {
        return e.code.charCodeAt(3) >= 65 && e.code.charCodeAt(3) <= 90 && e.key.length === 1;
    }

    function sendMessage(s) {
        toast.info(s, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    handleKeyPress = function(e) {
        if (gameOver || !editable) return;
        if (typeof e === 'string' && e.length === 0) return;

        if ((typeof e === 'string' && e === 'Enter') || e.key === 'Enter') {
            let guess = guesses[guessNumber];
            if (guess.length < 6) {
                sendMessage('Not enough letters')
            } else if (!isAWord(guess)) {
                sendMessage('Not in word list')
            } else {
                guessNumber = guessNumber + 1;
                let newState = guessNumber;
                setGuessNumber(newState);

                setEditable(false);
                setTimeout(function() { setEditable(true); }, 1800);

                if (isWinner(guess)) {
                    let message;
                    if (guessNumber <= 1) {
                        message = 'Genius';
                    } else if (guessNumber === 2) {
                        message = 'Magnificent';
                    } else if (guessNumber === 3) {
                        message = 'Impressive';
                    } else if (guessNumber === 4) {
                        message = 'Splendid';
                    } else if (guessNumber === 5) {
                        message = 'Great';
                    } else {
                        message = 'Phew';
                    }
                    setTimeout(function() {sendMessage(message); }, 2500);
                    gameOver = true;
                    setGameOver(true);
                } else if (guessNumber >= 7) {
                    setTimeout(function() {
                        toast.info('You lost ): The word was ' + getWord(), {
                            position: "top-center",
                            autoClose: false,
                            hideProgressBar: true,
                            closeOnClick: false,
                            draggable: false,
                            progress: undefined,
                            closeButton: false,
                        });
                    }, 2500);
                    gameOver = true;
                    setGameOver(true);
                }
            }
        } else if ((typeof e === 'string' && e === 'Backspace') || e.key === 'Backspace') {
            removeLast(guessNumber);
        } else if (typeof e === 'string') {
            addCharacter(e, guessNumber);
        } else if (isAlphabetic(e)) {
            addCharacter(e.key, guessNumber);
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', e => {
            handleKeyPress(e);
        });
    }, []);

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <GridStyle>
                {rows.map((current) => (
                    current
                ))}
            </GridStyle>
        </>
    );
};

export default Grid;
