import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Routesfile from "./Routes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app">
        <Routesfile />
      </div>
    </BrowserRouter>
  );
}

export default App;
