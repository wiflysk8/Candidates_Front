import React from "react";
import { useContext } from "react";
import { CandidatesContext } from "../../contexts/CandidatesContext";
import "./Item.css";

const Item = ({ candidate }) => {
  const { onDelete } = useContext(CandidatesContext);
  const onCVDowload = (candidate) => {
    window.open(candidate.cv, "_blank");
  };
  return (
    <>
      <div>
        <strong>Nombre: </strong>
        {candidate.name}
      </div>
      <div>
        <strong>Apellidos: </strong>
        {candidate.surname}
      </div>
      <div>
        <strong>Teléfono: </strong> {candidate.phone}
      </div>
      <div>
        <strong>Email: </strong> {candidate.email}
      </div>
      <button onClick={() => onCVDowload(candidate)}>Abrir CV</button>
      <button onClick={() => onDelete(candidate._id)} className="deleteBtn">
        Eliminar candidato
      </button>
    </>
  );
};

export default Item;
