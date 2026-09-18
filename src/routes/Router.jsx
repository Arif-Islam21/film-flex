import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import MovieListing from "../pages/MovieListing";
import AllMovies from "../pages/AllMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movie-listing",
        element: <MovieListing />,
      },
      {
        path: "/movies",
        element: <AllMovies />,
      },
    ],
  },
]);

export default router;
