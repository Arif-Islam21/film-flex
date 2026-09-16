import { Film, Tv, Tags, TrendingUp } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  const navLinks = [
    {
      name: "Movies",
      href: "/movies",
      icon: Film,
      description: "Browse all movies",
    },
    {
      name: "TV Shows",
      href: "/tv-shows",
      icon: Tv,
      description: "Explore TV shows and series",
    },
    {
      name: "Genres",
      href: "/genres",
      icon: Tags,
      description: "Browse by genre",
    },
    {
      name: "Popular",
      href: "/popular",
      icon: TrendingUp,
      description: "See what's trending",
    },
  ];

  return (
    <div className="px-8 py-3 flex items-center justify-between">
      <Link to={"/"} className="text-red-600 font-orbitron font-bold">
        Film Flex
      </Link>
      <div>
        <ul className="flex items-center gap-3">
          {navLinks.map((nav) => (
            <li
              className="px-3 py-1 rounded-lg border-red-600 cursor-pointer border font-bold flex items-center gap-2 text-red-700 text-sm"
              key={nav.name}
            >
              <nav.icon size={18} /> {nav.name}
            </li>
          ))}
        </ul>
      </div>
      <button className="bg-red-600 px-6 py-2 rounded-lg text-gray-900 cursor-pointer  duration-1000 transition-all animate-pulse font-bold">
        Watch Now
      </button>
    </div>
  );
};

export default Navbar;
