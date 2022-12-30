import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="items">
        <Link to="/" className="link">
          Candidatos
        </Link>

        <Link to="/create-candidate" className="link">
          Crear Nuevo Candidato
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
