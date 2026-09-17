import { useEffect, useState } from "react";
import Movie from "../components/movies/Movie";

const MovieListing = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=boys`);
      const data = await res.json();
      setMovies(data);
    };

    getMovies();
  }, []);

  return (
    <div>
      <div className="flex px-12 my-3 items-center gap-4">
        <input
          type="text"
          placeholder="Find movies"
          className="w-full px-8 py-2  rounded-xl border border-gray-300 text-gray-200"
        />
        <button className="btn-formal px-12 py-2">Search</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3">
        {movies.map((movie) => (
          <Movie key={movie.show.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieListing;
