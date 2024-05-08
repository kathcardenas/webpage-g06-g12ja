import CardMovies from "../CardMovies"

export default function App() {
  return (
    <>
    <div className="flex justify-center p-8">
      <h1 className="font-bold text-2xl">PELÍCULAS</h1>
    </div>
    <div className="px-4">
      <div className="grid grid-cols-4 gap-4">
        <div><CardMovies/></div>
        <div><CardMovies/></div>
        <div><CardMovies/></div>
        <div><CardMovies/></div>
        <div><CardMovies/></div>
        <div><CardMovies/></div>
      </div>
    </div>
    </>
 
  );
}

