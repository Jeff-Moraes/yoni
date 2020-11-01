import styled from 'styled-components';
import { marineBlueColor, blushColor, mustardColor, blueBerryColor } from '../colors';

export const HighlightsContainer = styled.section`
  width: 100%;
  padding-top: 30px;

  h1 {
    font-size: 1.25rem;
    padding-left: 20px;
    margin-bottom: 20px;
  }

  .flexRowContainer {
    display: flex;
    overflow: scroll;
    width: 100%;

    /* &::-webkit-scrollbar {
      display: none;
    } */

    a {
      width: 100%;
      height: 100%;
      border: 1px solid rgba(0,0,0,0.2);
      transition: border 0.3s;

      &:first-of-type {
        margin-left: 20px;
      }

      a:last-of-type {
        margin-right: 20px;
      }

      &:hover {
        border: 1px solid ${blushColor};
        h2 {
          color: ${blushColor};
        }
      }
    }

    a + a {
      margin-left: 10px;
    }

    .postImageContainer {
      height: 155px;
      width: 155px;

      img {
        width: 100%;
        height: 100%;
        object-fit:cover;
      }
    }

    .postInfoContainer {
      display: flex;
      flex-direction: column;
      height: 155px;
      padding: 5px 10px;

      > div {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      > p {
        color: ${mustardColor};
        text-align: center;
      }

      h2 {
        font-size: 0.9rem;
        line-height: 1rem;
        color: ${marineBlueColor};
        margin: 5px 0;

        transition: color 0.3s;
      }

      .postAuthorContainer {
        align-self: baseline;
        display: flex;
        align-items: center;
        padding: 0 5px;
        margin-bottom: 5px; 

        img {
          width: 32px;
          height: 32px;
          object-fit:cover;
          border-radius: 50%;
          margin-right: 10px;
        }

        p {
          color: ${blueBerryColor};
          font-size: 0.75rem;
        }
        
        span {
          color: ${blueBerryColor};
          font-size: 0.6rem;
        }
      }
    }
  }
`;