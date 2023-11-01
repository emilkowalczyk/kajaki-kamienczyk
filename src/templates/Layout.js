import React from 'react';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import '../assets/styles/fonts.css';
import Footer from '../components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
