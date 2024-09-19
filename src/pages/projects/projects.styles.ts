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

`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 640px) {
    font-size: 2rem;
    margin-top: 2rem;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 640px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  margin-right: 2rem;

  @media (max-width: 640px) {
    margin: 0;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 300px);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 641px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 100%;
  }

  @media (${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
`;

export const ProjectItem = styled.div`
  scroll-snap-align: start;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (${breakpoints.mobile}) {
    width: 100%;
  }
`;

export const ProjectCardContainer = styled.div`
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  min-width: 100%;

  img {
    width: 100%;
    height: auto; 
    border-radius: 8px;
    margin-bottom: 1rem;
    object-fit: cover;
    
  }

  h2 {
    font-size: clamp(1.5rem, 3vw, 1.5rem);
    font-weight: normal;
    color: #2b2b33;
  }

  p {
    color: #2b2b33;
    font-size: 1rem;
    line-height: 1.5;
    max-height: 4.5em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .link-icons {
    display: flex;
    gap: 0.5rem;

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

    img {
      width: 100%;
      height: 150px;
      max-height: 300px;
    }
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
    
    img {
      width: 100%;
      height: 150px;
      max-height: 300px;
    }
  }

  @media (${breakpoints.mobile}) {
    padding: 1.5rem;
    height: auto;
    
    img {
      width: 100%; 
      max-height: 150px;
    }
  }
`;
