import styled from 'styled-components';

const breakpoints = {
  mobile: 'max-width: 640px',
  desktop: 'min-width: 1025px',
};

export const ProjectsContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 640px) {
    background-color: blue;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 2rem;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 300px); /* 3 colunas no desktop */
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 641px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas no tablet */
    max-width: 100%; /* Garantir que o grid preencha a tela */
  }

  @media (${breakpoints.mobile}) {
    grid-template-columns: 1fr; /* 1 coluna no mobile */
  }
`;

export const ProjectItem = styled.div`
  scroll-snap-align: start;
  height: auto;


`;

export const ProjectCardContainer = styled.div`
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 4rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 42vh;
  min-width: 300px; /* Largura mínima para os cards */
  max-width: 1fr;

  img {
    width: 100%;
    height: 50%;
    border-radius: 8px;
    margin-bottom: 1rem;
    object-fit: cover;
  }

  h2 {
    font-size: clamp(2.5rem, 3vw, 2rem);
    font-weight: normal;
    white-space: normal;
    color: #2b2b33;
  }

  p {
    color: #2b2b33;
    font-size: clamp(2rem, 3vw, 1.125rem);
    line-height: 1.5;
    max-height: 6.0em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
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
  @media (min-width: 641px) and (max-width: 1024px) {
    height: 400px;
    padding: 1.5rem;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem; 
    }
  }

  @media (${breakpoints.desktop}) {
    height: 400px;
    padding: 1.5rem;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem; 
    }
  }
`;