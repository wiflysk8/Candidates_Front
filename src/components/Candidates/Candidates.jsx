import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Candidates.css";

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);

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

  useEffect(() => {
    getCandidates();
  }, []);
  return (
    <div className="App">
      <h1>CANDIDATOS: </h1>
      <div className="candidates">
        {candidates.map((candidate) => (
          <div className="candidate" key={candidate.id}>
            <div>{candidate.id}</div>
            <div>Nombre: {candidate.name}</div>
            <div>Apellidos: {candidate.surname}</div>
            <div>Teléfono: {candidate.phone}</div>
            <div>Email: {candidate.email}</div>
            <div>CV****</div>
            <button onClick={() => onDelete(candidate._id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Candidates;
