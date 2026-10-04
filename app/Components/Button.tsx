export default function Button({label, href}: {label: string; href: string}) {
  return (
    <a target="_blank" className="border-2 border-sky-600 rounded-full font-semibold px-12 py-2 text-sky-600 hover:bg-sky-600 hover:text-white transition-colors duration-300" href={href}>
      {label}
    </a>
  );
}
