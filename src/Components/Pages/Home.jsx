import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../assets/Images/peli.jpg";
import "../../styles/Home.css";

export default function App() {
    return (
      <>
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Películas y Series G6</h1>
        <p>La mejor selección de series y películas</p>
        <Link to="/peliculas">
          <button> Inicia </button>
        </Link>
      </div>
    </div>
      </>
   
    );
  }
  
  