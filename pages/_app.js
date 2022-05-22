import { ThemeProvider } from "styled-components";
import { theme } from "~/styles";
import { StyledContainer, StyledTitle } from "../sections/Hero/elements";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
