import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Persona from "./components/Persona/Persona";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Persona />
      </BrowserRouter>
    </>
  );
}

export default App;
