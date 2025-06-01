import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
  return (
    <div className=' bg-black'>
      <div className='-mt-52  pl-12 relative z-20'>
      <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Kids"} movies={movies.nowPlayingMovies}/>
      </div>
      {/* 
      MovieList- popular
        MovieCard *n
      MovieList- Now Playing
      MovieList- Trending
       */}
    </div>
  )
}

export default SecondaryContainer