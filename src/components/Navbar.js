import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";
function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
      };
    

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src= {Logo}></img>
            <div className="hiddenLinks">
            <Link to="/" >Home</Link>
            <Link to="/peliculas" >Peliculas</Link>
            <Link to="/series" >Series</Link>
            <Link to="/About us" >About us</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/" >Home</Link>
            <Link to="/peliculas" >Peliculas</Link>
            <Link to="/series" >Series</Link>
            <Link to="/Registrate" >Registrate</Link>
            <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button >

        </div>
      
    </div>
  )
}

export default Navbar
