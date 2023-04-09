import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  const footerNavs = [
    {
      href: "/about",
      name: "About",
    },
    {
      href: "home",
      name: "Home",
    },
    {
      href: "/contact",
      name: "Contact",
    },
    {
      href: "/terms",
      name: "Terms",
    },
  ];

  return (
    <footer className=" text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8 ">
      <hr className="h-px my-8 bg-gray-200 border-0 " />
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <Image
          src={"/panaversedao.png"}
          className="w-40 sm:mx-auto"
          alt="Panaverse DAO Logo"
          width={150}
          height={150}
        />
        <p className="leading-relaxed mt-2 text-sm">
          The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
          Panaverse DAO is a movement to spread these technolgies globally. It
          is community of Web 3 and Metaverse developers, designers, trainers,
          startup founders and service providers.
        </p>
      </div>

      <ul className="  items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li className="hover:text-gray-800  font-medium" key={idx}>
            <Link href={item.href} className="mx-6 tracking-wider">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <hr className="h-px mt-8 bg-gray-200 border-0 " />

      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2023 Panaverse Dao All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:ring hover:ring-slate-200 hover:bg-slate-200">
              <Link
                href="https://www.facebook.com/groups/panaverse"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="text-black" size={28} />
              </Link>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:ring hover:ring-slate-200 hover:bg-slate-200">
              <Link
                href="https://github.com/panaverse"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-black" size={28} />
              </Link>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:ring hover:ring-slate-200 hover:bg-slate-200">
              <Link
                href="https://twitter.com/Panaverse_edu"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter className="text-black" size={28} />
              </Link>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:ring hover:ring-slate-200 hover:bg-slate-200">
              <Link
                href="https://www.youtube.com/@panaverse/streams"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube className="text-black" size={28} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
