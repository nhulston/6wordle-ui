import styled from "styled-components";
import Popup from "reactjs-popup";

export const StyledPopup = styled(Popup)`
  &-overlay {
  }
  
  &-content {
    background: ${(props) => props.theme.black};
    border: none;
    border-radius: 20px;
    height: 700px;
    width: 500px;
    
    @media (max-width: 620px) {
      transform: scale(.9);
    }
    @media (max-width: 530px) {
      transform: scale(.7);
    }
    @media (max-width: 475px) {
      transform: scale(.6);
    }
    @media (max-width: 440px) {
      transform: scale(.5);
    }
    
    @media (max-height: 750px) {
      transform: scale(.9);
    }
    @media (max-height: 700px) {
      transform: scale(.7);
    }
    @media (max-height: 600px) {
      transform: scale(.5);
    }
  }
`;