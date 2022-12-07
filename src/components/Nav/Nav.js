import "./Nav.scss";
import { Link } from "react-scroll";
import logo from "../../assets/logos/logo.svg";

function Nav() {
  return (
    <section className="nav">
      <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
        <img src={logo} alt="davids tea logo" className="nav__logo" />
      </Link>
    </section>
  );
}

export default Nav;
