import Button from "./Components/Button";
import Bio from "./Components/Bio";
import { FiMail, FiMapPin } from "react-icons/fi";
import { getSocialLinks, getTechnologies, getTools } from "./lib/data";
import Tabs from "./Components/Portfolio/Tabs";

export default function Home() {
  const technologies  = getTechnologies();
  const tools = getTools();
  const socialLinks = getSocialLinks();

  return (
    <main className="flex min-h-screen flex-col md:flex-row gap-8 items-start md:justify-center md:px-24 md:py-10 bg-gray-900 text-gray-300">
      <div className="h-full w-full md:w-1/6 order-2 md:order-1 px-6 md:px-0">
        {/* Tech Stack */}
        <h3 className="text-xl">Tech Stack</h3>
        <div className="flex flex-col gap-4 mt-4">
          {technologies.map(({ name, icon: Icon}) => (
            <span
              key={name}
              className="flex gap-8 hover:text-sky-600 cursor-default text-lg items-center"
            >
              <Icon className={`h-6 w-6`} />
              {name}
            </span>
          ))}
        </div>

        <br/>

        {/* Tools */}
        <h3 className="text-xl">Tools</h3>
        <div className="flex flex-col gap-4 mt-4">
          {tools.map(({ name, icon: Icon}) => (
            <span
              key={name}
              className="flex gap-8 hover:text-sky-600 cursor-default text-lg items-center"
            >
              <Icon className={`h-6 w-6`} />
              {name}
            </span>
          ))}
        </div>

        <br/><br/>

        <Button label="Discover" href="https://bit.ly/kathleen-cv" />
      </div>

      <div className="md:border-2 md:border-sky-600 rounded-lg h-full w-full md:w-4/5 order-1 md:order-2">
        {/* Header */}
        <div className="relative rounded-t-lg">
          <img src="/bg.jpg" alt="Description" className="h-48 w-full object-cover rounded-t-lg" />
          <div className="w-full text-right p-4">
            <Button label="Discover" href="https://bit.ly/kathleen-cv" />
          </div>

          <img src="profile.jpg" alt="Profile" className="h-32 w-32 rounded-full border-5 border-gray-900 absolute bottom-0 left-5 md:left-10 transform" />
        </div>
        
        {/* Bio */}
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Kathleen Iza Monzales</h1>
          <h3 className="text-lg text-gray-400">Full Stack Software Engineer</h3>
          <br/>
          <Bio />
        </div>

        {/* Links */}
        <div className="p-4 w-full flex flex-col md:flex-row gap-4 md:gap-12">
          <span className="text-gray-400 flex gap-2 hover:text-sky-600 hover:cursor-default">
            <FiMapPin className="h-5 w-5 text-gray-400" />
            Asia-Pacific (APAC)
          </span>
          <span className="text-gray-400 flex gap-2 hover:text-sky-600 hover:cursor-pointer">
            <FiMail className="h-5 w-5 text-gray-400" />
            <a href="mailto:monzalesiza@gmail.com">monzalesiza@gmail.com</a>
          </span>
        </div>

        <br/><br/>
        
        <Tabs />
      </div>

      <div className="h-full w-full md:w-1/4 order-3 flex flex-col gap-4">
        <img src="https://media.giphy.com/media/9LZTcawH3mc8V2oUqk/giphy.gif" width="100%" className="object-cover h-52 rounded-lg" />

        <div className="bg-gray-800 rounded">
          <div className="p-4 border-b-2 border-gray-700">
            More About Me
          </div>

          {socialLinks.map(({ name, username, icon: Icon, url }) => (
            <div
              key={name}
              className="p-4 border-b-2 flex items-center gap-4 border-gray-700 last:border-b-0"
            >
              <Icon className="h-7 w-7 text-gray-400 shrink-0" />

              <span className="text-gray-400 w-8/12 flex flex-col gap-1 min-w-0">
                <p>{name}</p>
                <p className="text-xs truncate">{username}</p>
              </span>

              <a
                className="border text-xs font-semibold border-sky-600 rounded-full px-6 py-2 text-sky-600 hover:bg-sky-600 hover:text-white transition-colors duration-300"
                href={url}
                target={url.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
