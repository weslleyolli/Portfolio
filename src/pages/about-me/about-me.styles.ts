import styled from 'styled-components';
import { Link } from 'react-router-dom';

const breakpoints = {
  mobile: 'max-width: 640px',
  tablet: 'min-width: 641px and max-width: 1024px',
  desktop: 'min-width: 1025px',
};

export const Container = styled.div<{ darkMode: boolean }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;

  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }

  ${({ darkMode }) => (darkMode ? 'bg-paper-dark' : 'bg-paper')};

  @media (${breakpoints.mobile}) {
    padding: 1rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 10; 

  img {
    height: 7rem;

    @media (${breakpoints.mobile}) {
      height: 5rem; /* Reduz a logo no mobile */
    }
  }
`;

export const Menu = styled.nav`
  display: flex;
  
  img {
    height: 2rem;

    @media (${breakpoints.mobile}) {
      height: 1.5rem; /* Reduz o ícone do menu no mobile */
    }
  }
`;

export const MenuItem = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    color: #007bff;
  }

  @media (${breakpoints.mobile}) {
    font-size: 1rem; /* Diminui o tamanho do texto no mobile */
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

  @media (${breakpoints.mobile}) {
    padding: 0.5rem;
    align-items: center; /* Centraliza no mobile */
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
  order: 2; /* O texto "about" vem por último no mobile */

  h1 {
    font-family: "Playpen Sans", cursive;
    font-weight: 900;
    font-size: 2.5rem;

    @media (${breakpoints.mobile}) {
      font-size: 1.8rem;
    }
  }

  p {
    width: 79%;
    font-family: "Playpen Sans", cursive;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.4;

    @media (${breakpoints.mobile}) {
      font-size: 14px;
      line-height: 1.3;
    }
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

export const ResumeLink = styled.a<{ darkMode: boolean }>`
  display: flex;
  gap: 8px;
  align-items: center;
  font-family: "Playpen Sans", cursive;
  font-weight: 600;
  font-size: 18px;
  margin-top: 2rem;
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

  @media (${breakpoints.mobile}) {
    font-size: 14px;
    gap: 6px;
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
    object-fit: cover; /* Garante que a imagem sempre mantenha a proporção */

    @media (${breakpoints.desktop}) {
      height: 89vh;
      width: 24vw;
      max-width: 600px;
      border-radius:0px;
      border-bottom-left-radius: 45px;
    }

    @media (${breakpoints.mobile}) {
      width: 90vw;
      height: 50vh;
    }
  }
`;