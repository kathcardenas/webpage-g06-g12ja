import React, { useEffect, useState } from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, CircularProgress} from "@nextui-org/react";
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export default function App({idMovie=0}) {
  const image_path = 'https://images.tmdb.org/t/p/original'
  var countries = require("i18n-iso-countries");

  /* AQUÍ ES PARA VER LOS ESTADOS DEL COMPONENTE MODAL*/
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = useState('opaque')

  //Para obtener las primeras dos posiciones de cast y las posiciones de crews
  const [castMovie, setCastMovie] = useState([])
  const [crewMovie, setCrewMovie] = useState([])

  //Consumir por ID para concatenar el detalle
  const [movie, setMovie] = useState({}) //Tiene el objeto película que va mostrar en pantalla
  //Consumo del detalle
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${idMovie}?append_to_response=credits&language=es-ES`;;
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
    .then(json => {setMovie(json); handleCast(json.credits.cast, json.credits.crew)})
    .catch(err => console.error('error:' + err));
  }, [idMovie])//Si el id cambia, hace el consumo de nuevo

  //Como se maneja cada array del cast y el crew, para traer actores y directores
  const handleCast = (cast,crew) => {
    var array = []
    for (var i = 0; i < 2; i++) {
      array.push(cast[i])
    }
    setCastMovie(array)

    array=[]
    for (i = 0; i < 1; i++) {
      array.push(crew[i])
    }
    setCrewMovie(array)
  }

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop)
    onOpen();
  }

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = parseISO(dateString);
    return `${format(date, 'dd \'de\' MMMM \'del\' yyyy', { locale: es })}`;
  };

  //
  const countryName = (countryCode) => {
    countries.registerLocale(require("i18n-iso-countries/langs/es.json"));
    const countryCodeString = Array.isArray(countryCode) ? countryCode[0] : countryCode;
    const countryName=countries.getName(countryCodeString, "es");
    return countryName || 'Desconocido';

  };

  return (
    <>
    <div className="flex flex-wrap gap-3">
    <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose} classNames={{
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
                <small className="text-default-300">Estrenada el {formatDate(movie.release_date)} en {countryName(movie.origin_country)}.</small>
              </ModalHeader>
              <ModalBody className="text-white pb-8">
                <div className="text-default-300">
                  <h4>{movie.genres.length > 1 ? "Géneros" : "Género"}: {movie.genres.map(genre=>genre.name).join(', ')}</h4>
                  <h4>Duración: {movie.runtime + " minutos."}</h4>
                </div>
                <h2 className="text-justify">Descripción General:<span className="text-blue-400"> {movie.overview}</span></h2>
                <div className="grid grid-cols-2 text-default-300">
                  <h4>{castMovie.length>1 ? "Actores" : "Actor/Actriz"}: {castMovie.map(cast=>cast.name).join(', ')}</h4>
                  <h4 className="pl-2">{crewMovie.length>1 ? "Directores" : "Director"}: {crewMovie.map(crew=>crew.name).join(', ')}</h4>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <Card className="max-w-64 py-4" isPressable onPress={() => handleOpen()}>
        <CardHeader className="pb-0 pt-2 px-6 grid grid-cols-1 lg:grid-cols-3 text-left">
          <div className="col-start-1 lg:col-span-3">
            <p className="text-tiny uppercase font-bold">{movie.title}</p>
            <small className="text-default-500">{formatDate(movie.release_date)}</small>
          </div>
          <CircularProgress
            className="row-start-1 col-start-4 col-span-2 place-self-center"
            aria-label="Loading..."
            size="lg"
            value={(movie.vote_average != null) ? movie.vote_average * 10 : 0}
            formatOptions={{ 
                style: "percent",
                minimumFractionDigits: 1, // Mínimo número de dígitos fraccionarios
                maximumFractionDigits: 1 // Máximo número de dígitos fraccionarios
            }}
            color="primary"
            showValueLabel={true}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2 flex justify-center">
          <div className="">
            <Image
              alt={"Poster de la película "+movie.title}
              className="object-cover rounded-xl"
              src={movie.poster_path?image_path+movie.poster_path:" "}
              width={270}
            />
          </div>
        </CardBody>
      </Card> 
      </div>
    </> 
  );
}
