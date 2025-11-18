import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({title, poster_url, source_name}) => {
    // const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    // const moviePosterImage = useSelector((store) => store.movies?.moviePoster);
    // useMovieTrailer(movieTrailer, movieId);

    return (
        <div className="card p-4">
            <div className="movie-poster__bg">
                <img src={poster_url} alt="poster" />
            </div>
            <div className="movie-info__content">
                <h1 className="font-semibold uppercase text-xl mt-2">{title}</h1>
                <p>Source Name: {source_name}</p>
            </div>
        </div>
    )
}

export default VideoBackground;