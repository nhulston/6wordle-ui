import React from "react";
import {KeyboardRow, KeyboardStyle, KeyText, LightGrayKey, LongKey, LongKeyText} from "./Keyboard.style";

const Keyboard = () => {
    return (
        <KeyboardStyle>
            <KeyboardRow>
                <LightGrayKey><KeyText>Q</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>W</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>E</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>R</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>T</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>Y</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>U</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>I</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>O</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>P</KeyText></LightGrayKey>
            </KeyboardRow>

            <KeyboardRow>
                <LightGrayKey><KeyText>A</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>S</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>D</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>F</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>G</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>H</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>J</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>K</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>L</KeyText></LightGrayKey>
            </KeyboardRow>

            <KeyboardRow>
                <LongKey><LongKeyText>ENTER</LongKeyText></LongKey>
                <LightGrayKey><KeyText>Z</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>X</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>C</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>V</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>B</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>N</KeyText></LightGrayKey>
                <LightGrayKey><KeyText>M</KeyText></LightGrayKey>
                <LongKey><LongKeyText>DELETE</LongKeyText></LongKey>
            </KeyboardRow>
        </KeyboardStyle>
    );
};

export default Keyboard;