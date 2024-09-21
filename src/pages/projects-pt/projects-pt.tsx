import { useState } from 'react';
import { ProjectsContainer, Title, Subtitle, ProjectsGrid, ProjectsWrapper, ProjectItem } from './projects-pt.styles';
import { ProjectCard } from "../../components/projects-card";
import { Link } from 'react-router-dom';
interface Project {
    title: string;
    description: string;
    imageUrl: string;
    links: {
        website?: string;
        github?: string;
        npm?: string;
    };
}
const projects: Project[] = [
    {
        title: "Github Blog",
        description: "Este projeto utiliza a API do GitHub para exibir informações do perfil do usuário, como nome, avatar e repositórios públicos. Construído com React, ele permite que os usuários pesquisem perfis e visualizem detalhes dos repositórios em tempo real.",
        imageUrl: "/github-blog.png",
        links: {
            website: "https://thegithubblog.netlify.app/",
            github: "https://github.com/weslleyolli/GithubBlog",
        }
    },
    {
        title: "Coffe Shop",
        description: "Este projeto é uma plataforma de e-commerce para uma cafeteria online, desenvolvida utilizando Next.js para desempenho otimizado, renderização do lado do servidor (SSR) e geração de sites estáticos (SSG).",
        imageUrl: "/CoffeShop.png",
        links: {
            website: "https://oncoffeeshop.netlify.app/",
            github: "https://github.com/weslleyolli/coffee-shop",
        }
    },
    {
        title: "Rocket Notes",
        description: " Um app de anotações permite criar, editar, salvar e organizar notas de forma simples e rápida. Ideal para capturar ideias, listas e lembretes,",
        imageUrl: "/Rocket-notes.png",
        links: {
            website: "https://therockettnotes.netlify.app/",
            github: "https://github.com/weslleyolli/Rocket_notes"
        }
    }
];

export function ProjectsBr() {
    const [darkMode] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem("darkMode");
        return savedTheme === "true";
    });

    return (
        <ProjectsContainer
            className={darkMode ? 'bg-paper-dark' : 'bg-paper'}
        >
            <Link to="/br" className='flex justify-center items-center h-28 w-28 mx-auto lg:mx-0 lg:justify-start transform transition-transform duration-300 hover:scale-105 '>
                <img src="/logo.png" alt=""  />
            </Link>
            <Title>Meus trabalhos</Title>
            <Subtitle>Uma coleção de projetos em que trabalhei.</Subtitle>

            <ProjectsWrapper>
                <ProjectsGrid>
                    {projects.map((project, index) => (
                        <ProjectItem key={index}>
                            <ProjectCard project={project} />
                        </ProjectItem>
                    ))}
                </ProjectsGrid>
            </ProjectsWrapper>
        </ProjectsContainer>
    );
}