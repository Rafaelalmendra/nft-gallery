import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from "../styles/theme";
import GlobalStyle from '../styles/global';
import Navbar from '../components/Navbar';

export default function MyApp({ Component, pageProps }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};