import React, { useContext } from "react";
import EmptyResponse from "../../components/EmptyResponse/EmptyResponse";
import List from "../../components/List/List";
import "./Candidates.css";
import { CandidatesContext } from "../../contexts/CandidatesContext";

const Candidates = () => {
  const { candidates } = useContext(CandidatesContext);

  return (
    <div className="App">
      {candidates.length ? (
        <div className="candidates">
          <h1>CANDIDATOS: </h1>
          <List candidates={candidates} />
        </div>
      ) : (
        <EmptyResponse />
      )}
    </div>
  );
};

export default Candidates;
