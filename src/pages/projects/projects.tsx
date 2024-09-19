import { useState } from 'react';
import { ProjectsContainer, Title, Subtitle, ProjectsGrid, ProjectsWrapper, ProjectItem } from './projects.styles';
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
        description: "This project uses the GitHub API to display user profile information, such as name, avatar, and public repositories. Built with React, it allows users to search profiles and view repository details in real time.",
        imageUrl: "/github-blog.png",
        links: {
            website: "https://thegithubblog.netlify.app/",
            github: "https://github.com/weslleyolli/GithubBlog",
        }
    },
    {
        title: "Coffe Shop",
        description: "This project is an e-commerce platform for an online coffee shop, developed using Next.js for optimized performance, server-side rendering (SSR), and static site generation (SSG).",
        imageUrl: "/CoffeShop.png",
        links: {
            website: "https://oncoffeeshop.netlify.app/",
            github: "https://github.com/weslleyolli/coffee-shop",
        }
    },
    {
        title: "Cookiemunch",
        description: " This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        imageUrl: "/Rocket-notes.png",
        links: {
            website: "#",
            github: "#",
        }
    }
];

export function Projects() {
    const [darkMode] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem("darkMode");
        return savedTheme === "true";
    });

    return (
        <ProjectsContainer
            className={darkMode ? 'bg-paper-dark' : 'bg-paper'}
        >
            <Link to="/" className='flex justify-center items-center h-28 w-28 mx-auto lg:mx-0 lg:justify-start transform transition-transform duration-300 hover:scale-105 '>
                <img src="/logo.png" alt=""  />
            </Link>
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