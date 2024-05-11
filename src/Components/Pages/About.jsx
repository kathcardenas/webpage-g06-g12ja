import React from 'react';
import Logo from "../../assets/Images/logo.png";
import "../../styles/About.css";


function Nosotros1() {
    return (
        <div>
            <div className="flex justify-center pb-4 text-2xl text-sky-500">
                <h1 className="font-bold">¿QUIENÉS SOMOS?</h1>
                </div>
             <div className="pt-8 pl-40 pr-40 text-justify">
                <h2 className="flex justify-center text-xl text-blue-400 pb-2 font-semibold">Nuestra Historia</h2>
                <p className="text-violet-200 font-serif pb-2">En [Nombre de la página], todo comenzó con una pasión compartida por el cine y las series. Un grupo de amigos, unidos por 
                    el amor a las historias cautivadoras y los personajes inolvidables, se propuso crear un espacio donde esta pasión pudiera
                     florecer y conectarse con otros de manera significativa. </p>
               </div>  
            
            <div className="p-8 pl-40 pr-40 text-justify">
                <h2 className=" flex justify-center text-blue-400  pb-2 text-xl font-semibold">Nuestra Misión</h2>
                    <p className="text-violet-200 font-serif pb-2">En [Nombre de la página], nos apasiona el cine y las series tanto como tú. Somos un equipo de entusiastas comprometidos
                       en brindarte la mejor experiencia cinematográfica posible.
                       Nuestra misión es simple: conectar a los amantes del cine de todo el mundo y proporcionarles una plataforma donde puedan descubrir,
                      explorar y compartir sus películas y series favoritas. 
                       Desde clásicos atemporales hasta los últimos estrenos, estamos aquí para satisfacer tu sed de entretenimiento.</p>
            </div>    
            
            <div>
                <h2 className="flex justify-center pb-2 text-blue-400 text-xl font-semibold">Nuestro Equipo</h2>
                <p className="pb-2 text-violet-200 flex justify-center">A continuación los miembros clave de nuestro equipo:</p>
                <div className="text-yellow-50 grid grid-cols-2 gap-4 text-lime-950 font-serif text-cyan-800 about">
                    <div className="col-span-2 md:col-span-1">
                        <div className="grid justify-items-end">
                            <div className="my-2">Katherine Cardenas - Lider</div>
                            <div className="my-2">katherine Merino</div>
                            <div className="my-2">Carolina Cuellar</div>
                            <div className="my-2">Monica</div>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <div className="grid justify-items-start">
                            <div className="my-2">Patricia Lopez- Lider</div>
                            <div className="my-2">Marcela Cuevas</div>
                            <div className="my-2">Sara Esteban</div>
                            <div className="my-2">Melissa</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center p-4">
                    <img src={Logo} alt="Logo de la aplicación" className="w-32"></img>
                </div>
            </div>  
        </div>
    );
}

export default Nosotros1;
