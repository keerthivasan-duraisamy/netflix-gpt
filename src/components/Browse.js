import { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import useMovieCollection from '../hooks/useMovieCollection';
import MainContainer from "./MainContainer";

const Browse = () => {
    
    useMovieCollection();
    
    return (
        <>
            <Header />
            <MainContainer />
        </>
    );
}

export default Browse;