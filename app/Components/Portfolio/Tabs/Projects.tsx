import { getProjects } from "@/app/lib/data";
import ImageModal from "../../ImageModal";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
    const projects = getProjects();

    return (
        <div className="flex flex-col">
            {projects.map((proj, index) => (
                <div key={index} className="p-6 flex flex-col gap-4 border-b border-gray-700 md:last:border-b-0">
                    <div className="flex items-center gap-4">
                        <proj.icon className="text-sky-500 h-6 w-6" />

                        <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold text-sky-500">{proj.title}</h3>
                            {proj.url && (
                                <a href={proj.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-semibold text-sky-500">
                                    <FaExternalLinkAlt className="h-3 w-3" />
                                </a>
                            )}
                        </div>
                    </div>

                    <p className="text-justify text-gray-400">{proj.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {proj.images.map((img) => (
                            <ImageModal
                                key={img.img}
                                src={img.img}
                                alt={img.title}
                            />
                        ))}
                        
                    </div>

                    <div className="flex gap-4 flex-wrap">
                        {proj.technologies.map((tech, i) => (
                            <div key={i} className="flex items-center gap-2 cursor-default bg-gray-800 hover:bg-sky-600/40 px-3 py-1 rounded-full">
                                <tech.icon />
                                <span className="text-sm">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}