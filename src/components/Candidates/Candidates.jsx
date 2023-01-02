import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Candidates.css";

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const navigate = useNavigate();

  const getCandidates = () => {
    return axios
      .get("http://localhost:3001/candidates")
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
      .delete(`http://localhost:3001/candidates/${_id}`)
      .then(() => {
        getCandidates();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(candidates);

  useEffect(() => {
    getCandidates();
  }, []);

  const onNavigate = () => {
    navigate("/create-candidate");
  };

  return (
    <div className="App">
      <h1>CANDIDATOS: </h1>
      {candidates.length > 0 ? (
        <div className="candidates">
          {candidates.map((candidate) => (
            <div className="candidate" key={candidate._id}>
              <div>Nombre: {candidate.name}</div>
              <div>Apellidos: {candidate.surname}</div>
              <div>Teléfono: {candidate.phone}</div>
              <div>Email: {candidate.email}</div>

              <button onClick={() => onDelete(candidate._id)}>Eliminar</button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No existen candidatos actualmente</p>
          <button onClick={onNavigate}>Crear candidato</button>
        </div>
      )}
    </div>
  );
};

export default Candidates;
