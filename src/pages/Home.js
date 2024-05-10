import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/peli.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Peliculas y Series G6</h1>
        <p> La mejor selección de series y peliculas</p>
        <Link to="/Registrate">
          <button> Registrate </button>
        </Link>
      </div>
    
    </div>

  );
}

export default Home;
