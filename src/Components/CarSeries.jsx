import React, { useEffect, useState } from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";


export default function App({idSerie}) {
  const image_path = 'https://images.tmdb.org/t/p/original'

  /* AQUÍ ES PARA VER LOS ESTADOS DEL COMPONENTE*/
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('opaque')

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop)
    onOpen();
  }

  const [serie, setSerie] = useState([])
  const [crewSerie, setCrewSerie] = useState([])
  const [castSerie, setCastSerie] = useState([])

  const handleCredits = (crew,cast) => {
    const crewArray = crew && crew.length > 0 ? crew.slice(0, 1) : []
    const castArray = cast && cast.length > 0 ? cast.slice(0, 1) : []

    setCrewSerie(crewArray)
    setCastSerie(castArray)
    if (!crewArray.length) {
      setCrewSerie([{ name: "No disponible" }])
    }
    if (!castArray.length) {
      setCastSerie([{ name: "No disponible" }])
    }
  }

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/tv/${idSerie}?append_to_response=credits,videos&language=es-ES`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjg1MmYyNTI3MzU4ZWI3YWI4NjZkYWE0MzZlN2RmZiIsInN1YiI6IjY2MTIwODNlYjA5YmRlMDE2NGJjZTc4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nPTrotRetu0PUJkXNVgIbyDffu1OmYo6F7UuldsXLA'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {console.log(json); setSerie(json);handleCredits(json.credits.crew,json.credits.cast)})
      .catch(err => console.error('error:' + err));
  }, [idSerie])
  

  return (
    <>
    <div className="flex flex-wrap gap-3">
    <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose} className="bg-black">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">{serie.name}</ModalHeader>
              <ModalBody className="text-white pb-8">
                <h4>{serie.first_air_date}</h4>
                <h4>Origen</h4>
                <p>{serie.genres.length > 0 ? (serie.genres.length > 1 ? "Géneros:" : "Género:") : "Género:"} {serie.genres.length > 0 ? serie.genres.map(genre => genre.name).join(', ') : "No disponible"}</p>
                <h2>Descripción General: <span className="text-blue-400"> {serie.overview.trim() || "No disponible"}</span></h2>
                <h4>Dirección: {crewSerie.map(crew=>crew.name).join(', ')}</h4>
                <h4>Reparto: {castSerie.map(cast=>cast.name).join(', ')}</h4>
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
