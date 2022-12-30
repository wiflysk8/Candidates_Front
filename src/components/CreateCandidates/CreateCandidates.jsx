import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateCandidates.css";

const CreateCandidates = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const candidate = { id, name, surname, phone, email, cv };
    fetch("http://localhost:5000/candidates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(candidate),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const goToCandidates = () => {
    navigate("/");
  };

  return (
    <section style={{ position: "absolute", top: "100px" }}>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            ID:
            <input
              type="text"
              value={id}
              onChange={(event) => setId(event.target.value)}
            />
          </label>
          <br />
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <br />
          <label>
            Surname:
            <input
              type="text"
              value={surname}
              onChange={(event) => setSurname(event.target.value)}
            />
          </label>
          <br />
          <label>
            Phone:
            <input
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <br />
          <label>
            CV:
            <input
              type="text"
              value={cv}
              onChange={(event) => setCv(event.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <div>Candidato creado con éxito</div>
          <button onClick={goToCandidates}>Ver listado de candidatos</button>
        </>
      )}
    </section>
  );
};

export default CreateCandidates;
