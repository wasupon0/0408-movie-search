import SearchMovies from "./SearchMovies";

export default function App() {
  return (
    <div className="flex justify-center border border-red-500">
      {" "}
      <div className=" mt-10 p-10 border border-red-500 w-screen max-w-[1000px]">
        <h1 className="capitalize text-5xl  text-center font-bold">
          react movie search
        </h1>
        <SearchMovies />
      </div>
    </div>
  );
}
