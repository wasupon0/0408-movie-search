export default function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submit form");

    const query = "Jurassic Park";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${
      import.meta.env.VITE_APIKEY
    }&language=en-US&query=${query}&page=1&include_adult=false`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  };

  return (
    <form className="mt-10 grid" onSubmit={searchMovies}>
      <label className="uppercase text-left text-sm" htmlFor="query">
        Movie Name
      </label>
      <input
        className="p-2 rounded-full mb-3 border"
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
      />
      <button
        className="p-2 bg-gray-900 rounded-full text-white hover:bg-gray-800"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
