import styled from "styled-components";

export const AboutStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutTitle = styled.h1`
  color: ${(props) => props.theme.white};
  text-align: center;
  margin: 20px auto 5px;
  font-size: 1.5em;
`;

export const Description = styled.span`
  margin: 0 auto;
  color: ${(props) => props.theme.white};
`;

export const DescriptionLink = styled(Description)`
  color: dodgerblue;
`;

export const LinkWrapper = styled.div`
  margin: 0 auto;
`;