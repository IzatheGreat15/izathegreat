import { BsClaude } from "react-icons/bs";
import { FaEnvelope, FaGit, FaGithub, FaLaravel, FaLinkedin } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { GoCopilot } from "react-icons/go";
import { GrDocumentText } from "react-icons/gr";
import { RiNextjsLine } from "react-icons/ri";
import { TbSql } from "react-icons/tb";

export function getTechnologies() {
    return [
        { name: 'Laravel', icon: FaLaravel },
        { name: 'PHP', icon: FaPhp },
        { name: 'Next.js', icon: RiNextjsLine },
        { name: 'SQL', icon: TbSql },
    ];
}

export function getTools() {
    return [
        { name: 'Git', icon: FaGit },
        { name: 'Github', icon: FaGithub },
        { name: 'Copilot', icon: GoCopilot },
        { name: 'Claude', icon: BsClaude },
    ];
}

export function getSocialLinks() {
    return [
        {
            name: 'LinkedIn',
            username: '@KathleenIzaMonzales',
            icon: FaLinkedin,
            url: 'https://www.linkedin.com/in/kathleen-iza-monzales-397866220/',
        },
        {
            name: 'GitHub',
            username: '@IzatheGreat15',
            icon: FaGithub,
            url: 'https://github.com/IzatheGreat15',
        },
        {
            name: 'Email',
            username: 'monzalesiza@gmail.com',
            icon: FaEnvelope,
            url: 'mailto:monzalesiza@gmail.com',
        },
        {
            name: 'CV',
            username: 'Kathleen Iza Monzales',
            icon: GrDocumentText,
            url: 'https://bit.ly/kathleen-cv',
        },
    ];
}