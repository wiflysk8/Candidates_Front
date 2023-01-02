import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyResponse = () => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate("/create-candidate");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h3>No existen candidatos actualmente</h3>
      <button onClick={onNavigate}>Crear candidato</button>
    </div>
  );
};

export default EmptyResponse;
