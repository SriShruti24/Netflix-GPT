
import { useEffect, } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch,useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
const useMovieTrailer=(movieId)=>{
   const dispatch =useDispatch();
   //Memorization
   const trailerVideo=useSelector((store)=>store.movies.trailerVideo);
  //fetch trailer video
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json)
   
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);  
}
export default useMovieTrailer;