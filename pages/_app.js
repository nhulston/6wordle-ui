import {GlobalStyles, theme} from "../styles/theme.config";
import {ThemeProvider} from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Component {...pageProps}/>
      </ThemeProvider>
  )
}

export default MyApp
