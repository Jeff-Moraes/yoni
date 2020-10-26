import styled from 'styled-components';

import { grainColor, mustardColor, marineBlueColor } from '../colors';

export const Nav = styled.nav`
  width: 100vw;
  height: 7.5vh;
  padding: 5px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${grainColor};

  .logo a {
    position: absolute;
    width: 12vw;
    display: inline-block;
    transform: translateX(0%);
    transform: translateY(-10%);

    transition: transform 1s, width 1s;

    img {
      width: 100%;
    }
  }

  .active a {
    width: 30vw;
    transform: translateX(100%);
  }

  .menuLinks {
    
    a {
      margin-left: 5vw;
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 400;
      color: ${marineBlueColor};
      padding: 10px;
    }
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
    box-shadow: 0 2px 5px #fff;
    transition: .5s;

    &:before, &:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 3px;
      background: ${mustardColor};
      border-radius: 5px;
      box-shadow: 0 2px 5px #fff;
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
    box-shadow: 0 2px 5px rgba(0,0,0,0);
    
    &:before {
      top: 0;
      transform: rotate(45deg);
    }
    &:after {
      top: 0;
      transform: rotate(135deg);
    }
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${grainColor};

  transition: opacity 3s;

  padding-top: 20vh;

  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${marineBlueColor};
    margin: 0 5vw;
    padding: 2.5vh 0;
    border-bottom: 1px solid ${marineBlueColor};
    transition-delay: 2s;
  }
`;