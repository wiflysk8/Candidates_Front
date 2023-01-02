import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateCandidates.css";

const CreateCandidates = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("cv", cv);
    fetch("http://localhost:5000/candidates", {
      method: "POST",
      body: formData,
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
          <h1>Añadir candidato</h1>
          <div className="formCentered">
            <fieldset>
              <label>
                Nombre candidato:
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>
              <br />
              <label>
                Apellidos Candidato:
                <input
                  type="text"
                  value={surname}
                  onChange={(event) => setSurname(event.target.value)}
                />
              </label>
            </fieldset>
            <br />
            <fieldset>
              <label>
                Teléfono candidato:
                <input
                  type="text"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </label>
              <br />
              <label>
                Email candidato:
                <input
                  type="text"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>
            </fieldset>
            <br />
          </div>
          <div
            style={{
              gap: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <label>CV candidato:</label>
            <input
              type="file"
              onChange={(event) => setCv(event.target.files[0])}
            />
            <p
              style={{
                textDecoration: "underline",
                position: "relative",
                left: "-200px",
                zIndex: "-1",
              }}
            >
              Subir archivo
            </p>
          </div>
          <button type="submit" style={{ marginTop: "30px" }}>
            Enviar
          </button>
        </form>
      ) : (
        <>
          <h3>Candidato creado con éxito</h3>
          <button onClick={goToCandidates} style={{ marginTop: "40px" }}>
            Ver listado de candidatos
          </button>
        </>
      )}
    </section>
  );
};

export default CreateCandidates;
