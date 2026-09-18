import { X } from "lucide-react";
import { useEffect, useState } from "react";

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

  console.log(movie);

  return (
    <div
      className={`${openModal ? "fixed" : "hidden"} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
    >
      <div className="min-h-96 min-w-180 relative bg-gray-900 rounded-xl shadow-sm shadow-gray-300">
        showing modals
        <button
          onClick={() => setOpenModal(false)}
          className="absolute -top-2 right-0 cursor-pointer size-6 flex items-center justify-center text-red-600 border border-red-600 rounded-full"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default AllMovieModal;
