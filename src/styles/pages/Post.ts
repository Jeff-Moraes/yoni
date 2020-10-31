import styled from 'styled-components';

import { salmonColor, blushColor, mustardColor, blueBerryColor, marineBlueColor } from '../colors';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    margin: 0 20px;
    max-width: 680px;

    > p {
      margin: 20px 0;
      font-size: 0.8rem;
      color: ${mustardColor};
    }

    h1 {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    div {
      display: flex;
      align-items: center;
      color: ${blueBerryColor};
      margin: 15px 0 30px;

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

    h2 {
      font-size: 0.9rem;
      font-style: italic;
      font-weight: 300;
      line-height: 1.4rem;
      color: ${marineBlueColor};
      margin: 0;
    }
  }

  main {
    max-width: 680px;

    img {
      width: 100%;
      height: 40vh;
      object-fit:cover;
      margin: 5vh 0;
    }

    h3 {
      font-size: 1.2rem;
      line-height: 1.4rem;
      text-transform: uppercase;
      color: ${marineBlueColor};
      margin: 0 20px 20px;
    }

    p {
      margin: 0 20px;
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.8rem;
      color: ${marineBlueColor};
    }
  }

  section {
    width: 100%;
    max-width: 680px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    > a {
      font-size: 1.6rem;
      line-height: 2.2rem;
      text-align: center;
      color: ${blushColor};
      place-self: center;
      margin: 60px 20px 0;

      &:hover {
        color: ${salmonColor};
      }
    }
  }

  @media (min-width: 768px) {

    header {
      > p {
        font-size: 1rem;
      }
      h1 {
        font-size: 2rem;
        line-height: 2.5rem;
      }

      h2 {
        font-size: 1.2rem;
        line-height: 1.7rem;
      }
    }

    main {

      p {
        margin: 0;
        font-size: 1.2rem;
        line-height: 2rem;
      }
    }
  }
`;