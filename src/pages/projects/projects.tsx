import { useState } from 'react';
import { ProjectsContainer, Title, Subtitle, ProjectsGrid, ProjectsWrapper, ProjectItem } from './projects.styles';
import { ProjectCard } from "../../components/projects-card";
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
        description: "upload and download created projects and files, login to save up to 5 projects and can be installed as a progressive web application. The stack is Laravel for the backend/API's and vanilla JS for the frontend. The Github repository for this is private at the moment.",
        imageUrl: "/Rocket-notes.png",
        links: {
            website: "#"
        }
    },
    {
        title: "Bay.js",
        description: "It doesn't need a build step but can be included in a build step if you want to. It's a great way to create reusable components for your projects. It's available as a NPM package and doesn't use any dependencies and is 11kb minified. It also doesn't use eval or new Function so can be used in strict CSP policies without a build step.",
        imageUrl: "/Rocket-notes.png",
        links: {
            website: "#",
            github: "#",
            npm: "#"
        }
    },
    {
        title: "Cookiemunch",
        description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        imageUrl: "/Rocket-notes.png",
        links: {
            website: "#",
            github: "#",
            npm: "#"
        }
    }
];

export function Projects() {
    const [darkMode] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem("darkMode");
        return savedTheme === "true";
    });

    return (
        <ProjectsContainer darkMode={darkMode}>
      <Title>My Work</Title>
      <Subtitle>A collection of projects I've worked on.</Subtitle>
      
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