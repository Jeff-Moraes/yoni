import styled from 'styled-components';

import { grainColor, blushColor, mustardColor, marineBlueColor } from '../colors';

export const Nav = styled.nav`
  z-index: 10;
  width: 100%;
  height: 6.5vh;
  padding: 5px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${grainColor};
  border-bottom: 1px solid rgba(0,0,0,0.07);

  .logo a {
    z-index: 10;
    position: absolute;
    width: 10vw;
    min-width: 52px;
    display: inline-block;
    transform: translateX(0%);
    transform: translateY(-20%);
    cursor: pointer;

    transition: transform 1s, width 1s;

    img {
      width: 100%;
    }
  }

  .active a {
    width: 30vw;
    transform: translateX(100%);
  }

  @media (min-width: 768px) {
    height: 10vh;

    .logo a {
      transform: translateY(-25%);
    }
  }
`;

export const DesktopMenu = styled.div`
  z-index: 10;
  display: flex;
  
  a, button {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${marineBlueColor};
    padding: 10px;
    margin-right: 5vw;
    transition: color 0.3s;

    &:hover {
      color: ${blushColor};
    }
  }

  & > a:last-child {
    margin-right: 0;
  }

  button {
    border: none;
    background-color: transparent;
  }

  & > div {
    position: relative;
  }

  .categories {
    z-index: 10;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50px;
    background-color: ${grainColor};
    padding: 5px 0;

    a {
      padding: 10px 0;
      margin: 0 10px;
      font-size: 1rem;

      & + a {
        border-top: 1px dashed ${marineBlueColor};
      }
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  z-index: 100;
  display: block;
  cursor: pointer;
  padding: 10px 10px;
  margin: 5px 5px;
  transition: .5s;

  &:hover {
    transform: scale(1.05);
  }

  .close {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 3px;
    background: ${mustardColor};
    border-radius: 5px;
    transition: .5s;

    &:before, &:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 3px;
      background: ${mustardColor};
      border-radius: 5px;
      transition: .5s;
    }
    &:before {
      top: -10px;
    }

    &:after {
      top: 10px;
    }
  }

  .active {
    background: rgba(0,0,0,0);
    
    &:before {
      top: 0;
      transform: rotate(45deg);
    }
    &:after {
      top: 0;
      transform: rotate(135deg);
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  z-index: 10;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${grainColor};

  transition: opacity 1s;

  padding-top: 20vh;

  display: flex;
  flex-direction: column;

  a {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${marineBlueColor};
    margin: 0 5vw;
    padding-top: 1.7vh;
    transition-delay: 2s;

  }


  div {
    display: flex;
    flex-direction: column;

    a {
        border-top: 0.2px solid ${marineBlueColor};
        padding-top: 1.7vh;
        padding-bottom: 0;
        margin-top: 1.7vh;
    }

    & + a {
      border-top: 0.2px solid ${marineBlueColor};
      padding-top: 1.7vh;
      padding-bottom: 0;
      margin-top: 1.7vh;
    }
  }
  
  .subCateg {
    font-size: 1rem;
    font-weight: 300;
    color: ${marineBlueColor};
    margin: 0 5vw;
    padding-top: 1.7vh;
    border-top: none;
    transition-delay: 2s;
    border-bottom: none;
  }
`;