import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CandidatesContext } from "../../contexts/CandidatesContext";
import "./CreateCandidates.css";
import { IoIosArrowRoundUp } from "react-icons/io";

const CreateCandidates = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { getCandidates } = useContext(CandidatesContext);
  const [file, setFile] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("cv", cv);
    if (
      name === "" ||
      surname === "" ||
      phone === "" ||
      email === "" ||
      cv === ""
    ) {
      alert("Rellena todos los campos");
      return;
    }
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
          <div className="formCentered">
            <h1 style={{ alignSelf: "flex-start" }}>Añadir candidato</h1>
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
              onChange={(event) => {
                setCv(event.target.files[0]);
                setFile(event.target.files[0].name);
              }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <input
              type="text"
              value={file}
              style={{ height: "15px" }}
              onChange={() => setFile("Cv.pdf")}
            />
            <p className="inputFile">Subir archivo</p>
            <IoIosArrowRoundUp size={"1.2em"} />
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
