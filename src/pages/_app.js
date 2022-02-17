import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from "../styles/theme";
import GlobalStyle from '../styles/global';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';

export default function MyApp({ Component, pageProps }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
      <Component {...pageProps} />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
};