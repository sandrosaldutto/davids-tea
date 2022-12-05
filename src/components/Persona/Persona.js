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

      <div className="persona__container-two">
        <div className="persona__biography-container">
          <h2 className="persona__biography-title">Biography</h2>
          <p className="persona__biography-copy">
            Olivia is a single nurse who works long shifts at the hospital.
            During her limited free time, she enjoys cozying up in her sunroom
            with a good book and a hot tea. Olivia cares about convenience and
            how she spends her free time, so she looks for ways to increase her
            time at home by using online platforms to bring things to her. As an
            avid tea-drinker she likes to try new teas, cares about quality, and
            appreciates tips and tricks on how to make the tastiest teas to
            enjoy both at work and at home.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Persona;
