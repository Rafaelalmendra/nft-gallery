import { useState } from 'react';
import Script from 'next/script';
import { ThemeProvider } from 'styled-components';

// components
import { Navbar, Footer } from 'components';

// styles
import { lightTheme, darkTheme } from '../styles/theme';
import GlobalStyle from '../styles/global';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';

const MyApp = ({ Component, pageProps }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Script
        id="ms_clarity"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "ggbjoz83ki");
          `,
        }}
      />

      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
