import { getEducation } from "@/app/lib/data";

export default function Education() {
    const education = getEducation();
    return (
        <div className="flex flex-col">
            {education.map((educ, index) => (
                <div key={index} className="p-6 flex flex-col gap-4 border-b border-gray-700 md:last:border-b-0">
                    <div className="flex items-center gap-4">
                        <img src={educ.img} alt={educ.title} className="h-12 w-12 bg-white rounded-full" />

                        <div className="flex flex-col items-start gap-2">
                            <span className="flex flex-wrap items-center gap-4">
                                <h3 className="text-lg font-semibold text-sky-500">{educ.title}</h3>
                                {educ.badge && (
                                    <span className="bg-slate-800/40 border border-sky-500 text-sky-500 text-xs px-4 py-1 rounded-full">
                                        {educ.badge}
                                    </span>
                                )}
                            </span>
                            <p className="text-gray-400">{educ.subtitle}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {educ.courseworks.map((course) => (
                            <div
                                key={course.label}
                                className="rounded-lg border cursor-default border-slate-700 hover:border-sky-500 hover:text-sky-500 bg-slate-800/40 px-4 py-3"
                            >
                                <div className="flex items-center gap-2">
                                    <course.icon />
                                    <span className="text-sm">{course.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}