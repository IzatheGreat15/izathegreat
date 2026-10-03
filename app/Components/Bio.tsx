'use client';

import { useState } from 'react';

export default function Bio() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <p className="text-gray-400 text-justify">
                I'm a Full Stack Developer specializing in PHP, Laravel, and Typescript, with experience designing, developing, and maintaining custom ERP, CRM, CMS, and business applications across various industries.
                {expanded && (
                    <>
                        <br /><br />

                        My work focuses on building practical, scalable solutions that streamline business operations, automate workflows, and improve overall efficiency. I've worked on everything from payment integrations and reusable application frameworks to complex approval systems, data management solutions, and UI modernization.

                        <br /><br />

                        I actively leverage AI-powered development tools, particularly GitHub Copilot and Claude, to accelerate implementation, improve code accuracy, explore solutions to unfamiliar technical challenges, and streamline development workflows.

                        <br /><br />

                        I enjoy tackling complex technical problems, learning new technologies, and building software that delivers meaningful value to both users and businesses.
                    </>
                )}
            </p>

            <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="mt-3 text-sky-400 hover:text-sky-300 text-sm font-medium cursor-pointer transition-colors"
            >
                {expanded ? 'See Less' : 'See More'}
            </button>
        </div>
    );
}