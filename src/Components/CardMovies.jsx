import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import {Button, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import { FaYoutube, FaWindowClose } from "react-icons/fa"
import Card from "./Card"
import { formatDate, countryName } from "../js/functions"

export default function App({idMovie=0}) {
  const image_path = 'https://images.tmdb.org/t/p/original'

  //Estado del modal
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = useState('opaque')

  //Para obtener las posiciones de cast, crew y videos
  const [castMovie, setCastMovie] = useState([])
  const [crewMovie, setCrewMovie] = useState([])
  const [trailerMovie, setTrailerMovie] = useState(null)
  const [playing, setPlaying] = useState(false);

  //Consumir por ID para concatenar el detalle
  const [movie, setMovie] = useState({}) //Tiene el objeto película que va mostrar en pantalla
  //Consumo del detalle
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${idMovie}?append_to_response=credits,videos&language=es-ES`;;
    const options = {
    method: 'GET',
    //básicamente es el token (autorización)
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjg1MmYyNTI3MzU4ZWI3YWI4NjZkYWE0MzZlN2RmZiIsInN1YiI6IjY2MTIwODNlYjA5YmRlMDE2NGJjZTc4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nPTrotRetu0PUJkXNVgIbyDffu1OmYo6F7UuldsXLA'
    }
  };
    fetch(url, options)
    .then(res => res.json())
    .then(json => {console.log(json);setMovie(json); handleCredits(json.credits.cast, json.credits.crew); handleVideos(json.videos.results)})
    .catch(err => console.error('error:' + err));
  }, [idMovie])//Si el id cambia, hace el consumo de nuevo

  //Como se maneja cada array del cast y el crew, para traer actores y directores
  const handleCredits = (cast,crew) => {
    const castArray = cast && cast.length > 0 ? cast.slice(0, 2) : []
    const crewArray = crew && crew.length > 0 ? crew.slice(0, 1) : []

    setCastMovie(castArray)
    setCrewMovie(crewArray)

    if (!castArray.length) {
      setCastMovie([{ name: "No disponible" }])
    }
    if (!crewArray.length) {
      setCrewMovie([{ name: "No disponible" }])
    }
  }

   const handleVideos = (results) => {
    var ultimoElemento = results.length > 0 ? results[results.length - 1] : undefined;
    setTrailerMovie(ultimoElemento);
  }


  const handleOpen = (backdrop) => {
    setBackdrop(backdrop)
    onOpen()
  }

  return (
    <>
    <div className="flex flex-wrap gap-3">
    <Modal size="3xl" backdrop={backdrop} isOpen={isOpen} onClose={onClose} classNames={{
          body: "py-6",
          backdrop: "bg-foreground-900/50 backdrop-opacity-40",
          base: "border-gray-800 bg-foreground",
          header: "border-b-[1px] border-[#292f46]",
        }}
        >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">
                {movie.title}
                <small className="text-default-300">Estrenada el {formatDate(movie.release_date) || "No disponible"} en {countryName(movie.origin_country) || "No Disponible"}</small>
              </ModalHeader>
              <ModalBody className="text-white pb-8">
                <div className="text-default-300 grid grid-cols-2">
                <p>{movie.genres.length > 0 ? (movie.genres.length > 1 ? "Géneros:" : "Género:") : "Género:"} {movie.genres.length > 0 ? movie.genres.map(genre => genre.name).join(', ') : "No disponible"}</p>
                <p>Duración: {movie.runtime !== 0 ? movie.runtime + " minutos" : "No disponible"}</p>
                </div>
                <h4 className="">Descripción General:<span className="text-blue-400"> {movie.overview.trim() || "No disponible"}</span></h4>
                <div className="grid grid-cols-2 text-default-300">
                  <p>Reparto: {castMovie.map(cast=>cast.name).join(', ')}</p>
                  <p className="pl-2">Dirección: {crewMovie.map(crew=>crew.name).join(', ')}</p>
                </div>
                <div className="grid grid-cols-2">
                    {playing ? (
                      <>
                      <YouTube
                      videoId={trailerMovie.key}
                      iframeClassName="h-80 w-84"
                      className="row-start-3 col-span-2"
                      opts={{
                        width: "100%",
                        height: "100%",
                        playerVars: {
                          autoplay: 1,
                          constrols: 0,
                          cc_load_policy: 0,
                          fs: 0,
                          iv_load_policy: 0,
                          modestbranding: 0,
                          rel: 0,
                          showinfo: 0,
                        },
                      }}           
                    />
                    <div className="col-start-1 row-start-2 py-2">
                      <Button color="danger" variant="light" size="sm" className="font-bold" onClick={() => setPlaying(false)}><FaWindowClose></FaWindowClose></Button>
                    </div>
                    </>
                    ):(
                      <div>
                          {trailerMovie ? (
                            <div className="text-default-300 row-start-1">
                              Trailer: {trailerMovie.name+" "}
                              <Button color="primary" variant="light" size="sm" className="font-bold" onClick={()=>setPlaying(true)}>
                                <FaYoutube />
                              </Button>
                            </div>
                          ):(<div>
                            <h1>Trailer: {trailerMovie !== undefined ? trailerMovie.name : "No disponible"}</h1>
                          </div>
                          )}
                      </div>
                    )}
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <Card
        data={movie}
        image_path={image_path}
        handleOpen={handleOpen}
      />
      </div>
    </> 
  );
}
