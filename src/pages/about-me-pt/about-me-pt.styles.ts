import styled from 'styled-components';
import { Link } from 'react-router-dom';

const breakpoints = {
  mobile: 'max-width: 640px',
  tablet: 'min-width: 641px and max-width: 1024px',
  desktop: 'min-width: 1025px',
};

export const Container = styled.div<{ darkMode: boolean }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5rem;

  ${({ darkMode }) => (darkMode ? 'bg-paper-dark' : 'bg-paper')};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 10; 

  img {
    height: 7rem;
  }
`;

export const Menu = styled.nav`
  display: flex;
  
  img {
    height: 2rem;
  }
`;

export const MenuItem = styled(Link)`
  font-size: 1.2rem;
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    color: #007bff;
  }
`;


export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (${breakpoints.desktop}) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px;
  width: 100%;
  text-align: center;
  order: 2;

  h1 {
    font-family: "Playpen Sans", cursive;
    font-weight: 900;
    font-size: 3rem;
  }

  p {
    width: 79%;
    font-family: "Playpen Sans", cursive;
    font-weight: 600;
    font-size: 18px;
  }

  @media (${breakpoints.desktop}) {
    width: 75%;
    text-align: left;
    order: 1;
    padding-top: 4rem;
    padding-left: 10rem;
    align-items: flex-start;
  }
`;

export const Divider = styled.div`
  height: 2px;
  background-color: white;
  width: 100%;
`;

export const ResumeLink = styled.a <{ darkMode: boolean }>`
  display: flex;
  gap: 8px;
  align-items: center;
  font-family: "Playpen Sans", cursive;
  font-weight: 600;
  font-size: 18px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px; 
    width: 0;
    height: 2px;
    background-color: ${({ darkMode }) => (darkMode ? '#dbdae2' : '#2c2c32')}; 
    transition: width 0.3s ease; 
  }

  &:hover:after {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const RightSide = styled.div`
  position: static;
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  order: 1;

  @media (${breakpoints.desktop}) {
    position: absolute;
    top: 0px;
    right: 0px; 
    z-index: 1; 
    width: auto;
    padding: 0;
    order: 2;
  }

  img {
    width: 70vw;
    height: 60vh;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 

    @media (${breakpoints.desktop}) {
      height: 89vh;
      width: 24vw;
      max-width: 600px;
      border-bottom-left-radius: 45px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;