import React, { useEffect, useState } from "react";
import YouTube from "react-youtube"; 
import {Button, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import { FaYoutube, FaWindowClose } from "react-icons/fa"
import Card from "./Card"
import { formatDate, countryName } from "../../js/functions"

export default function App({idSerie}) {
  const image_path = 'https://images.tmdb.org/t/p/original'

  /* AQUÍ ES PARA VER LOS ESTADOS DEL COMPONENTE*/
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('opaque')
       const [crewSerie, setCrewSerie] = useState({})
       const [castSerie, setCastSerie] = useState({})
       const [trailerSerie, setTrailerSerie] = useState(null)
  const [playing, setPlaying] = useState(false);


  const handleOpen = (backdrop) => {
    setBackdrop(backdrop)
    onOpen();
  }

        const [serie, setSerie] = useState([])

        useEffect(() => { 
          const url =  `https://api.themoviedb.org/3/tv/${idSerie}?append_to_response=credits,videos&language=es-ES`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzI4YjU3NmEzNTQzZmY3MTRkYWVmOTI5NjQxZTA2OCIsInN1YiI6IjY2NGY2MmJlMWRhNGZkODBjYzliMDc3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PewlEbjf1PlCkmX_GEdn717LZK6y6BTxyVLfdYUiMRw'
          }
        };
        
        fetch(url, options)
          .then(res => res.json())
          .then(json => {setSerie(json);handleCredits(json.credits.crew,json.credits.cast);handleVideos(json.videos.results)})
          .catch(err => console.error('error:' + err));
       
        }, [idSerie])

        const handleCredits =(crew, cast) => {
          const crewArray = crew && crew.length > 0 ? crew.slice(0,1) :[]
          const castArray = cast && cast.length > 0 ? cast.slice(0,2) :[]
          setCrewSerie(crewArray)
          setCastSerie(castArray)
          if(!crewArray.length) { 
            setCrewSerie([{name: "No disponible"}])
           }
           if(!castArray.length) { 
            setCastSerie([{name: "No disponible"}])
           }
        }
        const handleVideos = (results) => {
          var ultimoElemento = results.length > 0 ? results[results.length - 1] : undefined;
          setTrailerSerie(ultimoElemento);
        }
      
      
        
        
  return (
    <>
    <div className="flex flex-wrap gap-3">
    <Modal size="3xl" backdrop={backdrop} isOpen={isOpen} onClose={onClose} classNames={{
          body: "py-6",
          backdrop: "bg-foreground-900/50 backdrop-opacity-40",
          base: "border-gray-800 bg-foreground",
          header: "border-b-[1px] border-[#292f46]",
        }}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">
                {serie.name}
                <small className="text-default-300">Estrenada el {formatDate(serie.first_air_date) || "No disponible"} en {countryName(serie.origin_country) || "No Disponible"}</small>
                </ModalHeader>
              <ModalBody className="text-white pb-8">
                <div className="text-default-300 grid grid-cols-2">
                <p>{serie.genres.length > 0 ? (serie.genres.length > 1 ? "Géneros:" : "Género:"): "Género:"} {serie.genres.length > 0 ? serie.genres.map(genre=> genre.name).join(', ') : "No disponible"}</p>
                <p>Duración: {serie.number_of_episodes !== 0 ? `${serie.number_of_episodes} ${serie.number_of_episodes > 1 ? "capítulos" : "capítulo"}` : "No disponible"}</p>
                </div>
                <p className="text-justify">Descripción general: <span className="text-blue-400"> {serie.overview.trim() || "No disponible"}</span></p>
                <div className="grid grid-cols-2 text-default-300">
                  <p>Reparto: {castSerie.map(cast=>cast.name).join(', ')}</p>
                  <p className="pl-2">Dirección: {crewSerie.map(crew=>crew.name).join(', ')}</p>
                </div>
                <div className="grid grid-cols-2">
                    {playing ? (
                      <>
                      <YouTube
                      videoId={trailerSerie.key}
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
                          {trailerSerie ? (
                            <div className="text-default-300 row-start-1">
                              Trailer: {trailerSerie.name+" "}
                              <Button color="primary" variant="light" size="sm" className="font-bold" onClick={()=>setPlaying(true)}>
                                <FaYoutube />
                              </Button>
                            </div>
                          ):(<div>
                            <h1>Trailer: {trailerSerie !== undefined ? trailerSerie.name : "No disponible"}</h1>
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
        data={serie}
        image_path={image_path}
        handleOpen={handleOpen}
      />
      </div>
    </> 
  );
}
