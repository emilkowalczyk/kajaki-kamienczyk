import React from 'react';
import styled from 'styled-components';
import { ContentWrapper } from '../../assets/styles/GlobalStyle';
import Img1 from '../../assets/images/img1.jpg';
import Img2 from '../../assets/images/img2.jpg';
import { motion } from 'framer-motion';

export const StyledAbout = styled(motion.div)`
  width: 100%;

  ${ContentWrapper} {
    margin: 130px auto 0 auto;
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 36px;

  @media (min-width: 768px) {
    grid-template-columns: auto auto;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledImg = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
  img {
    width: 100%;
  }
`;

const About = () => {
  return (
    <StyledAbout name='about'>
      <ContentWrapper>
        <StyledGrid>
          <Content>
            <h1>O nas</h1>
            <p>
              Zapraszamy Państwa do niezapomnianych spływów kajakowych na
              malowniczą rzekę Liwiec, w samym sercu Mazowsza, na trasie
              obejmującej odcinki od Zawiszyna przez Puste Łąki aż po
              Kamieńczyk, oraz od Urli po Kamieńczyk.
            </p>
          </Content>
          <StyledImg>
            <img src={Img1} alt='' />
          </StyledImg>
        </StyledGrid>
        <br />
        <br />
        <StyledGrid>
          <StyledImg>
            <img src={Img2} alt='' />
          </StyledImg>
          <Content>
            <p>
              Nasza oferta to nie tylko organizacja spływów kajakowych, ale
              także wypożyczalnia kajaków. Działamy zarówno w Łochowie, jak i
              jego okolicach, na obszarze rzeki Liwiec i rzeki Bug. Zapewniamy
              wygodny transport kajaków zarówno na początek, jak i koniec trasy
              spływu. Nasze komfortowe busy pomieszczą dziewięć osób i kajaki,
              gwarantując wygodny przejazd.
              <br />
              <br />
              Dołączcie do nas i odkryjcie uroki natury podczas niezapomnianych
              spływów kajakowych po urokliwych wodach rzeki Liwiec.
            </p>
          </Content>
        </StyledGrid>
      </ContentWrapper>
    </StyledAbout>
  );
};

export default About;
