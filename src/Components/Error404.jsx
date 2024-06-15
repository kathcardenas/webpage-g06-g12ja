import React from "react";
import { BiSolidErrorAlt } from "react-icons/bi";


export default function App(){
    return (
        <>
          <div className="h-screen justify-center content-center">
            <div className="flex flex-col items-center justify-center">
                <BiSolidErrorAlt size={100}/>
                <h1 className="text-5xl font-bold">404</h1>
                <p>Página no encontrada</p>
            </div>
          </div>
        </>
      );
}