import styled from 'styled-components';

import { mustardColor, blueBerryColor, marineBlueColor, blushColor } from '../colors';

export const HeaderContainer = styled.header<{ src: String }>`
  width: 100%;
  height: 100%;
  position: relative;

  a:hover {
    .titleContainer {
      h1 {
        color: ${blushColor};
      }
    }
  }

  .bgContainer {
    width: 100%;
    height: 44vh;
    background-image: ${({src}) => `url(${src})`};
    background-size: cover;
    background-position: center;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    h2 {
      margin: 20px;
      font-size: 0.8rem;
      color: ${mustardColor};
      transition: color 0.3s;
    }
  }

  .titleContainer {
    padding: 20px;

    h1 {
      color: ${marineBlueColor};
      font-size: 1.5rem;
      margin-bottom: 20px;
      transition: color 0.3s;
    }

    div {
      display: flex;
      align-items: center;

      color: ${blueBerryColor};

      p, span {
        margin-left: 7px;
      }

      img {
        width: 32px;
        height: 32px;
        object-fit:cover;
        border-radius: 50%;
      }
    }
  }

  @media (min-width: 768px) {
    .bgContainer {
      align-items: flex-start;
      justify-content: flex-start;

      h2 {
        display: none;
      }
    }

    .titleContainer {
      position: absolute;
      width: 40vw;
      bottom: 0;
      padding: 30px;

      h1 {
        font-size: 2rem;
      }

      div {

        p, span {
          font-size: 0.8rem;
          margin-left: 7px;
        }

        img {
          width: 34px;
          height: 34px;
        }
      }
    }
  }
`;