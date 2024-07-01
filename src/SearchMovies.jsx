export default function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submit form");

    const query = "Jurassic";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${
      import.meta.env.VITE_APIKEY
    }&language=en-US&query=${query}&page=1&include_adult=false`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  };

  return (
    <form className="grid mt-10" onSubmit={searchMovies}>
      <label className="text-sm text-left uppercase" htmlFor="query">
        Movie Name
      </label>
      <input
        className="p-2 mb-3 border rounded-full"
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
      />
      <button
        className="p-2 text-white bg-gray-900 rounded-full hover:bg-gray-800"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
