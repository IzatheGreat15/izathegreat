import { BsClaude } from "react-icons/bs";
import { FaChargingStation, FaCode, FaDatabase, FaEnvelope, FaGit, FaGithub, FaLaptopCode, FaLaravel, FaLinkedin, FaNetworkWired, FaReact } from "react-icons/fa";
import { FaMapLocation, FaPhp, FaRotate } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";
import { GiFlamingo } from "react-icons/gi";
import { GoCopilot } from "react-icons/go";
import { GrDocumentText } from "react-icons/gr";
import { LuAppWindow, LuLeaf } from "react-icons/lu";
import { MdElectricBolt } from "react-icons/md";
import { RiNextjsLine, RiSupabaseLine, RiSvelteFill, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { SiLivewire } from "react-icons/si";
import { TbCube, TbSql } from "react-icons/tb";

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

export function getExperiences() {
    return [
        {
            img: '/fortix.jpg',
            title: 'Senior Software Engineer',
            subtitle: 'Fortix | Jan 2024 - Sept 2026',
            descriptions: [
                'Developed and enhanced a custom ERP system with customized configurations depending on business needs',
                'Upgrading TinyMCE and building an internal inline file-upload solution without requiring a paid plugin.',
                'Developed approval workflows, claims management, and reusable document template systems to streamline business operations.',
                'Contributed to modernizing the ERP UI and improving overall usability.',
            ],
            technologies: [
                {
                    icon: FaLaravel,
                    name: 'Laravel',
                },
                {
                    icon: FaPhp,
                    name: 'PHP',
                },
                {
                    icon: TbSql,
                    name: 'SQL',
                },
                {
                    icon: RiTailwindCssFill,
                    name: 'Tailwind',
                },
                {
                    icon: RiSvelteFill,
                    name: 'Svelte',
                },
            ],
        },
        {
            img: '/devhouse.jpg',
            title: 'Lead Developer',
            subtitle: 'DevHouse | May 2022 - Jan 2024',
            descriptions: [
                'Delivered custom CRM solutions for non-profit organizations, improving donor, campaign, and engagement management.',
                'Designed tailored workflows, automation, and reporting tools to improve operational efficiency and campaign visibility.',
                'Architected an in-house Laravel forms framework to standardize data collection and accelerate application development.',
            ],
            technologies: [
                {
                    icon: FaPhp,
                    name: 'PHP',
                },
                {
                    icon: FaLaravel,
                    name: 'Laravel',
                },
                {
                    icon: TbSql,
                    name: 'SQL',
                },
                {
                    icon: RiTailwindCssFill,
                    name: 'Tailwind',
                },
                {
                    icon: SiLivewire,
                    name: 'Livewire',
                },
            ],
        },
        {
            img: '/social-impact.jpg',
            title: 'Software Engineer',
            subtitle: 'Social Impact Marketing, Ltd. | Feb 2020 - May 2022',
            descriptions: [
                'Developed a custom real estate bidding platform that streamlined bid submission and enabled property owners to evaluate and select from the top five bids.',
                'Integrated Stripe to support secure one-time commission payments and subscription-based bidding plans, enabling flexible monetization.',
            ],
            technologies: [
                {
                    icon: FaReact,
                    name: 'React',
                },
                {
                    icon: RiSupabaseLine,
                    name: 'Supabase',
                },
                {
                    icon: RiVercelFill,
                    name: 'Vercel',
                },
            ],
        }
    ];
}

export function getEducation() {
    return [
        {
            title: 'Bachelor of Science in Computer Science',
            subtitle: 'University of San Carlos | 2020 - 2024',
            badge: 'Cum Laude',
            img: '/usc.png',
            courseworks: [
                {
                    label: 'Data Structures & Algorithms',
                    icon: FaCode,
                },
                {
                    label: 'Software Engineering',
                    icon: FaLaptopCode,
                },
                {
                    label: 'Web Development',
                    icon: FiGlobe,
                },
                {
                    label: 'Computer Networks',
                    icon: FaNetworkWired,
                },
                {
                    label: 'Database Management Systems',
                    icon: FaDatabase,
                },
                {
                    label: 'Object-Oriented Programming',
                    icon: TbCube,
                },
                {
                    label: 'UI/UX Design',
                    icon: LuAppWindow,
                },
            ],
        }
    ];
}

export function getPublications() {
    return [
        {
            title: 'Green Vehicle Routing Model Using Flamingo Search Algorithm',
            href: 'https://ijercse.com/article/March%203.pdf',
            description: 'This paper presents a unique approach to the Green Vehicle Routing Problem with Multiple Technologies and Partial' + 
                            'Recharges (GVRP-MTPR) using the Flamingo Search Algorithm (FSA). GVRP-MTPR is a variation of the traditional Vehicle Routing' +
                            'Problem (VRP) characterized by the need for efficient routes considering the use of electric vehicles, multiple charging technologies,' +
                            'and partial recharges of the green vehicles. FSA is a swarm intelligence optimization algorithm that is inspired by the behaviors of' +
                            'flamingos, mainly the Foraging and Migrating behaviors. FSA has previously demonstrated excellent performance in a diverse set of' +
                            'tasks such as push-pull circuit problems, path planning problems, and network intrusion detection systems. In our proposed methodology,' +
                            'we use the Flamingo Search Algorithm (FSA) to tackle GVRP-MTPR. Our proposed model generates an initial set of solutions that is' +
                            'further optimized using the foraging and migrating behaviors of FSA. The model was tested on a dataset of 60 instances of varying' +
                            'customer and vehicle counts, order distributions, and topologies. Key metrics such as cost, fitness, number of iterations, and execution' +
                            'time are used in evaluating the performance of the model. The results highlight the competitiveness of the Flamingo Search Algorithm' +
                            'in addressing GVRP-MTPR, offering insights for the optimization of green vehicle routing in logistics and transportation operations.',
            subtitle: 'Undergraduate Thesis | University of San Carlos | 2024',
            img: '/flamingo.png',
            focus_areas: [
                {
                    label: 'Green Vehicle Routing Problem (GVRP-MTPR)',
                    icon: LuLeaf,
                },
                {
                    label: 'Electric Vehicles',
                    icon: MdElectricBolt,
                },
                {
                    label: 'Multiple Charging Technologies',
                    icon: FaChargingStation,
                },
                {
                    label: 'Partial Recharges',
                    icon: FaRotate,
                },
                {
                    label: 'Flamingo Search Algorithm (FSA)',
                    icon: GiFlamingo,
                },
            ]
        }
    ];
}

export function getProjects() {
    return [
        {
            icon: FaMapLocation,
            title: 'Suroyan',
            description: 'A passion project built with Next.js, Supabase, and Vercel that helps users plan trips by organizing travel' +
                            'schedules, accommodations, and destinations into a structured itinerary. It uses route optimization to group nearby' +
                            'destinations and generate an efficient daily travel plan, reducing unnecessary travel between locations.',
            images: [
                {
                    img: '/suroyan-1.png',
                    title: 'Suroyan List View',
                },
                {
                    img: '/suroyan-2.png',
                    title: 'Suroyan Map View',
                },
            ],
            technologies: [
                {
                    icon: RiNextjsLine,
                    name: 'Next.js',
                },
                {
                    icon: RiSupabaseLine,
                    name: 'Supabase',
                },
                {
                    icon: RiVercelFill,
                    name: 'Vercel',
                },
                {
                    icon: RiTailwindCssFill,
                    name: 'Tailwind',
                },
            ],
            url: 'https://suroyan.vercel.app',
        },
    ];
}