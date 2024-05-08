import React from "react";
import {Link} from "@nextui-org/react";

export default function App(){
    return (
        <div className="flex items-end justify-center pt-4">
          <div className="py-10 grid lg:grid-cols-2 border-t border-gray-800 text-white w-full p-4 relative">
            <div className="  ">
              <div className="footer-img flex justify-center">
                <h1 className="font-bold text-2xl">
                  PELÍCULAS Y SERIES
                </h1>
              </div>
              <div className="text-gray-400 flex justify-center">
                <h1>Copyright © 2024 - Grupo 06.</h1>
              </div>
            </div>
            <div className="flex justify-center text-gray-400">
                <div className="grid grid-rows-3 ">
                    <div><h1 className="">Junior</h1></div>
                    <div><Link href="/sobre-nosotros" className="text-gray-400">Nosotros</Link></div>
                    <div><Link href="/" className="text-gray-400">Grupo</Link></div>
                </div>
            </div>
          </div>
        </div>
      );
}