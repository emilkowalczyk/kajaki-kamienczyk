import React from 'react';
import { ContentWrapper } from '../../assets/styles/GlobalStyle';
import RouteImg from '../../assets/images/img3.jpg';
import styled from 'styled-components';

export const StyledDirections = styled.section`
  ${ContentWrapper} {
    margin: 130px auto 0 auto;

    img {
      width: 100%;
    }
  }
`;

const Directions = () => {
  return (
    <StyledDirections>
      <ContentWrapper>
        <img src={RouteImg} alt='trasy' />
      </ContentWrapper>
    </StyledDirections>
  );
};

export default Directions;
