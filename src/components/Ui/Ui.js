import "./Ui.scss";
import uiOne from "../../assets/images/ui-one.png";
import uiTwo from "../../assets/images/ui-two.png";
import uiThree from "../../assets/images/ui-three.png";
import uiFour from "../../assets/images/ui-four.png";

function Ui() {
  return (
    <>
      <h1 className="ui__header">User Interface</h1>
      <div className="ui__images-container">
        <img src={uiOne} alt="ui" className="ui__image" />

        <img src={uiTwo} alt="ui" className="ui__image" />

        <img src={uiThree} alt="ui" className="ui__image" />

        <img src={uiFour} alt="ui" className="ui__image" />
      </div>
    </>
  );
}

export default Ui;
