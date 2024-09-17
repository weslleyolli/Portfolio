import { useState } from 'react';

import { Container, Header, Menu, MenuItem, ContentWrapper, LeftSide, RightSide, Divider, ResumeLink } from './about-me-pt.styles';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutMePt() {
  const [darkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });

  return (
    <Container darkMode={darkMode} className={darkMode ? 'bg-paper-dark' : 'bg-paper'}>
      <Header>
        <Link to="/br">
          <img src="./logo.png" alt="" />
        </Link>
        <Menu>
          <MenuItem to="/">
            <img src="./menu.png" alt="" />
          </MenuItem>

        </Menu>
      </Header>

      <ContentWrapper>
        <LeftSide>
          <h1>SOBRE</h1>
          <Divider />
          <p>
            Oi, meu nome é Weslley Oliveira! Eu realmente gosto de programação e adoro mergulhar em novas tecnologias.
            Estou sempre ansioso para aprender e explorar as últimas inovações no mundo da tecnologia.
            Seja programando ou experimentando novas ferramentas, eu gosto do processo de resolver problemas e melhorar minhas habilidades ao longo do caminho.
            Estou constantemente em busca de novos desafios e oportunidades para crescer como desenvolvedor.
          </p>
          <ResumeLink href="https://drive.google.com/file/d/1PMCXu3HFJP2jrFSqlFRJBYE2VJ_LvT-a/view?usp=sharing" target="_blank" rel="noopener noreferrer" darkMode={darkMode}>
            <ArrowRight className="mt-1" />
            <p>curriculo</p>
          </ResumeLink>
        </LeftSide>
        <RightSide>
          <img src="./perfil.jfif" alt="Profile" />
        </RightSide>
      </ContentWrapper>
    </Container>
  );
};