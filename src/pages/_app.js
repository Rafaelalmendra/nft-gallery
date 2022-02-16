import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from "../styles/theme";
import GlobalStyle from '../styles/global';

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};