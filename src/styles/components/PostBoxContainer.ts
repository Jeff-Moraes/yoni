import styled from 'styled-components';

import { blueBerryColor, marineBlueColor } from '../colors';

export const PostBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0,0,0,0.2);
  margin-top: 30px;

  display: grid;
  grid-template-columns: 1fr;

  img {
    width: 100%;
    height: 100%;
    object-fit:cover;
  }

  .postInfoContainer {
    display: flex;
    flex-direction: column;
    padding: 20px 20px;

    h2 {
      font-size: 1.6rem;
      color: ${marineBlueColor};
    }

    .postAuthorContainer {
      align-self: baseline;
      display: flex;
      align-items: center;
      padding: 0 5px;
      margin-top: 20px; 

      img {
        width: 32px;
        height: 32px;
        object-fit:cover;
        border-radius: 50%;
        margin-right: 10px;
      }

      div {
        display: flex;
      
        p {
          color: ${blueBerryColor};
          font-size: 0.75rem;
        }
        
        span {
          color: ${blueBerryColor};
          font-size: 0.6rem;
          margin-left: 5px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    .postImageContainer {
      height: 250px;
      object-fit:cover;
    }

    .postInfoContainer {
      h2 {
        font-size: 2.2rem;
      }
    }
  }
`;