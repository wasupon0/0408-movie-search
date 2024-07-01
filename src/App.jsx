import SearchMovies from "./SearchMovies";

export default function App() {
  return (
    <div className="flex justify-center border ">
      {" "}
      <div className=" mt-10 p-10 border  w-screen max-w-[1000px]">
        <h1 className="text-5xl font-bold text-center capitalize">
          react movie search
        </h1>
        <SearchMovies />
      </div>
    </div>
  );
}
