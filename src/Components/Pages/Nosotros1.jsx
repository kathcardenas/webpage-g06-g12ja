import React from 'react';
 

function Nosotros1() {
    return (
        <div>
            <div className="flex justify-center pb-4 text-2xl text-sky-600">
                <h1>¿QIENÈS SOMOS?</h1>
                </div>
             <div>
                <h2 className="flex justify-center text-xl text-blue-950 pb-2">Nuestra Historia</h2>
                <p className="text-cyan-800 font-serif pb-2">En [Nombre de la página], todo comenzó con una pasión compartida por el cine y las series. Un grupo de amigos, unidos por 
                    el amor a las historias cautivadoras y los personajes inolvidables, se propuso crear un espacio donde esta pasión pudiera
                     florecer y conectarse con otros de manera significativa. </p>
               </div>  
            
            <div>
                <h2 className=" flex justify-center text-blue-950  pb-2 text-xl">Nuestra Misión</h2>
                    <p className="text-cyan-800 font-serif pb-2">En [Nombre de la página], nos apasiona el cine y las series tanto como tú. Somos un equipo de entusiastas comprometidos
                       en brindarte la mejor experiencia cinematográfica posible.
                       Nuestra misión es simple: conectar a los amantes del cine de todo el mundo y proporcionarles una plataforma donde puedan descubrir,
                      explorar y compartir sus películas y series favoritas. 
                       Desde clásicos atemporales hasta los últimos estrenos, estamos aquí para satisfacer tu sed de entretenimiento.</p>
            </div>    
            
            <div>
                <h2 className="flex justify-center pb-2 text-blue-950 text-xl">Nuestro Equipo</h2>
                <p className="pb-2 text-cyan-800 ">Aquí hay una breve descripción de los miembros clave de nuestro equipo:</p>
                <ul className="text-lime-950 grid grid-cols-2 gap-4 text-lime-950 font-serif text-cyan-800 ">
                    <li className="my-2">Katherine Cardenas - Lider</li>
                    <li className="my-2">Patricia Lopez- Lider</li>
                    <li className="my-2">katherine Merino </li>
                    <li className="my-2">Marcela Cuevas </li>
                    <li className="my-2">Carolina Cuellar</li>
                    <li className="my-2">Sara Esteban</li>
                    <li className="my-2">Monica</li>
                    <li className="my-2">Melissa</li>
                  </ul>
            </div>
            <div>
                <h2 className="flex justify-center pb-2 text-xl text-blue-950">Nuestra Imagen</h2>
            </div>  
            <footer>
                <p className="text-2xl">© 2024 nombre de la pagina . Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default Nosotros1;
