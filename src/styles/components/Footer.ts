import styled from 'styled-components';

import { grainColor, marineBlueColor } from '../colors';

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
    max-width: 200px;
    display: inline-block;
    transform: translate(-8vw, -6vh);
    margin-left: 20px;

    img {
      width: 100%;
    }
  }

  .footerLinks {
    display: flex;
    flex-direction: column;

    div {
      img {
        & + img {
          margin-left: 20px;
        }
      }
    }
  }

  ul {
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
      }
    }
  }  

  @media (min-width: 768px) {
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