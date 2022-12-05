import "./Persona.scss";
import olivia from "../../assets/images/olivia-monroe.png";
import amazon from "../../assets/logos/amazon.svg";
import helloFresh from "../../assets/logos/hello-fresh.svg";
import indigo from "../../assets/logos/indigo.svg";

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
        <div className="persona__motivations-container">
          <h2 className="persona__motivations-title">Motivations</h2>
          <div className="persona__motivation-section persona__motivation-section--light">
            <p className="persona__motivation-copy">Achievement</p>
          </div>
          <div className="persona__motivation-section persona__motivation-section--creative">
            <p className="persona__motivation-copy persona__motivation-copy--light">
              Creative
            </p>
          </div>
          <div className="persona__motivation-section persona__motivation-section--physiological persona__motivation-section--light">
            <p className="persona__motivation-copy">Physiological</p>
          </div>
          <div className="persona__motivation-section persona__motivation-section--reward">
            <p className="persona__motivation-copy persona__motivation-copy--light">
              Reward
            </p>
          </div>
          <div className="persona__motivation-section persona__motivation-section--fear persona__motivation-section--light">
            <p className="persona__motivation-copy">Fear</p>
          </div>
          <div className="persona__motivation-section persona__motivation-section--social">
            <p className="persona__motivation-copy persona__motivation-copy--light">
              Social
            </p>
          </div>
          <div className="persona__motivation-section persona__motivation-section--competence persona__motivation-section--light">
            <p className="persona__motivation-copy">Competence</p>
          </div>
          <div
            className="persona__motivation-section
          persona__motivation-section--attitude"
          >
            <p className="persona__motivation-copy persona__motivation-copy--light">
              Attitude
            </p>
          </div>
          <div className="persona__motivation-section persona__motivation-section--power persona__motivation-section--light">
            <p className="persona__motivation-copy">Power</p>
          </div>
        </div>
      </div>

      <div className="persona__container-three">
        <div className="persona__goals-section">
          <h2 className="persona__goals-title">Goals</h2>
          <p className="persona__goals-copy">
            To impress her friends and family with good teas when they visit.
          </p>
          <p className="persona__goals-copy">
            Spend as much of her free time doing the things she loves.
          </p>
          <p className="persona__goals-copy">
            Experience new things from the comfort of her home.
          </p>
        </div>
        <div className="persona__frustrations-section">
          <h2 className="persona__frustrations-title">Frustrations</h2>
          <p className="persona__frustrations-copy">
            To impress her friends and family with good teas when they visit.
          </p>
          <p className="persona__frustrations-copy">
            Spend as much of her free time doing the things she loves.
          </p>
          <p className="persona__frustrations-copy">
            Experience new things from the comfort of her home.
          </p>
        </div>
      </div>

      <div className="persona__container-four">
        <div className="persona__personality-section">
          <h2 className="persona__personality-title">Personality</h2>
          <div className="persona__personality-type">
            <div className="persona__personality-label-container">
              <p className="persona__personality-label">Extrovert</p>
              <p className="persona__personality-label">Introvert</p>
            </div>
            <div className="persona__personality-bar">
              <div className="persona__personality-slider persona__personality-slider--introvert"></div>
            </div>
          </div>
          <div className="persona__personality-type">
            <div className="persona__personality-label-container">
              <p className="persona__personality-label">Sensing</p>
              <p className="persona__personality-label">Intuition</p>
            </div>
            <div className="persona__personality-bar">
              <div className="persona__personality-slider persona__personality-slider--sensing"></div>
            </div>
          </div>
          <div className="persona__personality-type">
            <div className="persona__personality-label-container">
              <p className="persona__personality-label">Thinking</p>
              <p className="persona__personality-label">Feeling</p>
            </div>
            <div className="persona__personality-bar">
              <div className="persona__personality-slider persona__personality-slider--thinking"></div>
            </div>
          </div>
          <div className="persona__personality-type">
            <div className="persona__personality-label-container">
              <p className="persona__personality-label">Judging</p>
              <p className="persona__personality-label">Perceiving</p>
            </div>
            <div className="persona__personality-bar">
              <div className="persona__personality-slider persona__personality-slider--judging"></div>
            </div>
          </div>

          <div className="persona__brands-section">
            <h2 className="persona__brands-title">Brands</h2>
            <div className="persona__brands-logo-container">
              <img src={amazon} alt="amazon" className="persona__brand-logo" />
              <img
                src={helloFresh}
                alt="hello fresh"
                className="persona__brand-logo"
              />
              <img src={indigo} alt="indigo" className="persona__brand-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Persona;
