import { useState } from 'react';
import Script from 'next/script';
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';

// components
import { Navbar, Footer } from 'components'

// styles
import { lightTheme, darkTheme } from '../styles/theme';
import GlobalStyle from '../styles/global';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Script
        id="hotjar"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3288324,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />

      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;