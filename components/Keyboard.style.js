import styled from "styled-components";

export const KeyboardStyle = styled.div`
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 570px) {
    transform: scale(.9);
  }
  @media (max-width: 500px) {
    transform: scale(.8);
  }
  @media (max-width: 430px) {
    transform: scale(.7);
  }
  @media (max-width: 390px) {
    transform: scale(.6);
  }
  @media (max-width: 335px) {
    transform: scale(.5);
  }
  @media (max-width: 285px) {
    transform: scale(.4);
  }
`;

export const KeyboardRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3.5px 0;
`;

export const Key = styled.label`
  width: 45px;
  height: 60px;
  margin: 0 3px;
  border-radius: 8px;
`;

export const GreenKey = styled(Key)`
  background: ${(props) => props.theme.green};
`;

export const YellowKey = styled(Key)`
  background: ${(props) => props.theme.yellow};
`;

export const LightGrayKey = styled(Key)`
    background: ${(props) => props.theme.lightGray};
`;

export const DarkGrayKey = styled(Key)`
    background: ${(props) => props.theme.darkGray};
`;

export const LongKey = styled(Key)`
  background: ${(props) => props.theme.lightGray};
  width: 80px;
`;

export const KeyText = styled.h1`
  color: ${(props) => props.theme.white};
  text-align: center;
  margin: auto 0;
  line-height: 60px;
  font-size: 1.5em;

  @media (max-height: 750px) {
    line-height: 50px;
  }

  @media (max-height: 700px) {
    line-height: 45px;
  }
`;

export const LongKeyText = styled(KeyText)`
  font-weight: normal;
  font-size: 1.1em;
`;

export const BackIconWrapper = styled(LongKey)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-right: 5px;
  width: 75px;
`;