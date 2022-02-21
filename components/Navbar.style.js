import styled from "styled-components";

export const NavbarStyle = styled.nav`
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.black};
  z-index: 100;
  border-bottom: 1px solid ${(props) => props.theme.darkGray};
`;

export const NavIcon = styled.div`
  transition: 0.3s ease;
  color: ${(props) => props.theme.white};
  border-radius: 100%;
  padding: 8px 8px 2px 8px;
  margin: 0 20px;
  font-size: 1.5rem;
  
  &:hover {
    background-color: #ffffff33;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-family: "Times New Roman", serif;
  color: ${(props) => props.theme.white};
`;