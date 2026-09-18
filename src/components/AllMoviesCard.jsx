import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdPublish } from "react-icons/md";
import AllMovieModal from "./modals/AllMovieModal";

const AllMoviesCard = ({ movie }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="shadow-sm shadow-gray-800 rounded-xl ">
      <figure>
        <img
          src={movie?.image?.medium}
          alt="Movie details"
          className="rounded-t-xl max-h-60 w-full"
        />
      </figure>
      <div className="py-6 px-4">
        <h2 className="text-start text-xl mb-3 font-bold">{movie?.name}</h2>
        {movie?.summary && (
          <div
            className="text-xs text-start font-semibold mb-4"
            dangerouslySetInnerHTML={{
              __html:
                movie?.summary?.length > 80
                  ? movie?.summary?.slice(0, 80) + "..."
                  : movie?.summary,
            }}
          ></div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 mb-4">
            <FaStar className="text-red-600" size={16} />
            <h4 className="text-xs font-semibold">{movie?.rating.average}</h4>
          </div>
          <div className="flex items-center gap-1 mb-4">
            <MdPublish className="text-red-600" size={20} />
            <h4 className="text-xs font-semibold">{movie?.premiered}</h4>
          </div>
        </div>

        <div className="">
          <button
            onClick={() => setOpenModal(true)}
            className="w-full btn-outline justify-center py-1"
          >
            See Details
          </button>
        </div>
      </div>
      {openModal && (
        <AllMovieModal
          openModal={openModal}
          movieId={movie?.id}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
};

export default AllMoviesCard;
