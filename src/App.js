import NavBar from "./Components/NavBar"
import Peliculas from "./Components/Pages/Peliculas"

function App() {
  return (
    <>
    <main className="dark text-foreground bg-background">
      <NavBar/>
      <Peliculas/>
    </main>
    </>
  );
}

export default App;
