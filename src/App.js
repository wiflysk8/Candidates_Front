import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Routesfile from "./Routes";
import "./App.css";
import { CandidatesProvider } from "./contexts/CandidatesContext";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CandidatesProvider>
        <div className="app">
          <Routesfile />
        </div>
      </CandidatesProvider>
    </BrowserRouter>
  );
}

export default App;
