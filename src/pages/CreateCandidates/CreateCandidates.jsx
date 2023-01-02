import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CandidatesContext } from "../../contexts/CandidatesContext";
import "./CreateCandidates.css";

const CreateCandidates = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { getCandidates } = useContext(CandidatesContext);

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
        getCandidates();
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
    <section className="candidatesForm">
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
          <div className="fieldsetCentered">
            <label>CV candidato:</label>
            <input
              type="file"
              onChange={(event) => setCv(event.target.files[0])}
            />
            <p className="inputFile">Subir archivo</p>
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
