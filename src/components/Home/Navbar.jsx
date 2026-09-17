import { Film, Tv, Tags, TrendingUp } from "lucide-react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinks = [
    {
      name: "Movies",
      href: "/movie-listing",
      icon: Film,
      description: "Browse all movies",
    },
    {
      name: "TV Shows",
      // href: "/tv-shows",
      icon: Tv,
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
    <div className="px-8 py-3 flex items-center justify-between">
      <Link to={"/"} className="text-red-600 font-orbitron font-bold">
        Film Flex
      </Link>
      <div>
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
        <button className="btn-primary duration-1000 transition-all animate-pulse ">
          Watch Now
        </button>
      </NavLink>
    </div>
  );
};

export default Navbar;
