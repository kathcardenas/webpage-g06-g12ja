import React, { useEffect, useState } from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";


export default function App({idSerie}) {
  const image_path = 'https://images.tmdb.org/t/p/original'

  /* AQUÍ ES PARA VER LOS ESTADOS DEL COMPONENTE*/
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('opaque')
       const [crewSerie, setCrewSerie] = useState({})
       const [castSerie, setCastSerie] = useState({})


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
          .then(json => {console.log(json);setSerie(json);handleCredits(json.credits.crew,json.credits.cast)})
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
        
  return (
    <>
    <div className="flex flex-wrap gap-3">
    <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose} className="bg-black">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">{serie.name}</ModalHeader>
              <ModalBody className="text-white pb-8">
                <p>{serie.first_air_date}</p>
                <p>{serie.origin_country}</p>
                <p>{serie.genres.length > 0 ? (serie.genres.length > 1 ? "Gèneros:" : "Gènero:"): "Gènero:"} {serie.genres.length > 0 ? serie.genres.map(genre=> genre.name).join(', ') : "No disponible"}</p>
                <p>Descripciòn general: <span className="text-blue-400"> {serie.overview.trim() || "No disponible"}</span></p>
                <p>Direcciòn: {crewSerie.map(crew=>crew.name).join(', ')}</p>
                <p>Reparto: { castSerie.map(cast=>cast.name).join (', ')}</p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <Card className="py-4" isPressable onPress={() => handleOpen()}>
        <CardHeader className="pb-0 pt-2 px-12 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{serie.name}</p>
          <small className="text-default-500">{serie.first_air_date}</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div className="grid justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={image_path+serie.poster_path}
              width={270}
            />
          </div>
        </CardBody>
      </Card> 
      </div>
    </> 
  );
}
