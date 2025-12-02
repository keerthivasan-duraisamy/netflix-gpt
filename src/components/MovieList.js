import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useReducer } from "react";

const MovieList = ({ title, poster_path, overview }) => {
  // const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  // const moviePosterImage = useSelector((store) => store.movies?.moviePoster);
  // useMovieTrailer(movieTrailer, movieId);

  const initialState = {
    title: title,
    poster_path: poster_path,
    overview: overview,
    trailerVideo: null,
    moviePoster: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "trailer":
        return { ...state, trailerVideo: action.payload };
      case "poster":
        return { ...state, moviePoster: action.payload };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="px-3 py-2 movie-card w-full sm:w-1/2">
      <div className="bg-gray-800 p-3 h-full">
        <div className="movie-poster__bg">
          {/* <img src={poster_path} alt="poster" /> */}
        </div>
        <div className="movie-info__content">
          <h1 className="font-semibold uppercase text-xl mt-2 text-white">
            {title}
          </h1>
          <p className="text-white">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
