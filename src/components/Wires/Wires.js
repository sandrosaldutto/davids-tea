import "./Wires.scss";
import wireOne from "../../assets/images/wires-one.png";
import wireTwo from "../../assets/images/wires-two.png";
import wireThree from "../../assets/images/wires-three.png";
import wireFour from "../../assets/images/wires-four.png";

function Wires() {
  return (
    <>
      <h1 className="wires__header">Wireframes</h1>
      <div className="wires__images-container">
        <img src={wireOne} alt="wireframes" className="wires__image" />

        <img src={wireTwo} alt="wireframes" className="wires__image" />

        <img src={wireThree} alt="wireframes" className="wires__image" />

        <img src={wireFour} alt="wireframes" className="wires__image" />
      </div>
    </>
  );
}

export default Wires;
