import image from "../../assets/movie.jpg";

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
      <h2>Hero page</h2>
    </div>
  );
};

export default Hero;
