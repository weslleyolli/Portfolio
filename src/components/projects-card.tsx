import { Globe, Package } from 'lucide-react';

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
        <div className="bg-white rounded-[30px] h-[100%] shadow-md p-6 mb-6 flex flex-col justify-between">
            <div>

                <img src={project.imageUrl} alt={project.title} className="w-full h-1/3 rounded-md mb-4" />
                <h2 className="text-3xl font-normal mb-2">{project.title}</h2>
                <p className="text-lg mb-4">{project.description}</p>
            </div>
            <div className="flex space-x-4">
                {project.links.website && (
                    <a href={project.links.website} className="text-blue-500 hover:text-blue-700">
                        <Globe size={24} color='#000' />
                    </a>
                )}
                {project.links.npm && (
                    <a href={project.links.npm} className="text-end">
                        <Package size={24} color='#000' />
                    </a>
                )}
            </div>
        </div>
    );
}