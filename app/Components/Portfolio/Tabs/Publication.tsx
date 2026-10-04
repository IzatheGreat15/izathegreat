import { getPublications } from "@/app/lib/data";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Publication() {
    const publications = getPublications();
    return (
        <div className="flex flex-col">
            {publications.map((pub, index) => (
                <div key={index} className="p-6 flex flex-col gap-4 border-b border-gray-700 md:last:border-b-0">
                    <div className="flex items-center gap-4">
                        <img src={pub.img} alt={pub.title} className="h-12 w-12 rounded-full" />

                        <div className="flex flex-col items-start gap-2">
                            <a href={pub.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-semibold text-sky-500">
                                {pub.title}
                                <FaExternalLinkAlt className="h-4 w-5" />
                            </a>
                            <p className="text-gray-400">{pub.subtitle}</p>
                        </div>
                    </div>
                    <p className="text-justify text-gray-400">Abstract — {pub.description}</p>
                    <div className="flex gap-4 flex-wrap">
                        {pub.focus_areas.map((fa) => (
                            <div
                                key={fa.label}
                                className="rounded-lg border border-slate-700 cursor-default hover:border-sky-500 hover:text-sky-500 bg-slate-800/40 px-4 py-3"
                            >
                                <div className="flex items-center gap-2">
                                    <fa.icon />
                                    <span className="text-sm">{fa.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}