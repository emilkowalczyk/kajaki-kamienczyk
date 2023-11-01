import React from 'react';
import { ContentWrapper } from '../../assets/styles/GlobalStyle';
import styled from 'styled-components';
import Img0 from '../../assets/images/img0.jpg';
import { Link } from 'react-scroll';

export const StyledFooter = styled.footer`
  position: relative;
  background: URL(${Img0}) center no-repeat;
  background-size: inherit;
  width: 100%;
  height: 500px;
  z-index: 2;

  @media (min-width: 768px) {
    background-size: cover;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: -1;
  }

  ${ContentWrapper} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    p {
      margin: 30px 0;
      color: #fff;
      align-items: center;
      text-align: center;
      a {
        font-size: inherit;
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
        font-weight: 400;
      }
    }

    a {
      color: #fff;
      font-size: 2rem;
      font-family: 'Cormorant', serif;
      cursor: pointer;
    }

    p {
      color: #fff;
      margin: 30px 0;
    }
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <ContentWrapper>
        <p>
          Aby zarezerwować spływ kajakowy, prosimy o kontakt telefoniczny pod
          numerem: <a href='tel:514 225 355'>514 225 355</a>. Z przyjemnością
          ustalimy dogodny termin oraz trasę spływu, a także zarezerwujemy
          odpowiednią ilość kajaków na Państwa potrzeby.
        </p>

        <Link to='home' smooth>
          Kajaki Kamieńczyk
        </Link>
        <p>kajakikamienczyk.pl &copy; {year} wszelkie prawa zastrzeżone</p>
      </ContentWrapper>
    </StyledFooter>
  );
};

export default Footer;
