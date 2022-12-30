import { Route, Routes } from "react-router-dom";
import Candidates from "./components/Candidates/Candidates";
import CreateCandidates from "./components/CreateCandidates/CreateCandidates";

const Routesfile = () => {
  return (
    <Routes>
      <Route path="/" element={<Candidates />} />
      <Route path="/create-candidate" element={<CreateCandidates />} />
    </Routes>
  );
};

export default Routesfile;
