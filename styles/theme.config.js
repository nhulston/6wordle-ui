import { createGlobalStyle } from 'styled-components';

export const theme = {
    black: '#121312',
    white: '#ffffff',
    lightGray: '#818284',
    darkGray: '#3B3B3C',
    green: '#538C4F',
    yellow: '#B49E3B',
}

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    background: ${(props) => props.theme.black};
    scroll-padding-top: 200px;
  }

  body {
    cursor: default;
    font-size: 1.25rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li{
    list-style: none;
  }

  button {
    border: none;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale3d(.3, .3, .3);
    }
    50% {
      opacity: 1;
    }
  }

  .zoomIn {
    animation-name: zoomIn;
  }

  @keyframes zoomOut {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: scale3d(.3, .3, .3);
    }
    to {
      opacity: 0;
    }
  }

  .zoomOut {
    animation-name: zoomOut;
  }
`;