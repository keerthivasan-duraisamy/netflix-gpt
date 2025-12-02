import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useMovieCollection from "../hooks/useMovieCollection";
import { use } from "react";

const MainContainer = () => {
  //useMovieCollection();
  const moviesData = useSelector((store) => store?.movies?.nowPlayingMovies);
  // const moviePoster = useSelector((store) => store?.movies?.moviePoster);
  if (!moviesData) return;

  console.log(moviesData);

  return (
    <div className="max-w-[80%] mx-auto">
      <div className="main-movie mt-20 flex flex-wrap overflow-x-scroll pb-4 flex-row">
        {moviesData &&
          moviesData.map((movie) => {
            return (
              <MovieList
                key={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                overview={movie.overview}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MainContainer;
