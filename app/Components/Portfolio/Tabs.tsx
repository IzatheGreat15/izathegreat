'use client';

import { useState } from "react";
import Education from "./Tabs/Education";
import Experience from "./Tabs/Experience";
import Projects from "./Tabs/Projects";
import Publication from "./Tabs/Publication";

const tabs = [
    'Experience',
    'Education',
    'Publications',
    'Projects',
] as const;

type Tab = (typeof tabs)[number];

export default function Tabs() {
    const [activeTab, setActiveTab] = useState<Tab>('Experience');

    const tabContent: Record<Tab, React.ReactNode> = {
        Experience: <Experience />,
        Education: <Education />,
        Publications: <Publication />,
        Projects: <Projects />,
    };

    return (
        <div className="w-full rounded-b-lg">
            <div className="w-full flex justify-between">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveTab(tab)}
                        className={`p-4 w-full cursor-pointer text-center border-b-2 transition-colors duration-300 ${
                            activeTab === tab
                                ? 'text-sky-500 border-sky-500'
                                : 'text-gray-400 border-gray-700 hover:text-sky-500 hover:border-sky-500'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="text-gray-300">
                {tabContent[activeTab]}
            </div>
        </div>
    );
}