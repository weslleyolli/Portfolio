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
        <ProjectCardContainer>
            <div>
                <img src={project.imageUrl} alt={project.title} />
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