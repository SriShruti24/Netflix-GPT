import bg from "../assests/netflixbg.jpg"
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearchPage = () => {
  return (
    <div>
        <div className="fixed -z-10">
             <img src={bg} alt="logo"/>
        </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
