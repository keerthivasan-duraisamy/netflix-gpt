import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMoviePoster, addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieTrailer, movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    const moviePoster = useSelector((store) => store.movies.moviePoster);

    const getMovieVideos = movieTrailer;
    const getMoviePoster = () => {
        let poster = "https://occ-0-2219-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQ2cleoSwNmXZ9d0-luk9rcCamrMXk3vKmtW2KyofF4bAMEJKjZNasrVIb0E50JuZdBGeAyQLOMqaoG2uZpn9MmbPm54KiyLxPMj.jpg?r=fe4";
        dispatch(addMoviePoster(poster));
    }
    useEffect(() => {
        !trailerVideo && dispatch(addTrailerVideo(getMovieVideos));
        !moviePoster && getMoviePoster();
    }, []);
}

export default useMovieTrailer;
