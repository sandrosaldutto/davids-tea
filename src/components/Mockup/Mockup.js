import "./Mockup.scss";
import mockupOne from "../../assets/images/login.png";
import mockupTwo from "../../assets/images/home.png";
import mockupThree from "../../assets/images/account.png";
import mockupFour from "../../assets/images/timer.png";

function Ui() {
  return (
    <>
      <div className="mockup__images-container">
        <img src={mockupOne} alt="mockup" className="mockup__image" />

        <img src={mockupTwo} alt="mockup" className="mockup__image" />

        <img src={mockupThree} alt="mockup" className="mockup__image" />

        <img src={mockupFour} alt="mockup" className="mockup__image" />
      </div>
    </>
  );
}

export default Ui;
