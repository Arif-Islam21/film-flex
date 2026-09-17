import { FaStar } from "react-icons/fa";
import { MdPublish } from "react-icons/md";

const Movie = ({ movie }) => {
  return (
    <div className="shadow-sm shadow-gray-800 rounded-xl ">
      <figure>
        <img
          src={movie?.show?.image?.original}
          alt="Shoes"
          className="rounded-t-xl max-h-60 w-full"
        />
      </figure>
      <div className="py-6 px-4">
        <h2 className="text-start text-xl mb-3 font-bold">
          {movie?.show?.name}
        </h2>
        {movie?.show?.summary && (
          <div
            className="text-xs text-start font-semibold mb-4"
            dangerouslySetInnerHTML={{
              __html:
                movie.show.summary.length > 80
                  ? movie.show.summary.slice(0, 80) + "..."
                  : movie.show.summary,
            }}
          ></div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 mb-4">
            <MdPublish className="text-red-600" size={20} />
            <h4 className="text-xs font-semibold">{movie?.show?.premiered}</h4>
          </div>
          <div className="flex items-center gap-1 mb-4">
            <FaStar className="text-red-600" size={16} />
            <h4 className="text-xs font-semibold">
              {movie?.show?.rating.average}
            </h4>
          </div>
        </div>

        <div className="">
          <button className="w-full btn-outline justify-center py-1">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
