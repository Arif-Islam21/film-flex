import { Film, Menu, Search, Tags, TrendingUp, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const navLinks = [
    {
      name: "Browse",
      href: "/movie-listing",
      icon: Search,
      description: "Browse all movies",
    },
    {
      name: "Movies",
      href: "/movies",
      icon: Film,
      description: "Explore TV shows and series",
    },
    {
      name: "Genres",
      // href: "/genres",
      icon: Tags,
      description: "Browse by genre",
    },
    {
      name: "Popular",
      // href: "/popular",
      icon: TrendingUp,
      description: "See what's trending",
    },
  ];

  return (
    <div className="">
      <div className="px-8 py-3 flex items-center justify-between">
        <Link to={"/"} className="text-red-600 font-orbitron font-bold">
          Film Flex
        </Link>
        <div className="hidden md:flex">
          <ul className="flex items-center gap-3">
            {navLinks.map((nav) => (
              <NavLink key={nav.name} to={nav?.href || "/"}>
                <li className="btn-outline px-3 py-1 ">
                  <nav.icon size={18} /> {nav.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <NavLink to="/movie-listing">
          <button className="btn-primary hidden md:flex duration-1000 transition-all animate-pulse ">
            Watch Now
          </button>
        </NavLink>
        <div className="relative">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="flex md:hidden cursor-pointer"
          >
            {openMenu ? <X /> : <Menu />}
          </button>
          {openMenu && (
            <div className="min-h-52 min-w-42 bg-gray-600/80 flex items-start pt-4 justify-center rounded-lg shadow-sm shadow-gray-300 absolute top-8 -right-6">
              <ul className="flex items-center flex-col gap-3">
                {navLinks.map((nav) => (
                  <NavLink key={nav.name} to={nav?.href || "/"}>
                    <li
                      onClick={() => setOpenMenu(false)}
                      className="btn-outline border-white text-white px-3 py-1 "
                    >
                      <nav.icon size={18} /> {nav.name}
                    </li>
                  </NavLink>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
