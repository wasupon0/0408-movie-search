import { useState } from "react";
import MovieCard from "./MovieCard";

export default function SearchMovies() {
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submit form");

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${
      import.meta.env.VITE_APIKEY
    }&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      setMovies(data.results);
      console.log(movies);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className="grid mt-10" onSubmit={searchMovies}>
        <label className="text-sm text-left uppercase" htmlFor="query">
          Movie Name
        </label>
        <input
          className="p-2 mb-3 border rounded-full"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="p-2 text-white bg-gray-900 rounded-full hover:bg-gray-800"
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="mt-4">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </>
  );
}
