import styled from 'styled-components';

import { grainColor, marineBlueColor, blushColor } from '../colors';

export const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  background-color: ${grainColor};

  margin-top: 90px;
  padding: 5vh 10vw 50px;

  .logo a {
    z-index: 10;
    position: absolute;
    width: 25vw;
    min-width: 100px;
    max-width: 200px;
    display: inline-block;
    transform: translate(-8vw, -8vh);
    margin-left: 20px;
    cursor: pointer;

    img {
      width: 100%;
    }
  }

  .footerLinks {
    display: flex;
    flex-direction: column;

    div {
      a {
        transition: opacity 0.3s;
        & + a {
          margin-left: 20px;
        }
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  ul {
    z-index: 10;
    display: flex;
    justify-content: space-between;
    margin: 20px 0 30px;

    li {
      list-style: none;

      & + li {
        margin-left: 20px;
      }
      a {
        font-size: 1rem;
        color: ${marineBlueColor};
        transition: color 0.3s;

        &:hover {
          color: ${blushColor};
        }
      }
    }
  }  

  @media (min-width: 768px) {
    .logo a {
      transform: translate(-8vw, -10vh);
    }

    .footerLinks {
      div {
        img {
          width: 44px;
          height: 44px;
        }
      }
    }
  }
`;