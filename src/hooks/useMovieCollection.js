import { useEffect } from "react";
import { API_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieCollection = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      const data = result.releases.slice(0, 10);
      dispatch(addNowPlayingMovies(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [API_URL]);
};

export default useMovieCollection;
