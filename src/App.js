import Peliculas from "./Components/Pages/Movies"
import Series from "./Components/Pages/Series"
import About from "./Components/Pages/About"
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Components/Pages/Home";

import {useNavigate, Route, Routes} from 'react-router-dom';
import {NextUIProvider} from '@nextui-org/react';
import "./App.css";

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
          <Route path="/sobre-nosotros" element={<About />} />
        </Routes>
        <Footer/>
      </main>
    </NextUIProvider>
    </>
  );
}

export default App;
