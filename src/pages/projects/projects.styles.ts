import styled from 'styled-components';

// Definindo breakpoints manuais para responsividade
const breakpoints = {
  mobile: 'max-width: 640px',
  tablet: 'min-width: 641px and max-width: 1024px',
  desktop: 'min-width: 1025px',
};

// Container principal com ajustes para cobrir toda a tela
export const ProjectsContainer = styled.div<{ darkMode: boolean }>`
  min-height: 100vh; /* Garante que o container ocupe pelo menos 100% da altura da viewport */
  width: 100vw;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.darkMode ? '#2c2c32' : '#e6e8e5')};
  color: ${(props) => (props.darkMode ? '#e5e5e5' : '#333')};
`;

// Título
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 0.5rem;
`;

// Subtítulo
export const Subtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
`;

// Wrapper para centralizar o grid de projetos
export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Grid dos projetos com scroll snapping
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;

  @media (${breakpoints.mobile}) {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh; /* Garante que o grid ocupe 100% da altura da tela em mobile */
  }

  @media (${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr; /* 2 colunas em telas médias */
    width: 80%;
  }

  @media (${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 66%; /* 3 colunas em telas grandes */
  }
`;

// Cada projeto com altura de 100vh para dispositivos móveis
export const ProjectItem = styled.div`
  scroll-snap-align: start;
  height: auto;

  @media (${breakpoints.mobile}) {
    height: 100vh; /* Cada projeto ocupa 100% da tela no mobile */
  }
`;
