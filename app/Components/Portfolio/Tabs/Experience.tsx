import { getExperiences } from "@/app/lib/data";

export default function Experience() {
    const experiences = getExperiences();
    return (
        <div className="flex flex-col">
            {experiences.map((exp, index) => (
                <div key={index} className="p-6 flex flex-col gap-4 border-b border-gray-700 md:last:border-b-0">
                    <div className="flex items-center gap-4">
                        <img src={exp.img} alt={exp.title} className="h-12 w-12 rounded-full" />

                        <div className="flex flex-col items-start gap-2">
                            <h3 className="text-lg font-semibold text-sky-500">{exp.title}</h3>
                            <p className="text-gray-400">{exp.subtitle}</p>
                        </div>
                    </div>
                    <ul className="list-disc list-inside text-gray-300">
                        {exp.descriptions.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>

                    <br/>

                    <div className="flex gap-4 flex-wrap">
                        {exp.technologies.map((tech, i) => (
                            <div key={i} className="cursor-default flex items-center gap-2 bg-gray-800 hover:bg-sky-600/40 px-3 py-1 rounded-full">
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