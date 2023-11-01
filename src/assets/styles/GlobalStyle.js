import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
  }

  h1 {
    font-size: 2.8rem;
    font-family: 'Cormorant', serif;
    font-weight: 300;
    margin: 15px 0 30px 0;

    @media (min-width: 768px) {
      font-size: 3.8rem;
    }

    @media (min-width: 1024px) {
      font-size: 4.5rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 25px;
  }
`;

export const ContentWrapper = styled.div`
  padding: 0 36px;

  @media (min-width: 1024px) {
    margin: 0 auto;
    padding: 0 100px;
    max-width: 1200px;
  }
`;
