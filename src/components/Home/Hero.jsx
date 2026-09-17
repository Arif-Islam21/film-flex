import { Link } from "react-router";
import image from "../../assets/movie.jpg";
import robot from "../../assets/robot.png";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
        borderRadius: "10px",
      }}
    >
      <div className="flex items-center min-h-screen justify-between">
        <div className="md:w-1/2 pl-6 flex flex-col gap-6 items-start  h-full w-full">
          <p className="text-3xl font-bold">
            Find the best movies & shows to watch with friends
          </p>
          <p className="text-sm font-bold text-start ">
            Personalized recommendation based on your rating and your friends
            taste
          </p>
          <div className="flex items-center w-full gap-16">
            <Link to="/movie-listing">
              <button className="btn-primary">Watch Now</button>
            </Link>
            <button className="btn-outline px-5 py-2">Learn more</button>
          </div>
        </div>
        <div className=" md:w-1/2">
          <img src={robot} alt="movie bot" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
