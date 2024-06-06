import { useEffect, useState } from "react";
import Pagination from "../Search/Pagination";
import CardSeries from "../Cards/CardSeries"
import Search from "../Search/Search"

const DEFAULT_PAGE = 1

export default function App() { 
    const [series, setSeries] = useState([])
    const [page, setPage] = useState(DEFAULT_PAGE)
    const [totalPages, setTotalPages] = useState()

    const [search, setSearch] = useState("")

   useEffect(() => {
    let url = `https://api.themoviedb.org/3/tv/popular?language=es-ES&page=${page}` 
    if (search) {
      url = `https://api.themoviedb.org/3/search/tv?query=${search}&language=es-ES&page=${page}`
    };
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzI4YjU3NmEzNTQzZmY3MTRkYWVmOTI5NjQxZTA2OCIsInN1YiI6IjY2NGY2MmJlMWRhNGZkODBjYzliMDc3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PewlEbjf1PlCkmX_GEdn717LZK6y6BTxyVLfdYUiMRw'
      }
    };
    
    fetch(url, options)
      .then(res => res.json())
      .then(json => { 
        setTotalPages(json.total_pages);
        setSeries(json.results);
        window.scrollTo(0, 0);})
      .catch(err => console.error('error:' + err));
   
     
   }, [page,search])

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
      <h1 className="font-bold text-2xl">SERIES</h1>
    </div>
    <Search search={search} setSearch={setSearch} handleSearch={handleSearch} setPage={setPage} />
    <div className="px-4 pb-4 flex justify-center">
        {series.length === 0 ? (
          <p className="text-xl font-bold pb-4">Serie no encontrada</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {series.map((data) => (
              <CardSeries
                key={data.id}
                idSerie={data.id}
                onClick={() => handleMovieClick(data.id)}
              />
            ))}
          </div>
        )}
      </div>
      {series.length > 0 && (
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

