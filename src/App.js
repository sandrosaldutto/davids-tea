import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Persona from "./components/Persona/Persona";
import Wires from "./components/Wires/Wires";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Persona />
        <Wires />
      </BrowserRouter>
    </>
  );
}

export default App;
