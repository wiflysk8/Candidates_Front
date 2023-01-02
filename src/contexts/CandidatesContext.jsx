import axios from "axios";
import { useState, useEffect, createContext } from "react";

const CandidatesContext = createContext();

function CandidatesProvider(props) {
  const [candidates, setCandidates] = useState([]);

  const getCandidates = async () => {
    const res = await axios.get("http://localhost:5000/candidates");
    setCandidates(res.data);
  };

  useEffect(() => {
    getCandidates();
  }, []);

  const onDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/candidates/${_id}`);
      getCandidates();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CandidatesContext.Provider value={{ candidates, onDelete, getCandidates }}>
      {props.children}
    </CandidatesContext.Provider>
  );
}

export { CandidatesContext, CandidatesProvider };
