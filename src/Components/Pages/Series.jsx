import { useEffect, useState } from "react";
import CardSeries from "../CarSeries"

export default function App() {
  const [series, setSeries] = useState([])

  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/tv/popular?language=es-ES&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjg1MmYyNTI3MzU4ZWI3YWI4NjZkYWE0MzZlN2RmZiIsInN1YiI6IjY2MTIwODNlYjA5YmRlMDE2NGJjZTc4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nPTrotRetu0PUJkXNVgIbyDffu1OmYo6F7UuldsXLA'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {console.log(json.results); setSeries(json.results)})
      .catch(err => console.error('error:' + err));
  }, [])
  

  return (
    <>
    <div className="flex justify-center p-8">
      <h1 className="font-bold text-2xl">SERIES</h1>
    </div>
    <div className="px-4 pb-4 flex justify-center">
      <div className="grid grid-cols-4 gap-4">
        {series && (series.map((serie)=><CardSeries key={serie.id} idSerie={serie.id}/>))}
      </div>
    </div>
    </>
 
  );
}

