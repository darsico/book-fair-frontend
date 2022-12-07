import { BsGithub } from "react-icons/bs";
import { GrNode } from "react-icons/gr";
import { FaReact } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'
import { Link } from "react-router-dom";
const Footer = () => {
 const usefulLinks = [

  {
   name: 'Become a seller',
   link: '/seller',
  },
  {
   name: 'Search Stores',
   link: '/sellers',
  },
  {
   name: 'Shop All Books',
   link: '/',
  },
 ];

 const repoLinks = [
  {
   name: 'Server Repo',
   link: 'https://github.com/darsico/book-fair-server'
  },
  {
   name: 'Client Repo',
   link: 'https://github.com/darsico/book-fair-frontend'
  }

 ]
 return (
  <footer className="bg-black w-full text-white pb-4 mt-6">
   <div className=" container m-auto px-4 py-10 grid gap-10  md:gap-4 md:grid-cols-4 grid-cols-1 text-center md:text-start">

    <div>
     <h4 className="font-special font-bold text-white">BookFair</h4>
     <p className="description text-gray-600 text-sm pt-2">
      This is the book fair where buyers can buy books and sellers can create stores.
     </p>
    </div>
    <div>
     <ul>
      {usefulLinks.map((link) => (
       <li key={link.name}>
        <Link
         to={link.link}
         className="text-gray-400 hover:text-white transition duration-300 ease-in-out text-sm"
        >
         {link.name}
        </Link>
       </li>
      ))}
     </ul>
    </div>
    <div className="md:col-span-2 md:justify-self-end flex justify-center">
     <ul className="flex flex-col justify-center w-fit ">
      {
       repoLinks.map((link) => (
        <li key={link.name} className="w-fit">
         <a
          href={link.link}
          target="_blank"
          className="text-gray-40sm0 hover:text-white transition duration-300 ease-in-out flex items-center text-sm w-fit"
         >
          <BsGithub />/ {link.name}
         </a>
        </li>
       ))

      }
     </ul>
    </div>
   </div>
   <div className="w-full flex justify-center">
    <p className="text-center text-xs md:text-sm  text-gray-500 flex items-center gap-2">Project made by <span className="text-white">Diego Huaman</span> using <FaReact className="text-white text-lg md:text-xl" /> <GrNode className="text-white text-lg md:text-xl" /> <DiMongodb className="text-white text-lg md:text-xl" /> <SiTailwindcss className="text-white text-lg md:text-xl" /> </p>
   </div>
  </footer>
 );
}

export default Footer;