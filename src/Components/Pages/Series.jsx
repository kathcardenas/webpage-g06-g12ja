import { useEffect, useState } from "react";
import CardSeries from "../CardSeries"

export default function App() { 
     const [series, setSeries] = useState([])

   useEffect(() => {
    const url = 'https://api.themoviedb.org/3/tv/popular?language=es-ES&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzI4YjU3NmEzNTQzZmY3MTRkYWVmOTI5NjQxZTA2OCIsInN1YiI6IjY2NGY2MmJlMWRhNGZkODBjYzliMDc3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PewlEbjf1PlCkmX_GEdn717LZK6y6BTxyVLfdYUiMRw'
      }
    };
    
    fetch(url, options)
      .then(res => res.json())
      .then(json => {console.log(json.results);setSeries(json.results)})
      .catch(err => console.error('error:' + err));
   
     
   }, [])
   

  return (
    <>
    <div className="flex justify-center p-8">
      <h1 className="font-bold text-2xl">SERIES</h1>
    </div>
    <div className="px-4 pb-4 flex justify-center">
      <div className="grid grid-cols-4 gap-4">
        {series &&(series.map((serie)=><CardSeries key={serie.id} idSerie={serie.id}/>))}
    

    
      </div>
    </div>
    </>
 
  );
}

