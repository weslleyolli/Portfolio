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
  margin-left: 2rem;
  margin-right: 2rem;
`;

// Grid dos projetos com scroll snapping
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  width: 100%;

  @media (${breakpoints.mobile}) {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh; /* Garante que o grid ocupe 100% da altura da tela em mobile */
  }

  @media (${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr; /* 2 colunas em tablets */
    width: 100%; /* Ajusta o grid para usar 100% da largura */
  }

  @media (${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr; /* 3 colunas em telas grandes */
    width: 66%; /* Reduz a largura do grid em telas maiores */
  }
`;

// Cada projeto ajustado para o tamanho uniforme
export const ProjectItem = styled.div`
  scroll-snap-align: start;
  height: auto;

`;

export const ProjectCardContainer = styled.div`
  /* Estilos para mobile */
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 5rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1; /* Garante que o card ocupe o mesmo espaço vertical */
  height: 42vh;

  img {
    width: 100%;
    height: 50%;
    border-radius: 8px;
    margin-bottom: 1rem;
    object-fit: cover; /* Garante que a imagem ocupe todo o espaço disponível */
  }

  h2 {
    font-size: clamp(3.5rem, 4vw, 2rem); /* Tamanho fluido da fonte */
    font-weight: normal;
    margin-bottom: 0.5rem;
    white-space: normal; /* Garantindo que o texto quebre em várias linhas se necessário */
  }

  p {
    font-size: clamp(2rem, 3vw, 1.125rem);
    line-height: 1.5; /* Define a altura das linhas */
    max-height: 6.0em; /* Limita a altura do parágrafo (3 linhas de texto) */
    overflow: hidden; /* Oculta o texto que ultrapassa o limite de altura */
    text-overflow: ellipsis; /* Adiciona as reticências (...) */
    display: -webkit-box; /* Define a área de visualização para o truncamento */
    -webkit-line-clamp: 4; /* Limita o parágrafo a 3 linhas */
    -webkit-box-orient: vertical; /* Orientação vertical para o truncamento */
  }

  .link-icons {
    display: flex;
    gap: 1rem;

    a {
      color: #000;
      transition: color 0.2s;

      &:hover {
        color: #1e90ff;
      }
    }
  }
  /* Estilos para desktops */
  @media (${breakpoints.desktop}) {
    height: 50vh;
    padding: 2rem;
    h2 {
      font-size: 2rem; /* Ajuste específico para tablet */
    }
    p {
      font-size: 1rem; /* Ajuste específico para tablet */
    }
  }
`;