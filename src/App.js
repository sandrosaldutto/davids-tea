import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Persona from "./components/Persona/Persona";
import Wires from "./components/Wires/Wires";
import Ui from "./components/Ui/Ui";
import Mockup from "./components/Mockup/Mockup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Mockup />
        <Persona />
        <Wires />
        <Ui />
      </BrowserRouter>
    </>
  );
}

export default App;
