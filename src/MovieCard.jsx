export default function MovieCard({ movie }) {
  return (
    <div
      key={movie.id}
      className="p-5 mt-4 border rounded-lg shadow-md sm:flex "
    >
      <img
        className="block mx-auto mb-4 rounded-lg w-fit sm:mr-6 sm:ml-0"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title}
      />

      <div className="card--content">
        <h3 className="text-3xl font-bold">{movie.title}</h3>
        <p>
          <small className="uppercase">
            release date: {movie.release_date}
          </small>
        </p>
        <p>
          <small className="uppercase">rating: {movie.vote_average}</small>
        </p>
        <p className="mt-4">{movie.overview}</p>
      </div>
    </div>
  );
}
