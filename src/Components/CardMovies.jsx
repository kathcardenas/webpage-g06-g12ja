import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";


export default function App() {

  /* AQUÍ ES PARA VER LOS ESTADOS DEL COMPONENTE*/
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('opaque')

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop)
    onOpen();
  }

  return (
    <>
    <div className="flex flex-wrap gap-3">
    <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose} className="bg-black">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">Nombre Película</ModalHeader>
              <ModalBody className="text-white pb-8">
                <h4>Fecha estreno</h4>
                <h4>Origen</h4>
                <h4>Genero</h4>
                <h4>Duración</h4>
                <h2>Descripción General</h2>
                <h4>Director</h4>
                <h4>Protagonistas</h4>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <Card className="py-4" isPressable onPress={() => handleOpen()}>
        <CardHeader className="pb-0 pt-2 px-12 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Nombre Película</p>
          <small className="text-default-500">Fecha Estreno</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div className="grid justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={270}
            />
          </div>
        </CardBody>
      </Card> 
      </div>
    </> 
  );
}
