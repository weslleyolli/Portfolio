import { useState } from 'react';

import { Container, Header, Menu, MenuItem, ContentWrapper, LeftSide, RightSide, Divider, ResumeLink } from './about-me.styles';
import { ArrowRight } from 'lucide-react';

export function AboutMe() {
  const [darkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });
  
  return (
    <Container darkMode={darkMode} className={darkMode ? 'bg-paper-dark' : 'bg-paper'}>
      <Header>
        <img src="./logo.png" alt="" /> {/* Substituir por imagem se necessário */}
        <Menu>
          <MenuItem to="/">
            <img src="./menu.png" alt="" />
          </MenuItem>

        </Menu>
      </Header>

      <ContentWrapper>
        <LeftSide>
          <h1>ABOUT</h1>
          <Divider />
          <p>
            Hi, my name is Weslley Oliveira! I'm really like about programming and love diving into new technologies.
            I’m always eager to learn and explore the latest innovations in the tech world. Whether it's coding or trying out new tools,
            I enjoy the process of solving problems and improving my skills along the way.
            I'm constantly on the lookout for new challenges and opportunities to grow as a developer.
          </p>
          <ResumeLink href="https://drive.google.com/file/d/1PMCXu3HFJP2jrFSqlFRJBYE2VJ_LvT-a/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <ArrowRight className="mt-1" />
            <p>resume</p>
          </ResumeLink>
        </LeftSide>
        <RightSide>
          <img src="./perfil.jfif" alt="Profile" />
        </RightSide>
      </ContentWrapper>
    </Container>
  );
};