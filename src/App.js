import NavBar from "./Components/NavBar"
import Peliculas from "./Components/Pages/Movies"
import Series from "./Components/Pages/Series"
import Home from "./Components/Pages/Home"
import About from "./Components/Pages/About"

import {useNavigate, Route, Routes} from 'react-router-dom';
import {NextUIProvider} from '@nextui-org/react';

function App() {
  const navigate = useNavigate();

  return (
    <>
    <NextUIProvider navigate={navigate}>
      <main className="dark text-foreground bg-background">
        <NavBar/>
      </main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/series" element={<Series />} />
        <Route path="/sobre-nosotros" element={<About />} />
      </Routes>
    </NextUIProvider>
    </>
  );
}

export default App;
