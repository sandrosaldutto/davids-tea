import "./Persona.scss";
import olivia from "../../assets/images/olivia-monroe.png";

function Persona() {
  return (
    <section className="persona">
      <div className="persona__container-one">
        <h1 className="persona__name">Olivia Munroe</h1>
        <div className="persona__olivia-image-container">
          <img
            src={olivia}
            alt="picture of olivia"
            className="persona__olivia-image"
          />
        </div>
        <div className="persona__highlights-container">
          <div className="persona__highlights-left">
            <p className="persona__highlights-title">AGE</p>
            <p className="persona__highlights-title">OCCUPATION</p>
            <p className="persona__highlights-title">STATUS</p>
            <p className="persona__highlights-title">LOCATION</p>
          </div>
          <div className="persona__highlights-right">
            <p className="persona__highlights-copy">35</p>
            <p className="persona__highlights-copy">Nurse</p>
            <p className="persona__highlights-copy">Single</p>
            <p className="persona__highlights-copy">Toronto,ON</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Persona;
