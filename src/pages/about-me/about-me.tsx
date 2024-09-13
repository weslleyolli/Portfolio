import { useState } from 'react';

import { Container, Header, Menu, MenuItem, ContentWrapper, LeftSide, RightSide, Divider, ResumeLink } from './about-me.styles';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutMe() {
  const [darkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });
  
  return (
    <Container darkMode={darkMode} className={darkMode ? 'bg-paper-dark' : 'bg-paper'}>
      <Header>
        <Link to='/'>
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
          <h1>ABOUT</h1>
          <Divider />
          <p>
            Hi, my name is Weslley Oliveira! I'm really like about programming and love diving into new technologies.
            I’m always eager to learn and explore the latest innovations in the tech world. Whether it's coding or trying out new tools,
            I enjoy the process of solving problems and improving my skills along the way.
            I'm constantly on the lookout for new challenges and opportunities to grow as a developer.
          </p>
          <ResumeLink href="https://drive.google.com/file/d/1bmP9S-VIeZxDccm8FZmz-IRvAN4e5Nq0/view" target="_blank" rel="noopener noreferrer" darkMode={darkMode}>
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