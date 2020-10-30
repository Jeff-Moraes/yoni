import styled from 'styled-components';

import { grainColor, blushColor, blueBerryColor } from '../colors';

export const SobreContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  > div {
    width: 100%;
    padding: 2vh 0;
    background-color: ${grainColor};

    h1 {
      font-size: 1rem;
      text-align: center;
      color: ${blushColor};
    }
  }

  main {
    position: relative;
    width: 100%;

    > img {
      position: absolute;
      width: 17vw;
      min-width: 100px;
      max-width: 250px;
      display: inline-block;
      transform: translate(5vw, 50%);

    }

    .topContainer {
      position: relative;
      padding: 17vw 20px 50px;

      p, li {
        font-size: 0.9rem;
        line-height: 2rem;
        list-style: none;
        margin-left: 10vw;
        font-weight: 300;
      }

      span {
        font-size: 0.7rem;
        color: ${blueBerryColor};
        margin-left: 10px;
      }

      .vulva {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 30vw;
        max-width: 300px;
        margin-right: 8vw;
        margin-bottom: 100px;
      }
    }

    .gridContainer {
      display: grid;
      grid-template-columns: 1fr;

      div {
        margin: 0 6vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        p {
          font-size: 0.9rem;
          line-height: 1.8rem;
          font-weight: 300;
          text-indent: 30px;
        }
      }

      .dance {
        width: 90%;
        padding: 30px 7vw;
        margin: 0 auto;
      }
    }
  }

  @media (min-width: 680px) {
    main {
      .topContainer {
        padding-top: 12vw;

        p, li {
          font-size: 1.2rem;
        }

        .vulva {
          margin-right: 20vw;
          margin-bottom: 40px;
        }
      }
      
      .gridContainer {
        grid-template-columns: 1fr 1fr;

        div {    
          p {
            font-size: 1.2rem;
            text-indent: 50px;
          }
        }
      }
    }
  }

`;