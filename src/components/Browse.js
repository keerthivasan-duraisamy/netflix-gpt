import { useEffect } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import useMovieCollection from "../hooks/useMovieCollection";
import MainContainer from "./MainContainer";
import { useGetNowPlayingMoviesQuery } from "../utils/tmdbApi";
import { addNowPlayingMovies } from "../utils/movieSlice";

const Browse = () => {
  //useMovieCollection();
  const dispatch = useDispatch();
  const { data } = useGetNowPlayingMoviesQuery({
    language: "en-US",
    page: 1,
  });

  useEffect(() => {
    if (data?.results) {
      console.log(data);
      dispatch(addNowPlayingMovies(data.results));
    }
  }, [data, dispatch]);

  return (
    <>
      <Header />
      <MainContainer />
    </>
  );
};

export default Browse;
