import Peliculas from "./Components/Pages/Movies"
import Series from "./Components/Pages/Series"
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Components/Pages/Home";
import Error404 from "./Components/Error404";
import {useNavigate, Route, Routes} from 'react-router-dom';
import {NextUIProvider} from '@nextui-org/react';
import "./App.css";
import React from 'react';
import About from './Components/Pages/About';


 function App() {
  const navigate = useNavigate();

  return (
    <>
    <NextUIProvider navigate={navigate}>
      <main className="dark text-foreground bg-background">
        <NavBar/>
        <Routes>
        <Route path="*" element={<Error404 />} />
          <Route path="/webpage-g06-g12ja" element={<Home />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/series" element={<Series />} />
          <Route path="/sobre-nosotros" element={<About />} />
        </Routes>
        <Footer/>
      </main>
    </NextUIProvider>
    </>
  );
}

export default App;
