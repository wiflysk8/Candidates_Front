import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Candidates.css";

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const navigate = useNavigate();

  const getCandidates = () => {
    return axios
      .get("http://localhost:5000/candidates")
      .then((response) => response.data)
      .then((candidates) => {
        setCandidates(candidates);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onDelete = (_id) => {
    return axios
      .delete(`http://localhost:5000/candidates/${_id}`)
      .then(() => {
        getCandidates();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onCVDowload = (candidate) => {
    // Open the link to the CV in a new tab
    window.open(candidate.cv, "_blank");
  };

  useEffect(() => {
    getCandidates();
  }, []);

  const onNavigate = () => {
    navigate("/create-candidate");
  };

  return (
    <div className="App">
      {candidates.length > 0 ? (
        <div className="candidates">
          <h1>CANDIDATOS: </h1>
          {candidates.map((candidate) => (
            <div className="candidate" key={candidate._id}>
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
              <button
                onClick={() => onDelete(candidate._id)}
                style={{ background: "red" }}
              >
                Eliminar candidato
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h3>No existen candidatos actualmente</h3>
          <button onClick={onNavigate}>Crear candidato</button>
        </div>
      )}
    </div>
  );
};

export default Candidates;
