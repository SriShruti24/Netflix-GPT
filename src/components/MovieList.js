import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white"> {title} </h1>
      <div className="flex overflow-x-scroll scroll-thin-thumb scrollbar-thin">
        <div className="flex">
          {Array.isArray(movies) && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p className="text-gray-500">No movies available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
