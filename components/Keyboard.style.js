import styled from "styled-components";

export const KeyboardStyle = styled.div`
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const KeyboardRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3.5px 0;
`;

export const Key = styled.div`
  width: 45px;
  height: 60px;
  margin: 0 3px;
  border-radius: 8px;
  
  @media (max-width: 560px) {
    width: 40px;
    height: 55px;
  }
  
  @media (max-width: 520px) {
    width: 35px;
    height: 50px;
  }
  
  @media (max-width: 485px) {
    width: 30px;
    height: 45px;
    margin: 0 2px;
  }
  
  @media (max-width: 435px) {
    width: 25px;
    height: 40px;
    margin: 0 1px;
  }
  
  @media (max-height: 750px) {
    width: 35px;
    height: 50px;
  }
  
  @media (max-height: 700px) {
    width: 30px;
    height: 45px;
    margin: 0 2px;
  }
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

  @media (max-width: 390px) {
    width: 65px;
  }
  
  @media (max-width: 350px) {
    width: 55px;
  }
  
  @media (max-width: 310px) {
    width: 45px;
  }
`;

export const KeyText = styled.h1`
  color: ${(props) => props.theme.white};
  text-align: center;
  margin: auto 0;
  line-height: 60px;
  font-size: 1em;


  @media (max-width: 560px) {
    line-height: 55px;
  }

  @media (max-width: 520px) {
    line-height: 50px;
  }

  @media (max-width: 485px) {
    line-height: 45px;
  }

  @media (max-width: 435px) {
    line-height: 40px;
  }

  @media (max-height: 750px) {
    line-height: 50px;
  }

  @media (max-height: 700px) {
    line-height: 45px;
  }
`;

export const LongKeyText = styled(KeyText)`
  font-weight: normal;
  font-size: .85em;
  
  @media (max-width: 350px) {
    font-size: .65em;
  }
  
  @media (max-width: 310px) {
    font-size: .5em;
  }
`;