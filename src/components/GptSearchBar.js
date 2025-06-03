// import ai from "../utils/openai";
import { useRef } from "react";
import {useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { GoogleGenerativeAI } from "@google/generative-ai"; 

import { API_OPTIONS, GEMINI_API_KEY } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch =useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    if (!response.ok) {
      throw new Error("Failed to fetch movie data from TMDB");
    }
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error("Error fetching movie from TMDB:", error);
    return [];
  }
};


 const handleGptSearchClick = async () => {
  const userQuery = searchText.current.value;
  console.log(userQuery);

  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY); // ✅ Correct usage

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Or "gemini-1.0" / "gemini-pro"

    const result = await model.generateContent(
      `Act as a Movie Recommendation system and suggest some movies for the query: ${userQuery}. Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`
    );

    const generatedText = result.response.text(); 
    console.log(generatedText);

    const gptMovies = generatedText.split(",").map((movie) => movie.trim());
    const moviePromises = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(moviePromises);
    console.log(tmdbResults);
   dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));


  } catch (error) {
    console.error("Error in GPT search:", error);
  }
};


  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
