import React from "react";
import {Link} from "@nextui-org/react";
import "../styles/Footer.css";

export default function App(){
    return (
        <div className="footer">
          <h1>Copyright &copy; 2024 - Grupo 06</h1>
          <div><Link href="/sobre-nosotros" className="text-gray-400">Nosotros</Link></div>
        </div>
      );
}