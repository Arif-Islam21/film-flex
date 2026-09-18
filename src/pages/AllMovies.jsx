import { useEffect, useState } from "react";
import AllMoviesCard from "../components/AllMoviesCard";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovieData = async () => {
      const res = await fetch("https://api.tvmaze.com/shows");
      const data = await res.json();
      setMovies(data);
    };

    getMovieData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3">
        {movies.map((movie) => (
          <AllMoviesCard key={movie?.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
