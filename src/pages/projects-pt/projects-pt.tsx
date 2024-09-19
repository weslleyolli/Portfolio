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
        title: "Domposer",
        description: " The stack is Laravel for the backend/API's and vanilla JS for the frontend. The Github repository for this is private at the moment.",
        imageUrl: "/Rocket-notes.png",
        links: {
            website: "#"
        }
    },
    {
        title: "Bay.js",
        description: "It's available as a NPM package and doesn't use any dependencies and is 11kb minified. It also doesn't use eval or new Function so can be used in strict CSP policies without a build step.",
        imageUrl: "/Rocket-notes.png",
        links: {
            website: "#",
            github: "#",
            npm: "#"
        }
    },
    {
        title: "Cookiemunch",
        description: " This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        imageUrl: "/Rocket-notes.png",
        links: {
            website: "#",
            github: "#",
            npm: "#"
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