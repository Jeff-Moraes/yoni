import styled from 'styled-components';

import { grainColor, mustardColor, blushColor, blueBerryColor } from '../colors';

export const AboutContainer = styled.section<{ dropSrc: String }>`
  display: grid;

  .titleContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    padding: 20px 10vw 30px;

    background-color: ${grainColor};

    img {
      position: absolute;
      top: -18px;
      left: 20vw;
    }

    h1 {
      color: ${mustardColor};
      font-size: 1.5rem;
      font-weight: 300;
      text-align: center;
    }

    p {
      text-align: center;
      font-size: 0.9rem;
      font-weight: 300;
      line-height: 1.2rem;
      margin-top: 30px;
      margin-bottom: 20px;
    }

    a {
      align-self: center;
      width: 178px;
      height: 44px;
      background-color: ${blushColor};
      border-radius: 22px;
      color: ${grainColor};
      font-size: 1.15rem;
      font-weight: 500;
      text-align: center;
      padding-top: 11px;
    }
  }

  .dropsContainer {
    background-image: ${({dropSrc}) => `url(${dropSrc})`};
    background-size: cover;
    background-position: center;

    div {
      transform: translateY(80px);
      background-color: ${grainColor};

      padding: 21px;
      margin: 20px;
      text-align: center;

      h2 {
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 16px;
      }

      p {
        font-size: 0.9rem;
        font-weight: 300;
        line-height: 1.2rem;
        margin-bottom: 5px;
      }

      span {
        font-size: 0.75rem;
        font-weight: 300;
        display: block;
        text-align: right;
      }
    }
  }

  @media (min-width: 899px) {
    grid-template-columns: repeat(2, 1fr);
    position: relative;

    .titleContainer {
      padding: 28px 10vw 30px;
      margin-top: 100px;
      background-color: transparent;
      
      img {
        position: absolute;
        top: -15px;
        left: 13vw;
      }

      h1 {
        font-size: 1.8rem;
      }

      p {
        font-size: 1.4rem;
        line-height: 2rem;
        font-weight: 300;
      }
    }

    .dropsContainer {
      transform: translateY(50px);
      height: 44vh;
      margin: 0 30px;

      div {
        transform: translateY(120px);

        padding: 21px;
        margin: 20px;
        text-align: center;

        h2 {
          font-size: 1.8rem;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.3rem;
          line-height: 1.8rem;
          margin-bottom: 10px;
        }

        span {
          font-size: 1rem;
        }
      }
    }

    .backgroudColorContainer {
      z-index: -1;
      position: absolute;
      top: 110px;
      width: 100%;
      height: 44vh;
      background-color: ${grainColor};
    }
  }
`;