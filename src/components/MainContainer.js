import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import useMovieCollection from '../hooks/useMovieCollection';
import { use } from "react";

const MainContainer = () => {
    useMovieCollection();
    const moviesData = useSelector((store) => store?.movies?.nowPlayingMovies);
    // const moviePoster = useSelector((store) => store?.movies?.moviePoster);
    if (!moviesData) return;

    console.log(moviesData);

    return (
        <div className="max-w-[80%] mx-auto">
            <div className="main-movie absolute mt-20 grid grid-cols-4">
                {moviesData && moviesData.map((movie) => {
                    return (
                        <VideoBackground key={movie.id} title={movie.title} poster_url={movie.poster_url} source_name={movie.source_name} />
                    )
                })}
            </div>
        </div>
    )
}

export default MainContainer;