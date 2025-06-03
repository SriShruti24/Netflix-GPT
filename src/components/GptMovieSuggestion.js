import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const {movieNames, movieResults}= useSelector((store)=> store.gpt);
  if(!movieNames) return null;

  return (
    <div className='p-4 m-4 bg-black bg-opacity-90 text-white'>
      <div>
        {movieNames.map((movieNames,index)=>(
         <MovieList
         key={movieNames}
         title={movieNames}
         movies={movieResults[index]}/>
        ))}
      </div>
    </div>
  )
}

export default GptMovieSuggestion