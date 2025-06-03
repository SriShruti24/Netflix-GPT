import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch,useSelector } from "react-redux";
import {addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const PopularMovies =useSelector((store)=>store.movies.PopularMovies);
  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();
  
    dispatch(addPopularMovies(json.results));
  };
  //i can call it only once
  useEffect(() => {
   !PopularMovies&& getPopularMovies();
  },[]);
};
export default usePopularMovies;
