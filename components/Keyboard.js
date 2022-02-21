import React, {useEffect, useState} from "react";
import {
    DarkGrayKey,
    GreenKey,
    KeyboardRow,
    KeyboardStyle,
    KeyText,
    LightGrayKey,
    LongKey,
    LongKeyText, YellowKey
} from "./Keyboard.style";

export function setUsedLetters(letter, value) {}

const Keyboard = () => {
    const [usedLetters, setUsedLettersState] = useState(new Map()); // 0 = darkGray, 1 = yellow, 2 = green

    setUsedLetters = function(letter, value) {
        if (!usedLetters.has(letter) || value === 2) {
            usedLetters.set(letter, value);
            setTimeout(() => setUsedLettersState(new Map(usedLetters)), 2500);
        }
    }

    let firstRowLetters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    let secondRowLetters = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    let thirdRowLetters = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

    let setRow = function(rowArray, lettersArray) {
        lettersArray.forEach((l, index) => {
            if (usedLetters.has(l)) {
                const val = usedLetters.get(l);
                if (val === 0) {
                    rowArray[index] = ( <DarkGrayKey key={index}><KeyText>{l}</KeyText></DarkGrayKey> );
                } else if (val === 1) {
                    rowArray[index] = ( <YellowKey key={index}><KeyText>{l}</KeyText></YellowKey> );
                } else {
                    rowArray[index] = ( <GreenKey key={index}><KeyText>{l}</KeyText></GreenKey> );
                }
            } else {
                rowArray[index] = ( <LightGrayKey key={index}><KeyText>{l}</KeyText></LightGrayKey> );
            }
        });
    };

    let firstRow = [], secondRow = [], thirdRow = [];
    setRow(firstRow, firstRowLetters);
    setRow(secondRow, secondRowLetters);
    setRow(thirdRow, thirdRowLetters);

    return (
        <KeyboardStyle>
            <KeyboardRow>
                {firstRow}
            </KeyboardRow>

            <KeyboardRow>
                {secondRow}
            </KeyboardRow>

            <KeyboardRow>
                <LongKey><LongKeyText>ENTER</LongKeyText></LongKey>
                {thirdRow}
                <LongKey><LongKeyText>DELETE</LongKeyText></LongKey>
            </KeyboardRow>
        </KeyboardStyle>
    );
};

export default Keyboard;