import { Globe, Package } from 'lucide-react';
import { ProjectCardContainer } from '../pages/projects/projects.styles';

// Defina os tipos das props do ProjectCard
interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        imageUrl: string;
        links: {
            website?: string;
            github?: string;
            npm?: string;
        };
    };
}

// Componente ProjectCard que recebe as props definidas por ProjectCardProps
export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <ProjectCardContainer className="transition-transform duration-300 transform hover:scale-105">
            <div>
                <div className="relative">
                    <img className="w-full h-64 object-cover" src={project.imageUrl} alt={project.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                </div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>
            <div className="link-icons">
                {project.links.website && (
                    <a href={project.links.website}>
                        <Globe size={24} />
                    </a>
                )}
                {project.links.npm && (
                    <a href={project.links.npm}>
                        <Package size={24} />
                    </a>
                )}
            </div>
        </ProjectCardContainer>
    );
}