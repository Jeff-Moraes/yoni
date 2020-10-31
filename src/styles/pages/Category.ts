import styled from 'styled-components';

import { grainColor, blushColor } from '../colors';

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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

  .categoriesIcons {
    display: flex;
    width: 100%;
    overflow: scroll;
    background-color: ${grainColor};
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    padding: 20px 0;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 15px;
      text-align: center;

      p {
        font-size: 0.7rem;
      }
    }

    img {
      width: 85px;
      height: 85px;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 10px;
    }

    .selectedCategory {
      img {
        border: 4px solid ${blushColor};
      }
    }
  }

  main {
    width: 100%;
    margin: 0 20px;
    max-width: 980px;
    margin: 50px 0;
  }

  @media (min-width: 768px) {
    .categoriesIcons {
      justify-content: center;

      div {
        p {
          font-size: 1rem;
        }
      }

      img {
        width: 100px;
        height: 100px;
        margin-bottom: 15px;
      }

      .selectedCategory {
        img {
          border: 5px solid ${blushColor};
        }
      }
    }
  }
`;