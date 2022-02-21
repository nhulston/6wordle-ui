import styled from "styled-components";

export const GridStyle = styled.div`
  margin-top: 12vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 335px) {
    transform: scale(.9);
  }
  @media (max-width: 285px) {
    transform: scale(.8);
  }

  @media (max-height: 900px) {
    margin-top: 6vh;
  }

  @media (max-height: 800px) {
    margin-top: 3vh;
    transform: scale(.9);
  }

  @media (max-height: 690px) {
    transform: scale(.8);
  }

  @media (max-height: 660px) {
    transform: scale(.7);
  }
`;

export const GridRow = styled.div`
  margin: 2px 0;
  display: flex;
  flex-direction: row;
`;

export const GridItem = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 2px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.lightGray};
  
  @media (max-width: 430px) {
    width: 50px;
    height: 50px;
  }
  
  @media (max-width: 350px) {
    width: 45px;
    height: 45px;
    margin: 0 1px;
  }
`;

export const GreenItem = styled(GridItem)`
  animation: flipOpenGreen .3s ${(props) => props.index * .3}s linear forwards;
  background: ${(props) => props.theme.black};
  @keyframes flipOpenGreen {
    0% {
      background: ${(props) => props.theme.black};
      transform: rotateX(0deg);
    }
    50% {
      transform: rotateX(90deg);
      background: ${(props) => props.theme.green};
    }
    51% {
      transform: rotateX(-90deg);
    }
    100% {
      transform: rotateX(0deg);
      background: ${(props) => props.theme.green};
      border: none;
    }
  }
`;

export const WordCorrectItem = styled(GreenItem)`
  animation: flipOpenGreen .3s ${(props) => props.index * .3}s linear forwards, bounceUp .5s ${(props) => 1.6 + (props.index * .2)}s linear;
  background: ${(props) => props.theme.black};
  
  @keyframes bounceUp {
    35% {
      transform: translateY(-20px);
    }
    55% {
      transform: translateY(15px);
    }
    75% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export const YellowItem = styled(GridItem)`
  animation: flipOpenYellow .3s ${(props) => props.index * .3}s linear forwards;
  background: ${(props) => props.theme.black};
  @keyframes flipOpenYellow {
    0% {
      background: ${(props) => props.theme.black};
      transform: rotateX(0deg);
    }
    50% {
      transform: rotateX(90deg);
      background: ${(props) => props.theme.yellow};
    }
    51% {
      transform: rotateX(-90deg);
    }
    100% {
      transform: rotateX(0deg);
      background: ${(props) => props.theme.yellow};
      border: none;
    }
  }
`;

export const GrayItem = styled(GridItem)`
  animation: flipOpenGray .3s ${(props) => props.index * .3}s linear forwards;
  background: ${(props) => props.theme.black};
  @keyframes flipOpenGray {
    0% {
      transform: rotateX(0deg);
      background: ${(props) => props.theme.black};
    }
    50% {
      transform: rotateX(90deg);
      background: ${(props) => props.theme.darkGray};
    }
    51% {
      transform: rotateX(-90deg);
    }
    100% {
      transform: rotateX(0deg);
      background: ${(props) => props.theme.darkGray};
      border: none;
    }
  }
`;

export const EmptyItem = styled(GridItem)`
  border: 2px solid ${(props) => props.theme.darkGray};
  background: ${(props) => props.theme.black};
`;

export const EditingItem = styled(GridItem)`
  animation: makeBig .1s linear;

  @keyframes makeBig {
    0% { transform: scale(1) }
    50% { transform: scale(1.1) }
    100% { transform: scale(1) }
  }
`;

export const GridText = styled.h1`
  color: ${(props) => props.theme.white};
  text-align: center;
  margin: auto 0;
  line-height: 60px;
  font-size: 1.7em;

  @media (max-width: 430px) {
    line-height: 50px;
  }

  @media (max-width: 350px) {
    line-height: 45px;
  }
`;

export const GridTextEditing = styled(GridText)`
  line-height: 56px;

  @media (max-width: 430px) {
    line-height: 46px;
  }

  @media (max-width: 350px) {
    line-height: 41px;
  }
`;

export const GreenNoAnimation = styled(GreenItem)`
  animation: flipOpenGreen 0s forwards;
`;

export const YellowNoAnimation = styled(YellowItem)`
  animation: flipOpenYellow 0s forwards;
`;

export const GrayNoAnimation = styled(GrayItem)`
  animation: flipOpenGray 0s forwards;
`;

export const GridRowAbout = styled(GridRow)`
  transform: scale(.8);
  margin: 0 auto;
`;