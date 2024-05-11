 import NavBar from "./Components/NavBar"
import Peliculas from "./Components/Pages/Movies"
import Series from "./Components/Pages/Series"
import Home from "./Components/Pages/Home"
import Footer from "./Components/Footer"
import {useNavigate, Route, Routes} from 'react-router-dom';
import {NextUIProvider} from '@nextui-org/react';
 import React from 'react';
 import Nosotros1 from './Components/Pages/Nosotros1';


 function App() {
  const navigate = useNavigate();

  return (
    <>
    <NextUIProvider navigate={navigate}>
      <main className="dark text-foreground bg-background">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/series" element={<Series />} />
          <Route path="/sobre-nosotros" element={<Nosotros1 />} />
        </Routes>
        <Footer/>
      </main>
    </NextUIProvider>
    </>
  );
}

export default App;
