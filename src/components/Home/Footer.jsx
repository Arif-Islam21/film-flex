import { FaFacebookF, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center mt-10 px-6 py-2">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-red-600 font-orbitron font-bold">Film Flex</h2>
      </div>
      <p className="text-xs font-light">
        Copyright © {new Date().getFullYear()} - All right reserved
      </p>
      <nav className="flex items-center gap-4 text-sm">
        <FaFacebookF />
        <FaSquareXTwitter />
        <FaGithubSquare />
      </nav>
    </footer>
  );
};

export default Footer;
