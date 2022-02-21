import React from 'react';
import {AboutStyle, AboutTitle, Description, DescriptionLink, LinkWrapper} from "./About.style";
import {GrayNoAnimation, GreenNoAnimation, GridRowAbout, GridText, YellowNoAnimation} from "./Grid.style";

const About = () => {
    return (
        <AboutStyle>
            <AboutTitle>How to Play</AboutTitle>
            <Description>Guess the <strong>WORDLE</strong> in seven tries.</Description>
            <Description>Each guess must be a valid six-letter word.</Description>
            <Description>Hit the enter button to submit.</Description>

            <AboutTitle>Example</AboutTitle>
            <GridRowAbout>
                <GreenNoAnimation><GridText>O</GridText></GreenNoAnimation>
                <GrayNoAnimation><GridText>R</GridText></GrayNoAnimation>
                <GrayNoAnimation><GridText>A</GridText></GrayNoAnimation>
                <GrayNoAnimation><GridText>N</GridText></GrayNoAnimation>
                <GrayNoAnimation><GridText>G</GridText></GrayNoAnimation>
                <GrayNoAnimation><GridText>E</GridText></GrayNoAnimation>
            </GridRowAbout>
            <Description>The letter <strong>O</strong> is in the word and in the correct spot.</Description>

            <GridRowAbout>
                <GrayNoAnimation><GridText>R</GridText></GrayNoAnimation>
                <YellowNoAnimation><GridText>E</GridText></YellowNoAnimation>
                <GrayNoAnimation><GridText>S</GridText></GrayNoAnimation>
                <GrayNoAnimation><GridText>U</GridText></GrayNoAnimation>
                <GrayNoAnimation><GridText>L</GridText></GrayNoAnimation>
                <GrayNoAnimation><GridText>T</GridText></GrayNoAnimation>
            </GridRowAbout>
            <Description>The letter <strong>E</strong> is in the word but in the wrong spot.</Description>
            <Description><strong>R</strong>, <strong>S</strong>, <strong>U</strong>, <strong>L</strong>, & <strong>T</strong> are not in the word.</Description>

            <AboutTitle>About</AboutTitle>
            <Description>This game is a clone of the <LinkWrapper>
                <a
                    href="https://www.nytimes.com/games/wordle/index.html"
                    target="_blank"
                    rel="noopener noreferrer">
                    <DescriptionLink>popular WORDLE game,</DescriptionLink>
                </a>
            </LinkWrapper></Description>
            <Description>but with six letters.</Description>

            <AboutTitle>Source</AboutTitle>
            <Description>I made it for fun & to practice NextJS,</Description>
            <Description>Styled Components, & CSS</Description>
            <LinkWrapper>
                <a
                    href="https://github.com/nhulston/6wordle-ui"
                    target="_blank"
                    rel="noopener noreferrer">
                    <DescriptionLink>Source here</DescriptionLink>
                </a>
            </LinkWrapper>

        </AboutStyle>
    );
};

export default About;
