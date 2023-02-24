import { Route, Routes } from "react-router-dom";
import Prueba from "./components/Prueba/Prueba";
import Candidates from "./pages/Candidates/Candidates";
import CreateCandidates from "./pages/CreateCandidates/CreateCandidates";

const Routesfile = () => {
  return (
    <Routes>
      <Route path="/" element={<Candidates />} />
      <Route path="/create-candidate" element={<CreateCandidates />} />
      <Route path="/prueba" element={<Prueba />} />
    </Routes>
  );
};

export default Routesfile;
