import { useEffect, useState} from "react";
import Pagination from "../Pagination";
import CardMovies from "../CardMovies"
import Search from "../Search/Search"

const DEFAULT_PAGE = 1

export default function App() {
  //Declarando estado inicial del hook
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(DEFAULT_PAGE)
  const [totalPages, setTotalPages] = useState()

  //busqueda
  const [search, setSearch] = useState("")
  const dataType = 'movie'; // O 'serie', según corresponda


  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?language=es-ES&page=${page}`
    if (search) {
      url = `https://api.themoviedb.org/3/search/movie?query=${search}&language=es-ES&page=${page}`
    }

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjg1MmYyNTI3MzU4ZWI3YWI4NjZkYWE0MzZlN2RmZiIsInN1YiI6IjY2MTIwODNlYjA5YmRlMDE2NGJjZTc4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nPTrotRetu0PUJkXNVgIbyDffu1OmYo6F7UuldsXLA'
      }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => {
      setTotalPages(json.total_pages);
      setMovies(json.results); 
      window.scrollTo(0, 0);}) //areglo de las 20 películas por página
    .catch(err => console.error('error:' + err));
  }, [page, search])//Siempre va mostrar la página 1
  //Solo interesa cuando carga el componente

  const handlePageChange = (newPage) => {
    setPage(newPage)
  }

  const handleSearch = (e) =>{
    setSearch(e.target.value)
    setPage(DEFAULT_PAGE)
  }

  const handleMovieClick = (id) =>{

  }

  return (
    <>
    <div className="flex justify-center p-8">
      <h1 className="font-bold text-2xl">PELÍCULAS</h1>
    </div>
    <Search search={search} setSearch={setSearch} handleSearch={handleSearch} setPage={setPage} dataType={dataType}/>
    <div className="px-4 pb-4 flex justify-center">
        {movies.length === 0 ? (
          <p className="text-xl font-bold pb-4">Película no encontrada</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {movies.map((data) => (
              <CardMovies
                key={data.id}
                idMovie={data.id}
                onClick={() => handleMovieClick(data.id)}
              />
            ))}
          </div>
        )}
      </div>
      {movies.length > 0 && (
        <div className="flex justify-end p-8">
          <Pagination
            page={page}
            totalPagination={search ? totalPages : 10}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </> 
  );
}

