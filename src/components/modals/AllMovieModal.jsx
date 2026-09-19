import { Dna, ExternalLink, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdPublish } from "react-icons/md";

const AllMovieModal = ({ movieId, openModal, setOpenModal }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (!openModal) {
      return null;
    }

    const getMovie = async () => {
      const res = await fetch(`https://api.tvmaze.com/shows/${movieId}`);
      const data = await res.json();
      setMovie(data);
    };

    getMovie();
  }, [movieId, openModal]);

  return (
    <div
      className={`${openModal ? "fixed" : "hidden"} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
    >
      <div className="md:min-h-96 md:max-h-96 min-h-140 max-h-140 w-76 md:max-w-180 md:min-w-180 relative bg-gray-900 rounded-xl shadow-sm shadow-gray-300">
        <div
          className="max-w-180 max-h-96"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${movie?.image?.original})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            borderRadius: "10px",
          }}
        >
          <div className="flex items-center justify-center flex-col gap-2 min-h-screen">
            <h2 className="text-center text-xl md:text-3xl font-bold">
              {movie?.name}
            </h2>
            {movie?.summary && (
              <div
                className="text-xs text-start w-full px-2 md:px-0 md:max-w-2/3 font-semibold"
                dangerouslySetInnerHTML={{
                  __html:
                    movie?.summary?.length > 240
                      ? movie?.summary?.slice(0, 240) + "..."
                      : movie?.summary,
                }}
              ></div>
            )}

            <div className="flex items-center w-full justify-evenly">
              <div className="flex items-center gap-1 mb-4">
                <FaStar className="text-red-600" size={16} />
                <h4 className="text-xs font-semibold">
                  {movie?.rating?.average}
                </h4>
              </div>
              <div className="flex items-center gap-1 mb-4">
                <MdPublish className="text-red-600" size={20} />
                <h4 className="text-xs font-semibold">{movie?.premiered}</h4>
              </div>
            </div>
            <div className="flex items-center w-full justify-evenly">
              <div className="flex items-center gap-1 mb-4">
                <p className="text-red-600 font-bold text-xs">Type : </p>
                <h4 className="text-xs font-semibold">{movie?.type}</h4>
              </div>
              <div className="flex items-center gap-1 mb-4">
                <p className="text-red-600 font-bold text-xs">Language : </p>
                <h4 className="text-xs font-semibold">{movie?.language}</h4>
              </div>
            </div>
            <div className="flex items-center w-full justify-evenly">
              <div className="flex items-center gap-1 mb-4">
                <p className="text-red-600 flex flex-wrap px-4 items-center gap-1 font-bold text-xs">
                  <Dna /> Genres :{" "}
                </p>
                <div className="flex items-center gap-1">
                  {movie?.genres?.map((genre, idx) => (
                    <h4 key={idx} className="text-xs font-semibold">
                      {genre} ,
                    </h4>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-col md:flex-row pb-5 md:pb-0 md:justify-between px-6 w-full">
              <a
                target="_blank"
                rel="Open to new tab"
                href={movie?.officialSite}
                className="btn-primary text-white flex items-center w-full md:w-44 justify-between gap-2 px-5 py-2"
              >
                Official Site <ExternalLink />
              </a>
              <button
                onClick={() => setOpenModal(false)}
                className="btn-outline w-full md:w-32 px-5 py-2"
              >
                <X /> Close
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={() => setOpenModal(false)}
          className="absolute -top-2 right-0 cursor-pointer size-6 flex items-center justify-center text-red-600 border border-red-600 font-extrabold rounded-full"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default AllMovieModal;
