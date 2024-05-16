import { useEffect, useState} from "react";
import Pagination from "../Pagination";
import CardMovies from "../CardMovies"


export default function App() {
  //Declarando estado inicial del hook
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?language=es-ES&page=${page}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjg1MmYyNTI3MzU4ZWI3YWI4NjZkYWE0MzZlN2RmZiIsInN1YiI6IjY2MTIwODNlYjA5YmRlMDE2NGJjZTc4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nPTrotRetu0PUJkXNVgIbyDffu1OmYo6F7UuldsXLA'
      }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => {setMovies(json.results); window.scrollTo(0, 0);}) //areglo de las 20 películas por página
    .catch(err => console.error('error:' + err));
  }, [page])//Siempre va mostrar la página 1
  //Solo interesa cuando carga el componente

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
    <div className="flex justify-center p-8">
      <h1 className="font-bold text-2xl">PELÍCULAS</h1>
    </div>
    <div className="px-4 pb-4 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {movies && (movies.map((movie) => <CardMovies key={movie.id} idMovie={movie.id}/>))}
      </div>
    </div>
    <div className="flex justify-end p-8">
      <Pagination  page={page} onPageChange={handlePageChange}/>
    </div>
    </> 
  );
}

