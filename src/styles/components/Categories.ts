import styled from 'styled-components';

import { grainColor, marineBlueColor, blushColor } from '../colors';

export const CategoriesContainer = styled.div`
  padding: 100px 20px 0;

  h1 {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }

  a {
    width: 100%;
  }

  .categoriesList {
    display: grid;
    grid-template-columns: 1fr;
  }


  @media (min-width: 899px) {
    padding-top: 10vh;
  }

  @media (min-width: 360px) and (max-width: 680px) {
    .categoriesList {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 680px) and (max-width: 1200px) {
    .categoriesList {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  @media (min-width: 1200px) {
    .categoriesList {
      display: flex;
    }
  }
`;

export const CategoryImage = styled.div<{ imgSrc: String }>`
  width: 100%;
  max-width: 320px;
  height: 115px;
  margin-bottom: 20px;

  background-image: ${({imgSrc}) => `url(${imgSrc})`};
  background-size: cover;
  background-position: center bottom;

  display: flex;

  &:hover {
    h2 {
      color: ${blushColor};
    }
  }

  h2 {
    width: 100%;
    align-self: flex-end;
    padding: 5px;
    background-color: ${grainColor};
    opacity: 0.9;
    font-size: 0.9rem;
    text-align: center;
    color: ${marineBlueColor};
    transition: color 0.3s;
  }
`;