import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="w-screen">
      /{/* Movie trailer can be done in two ways using redux or useState */}
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/VWqJifMMgZE?autoplay=1&mute=1&si=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
