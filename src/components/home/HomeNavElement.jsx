import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function HomeNavElement({ char, label, link }) {
  return (
    <Link to={link} className="home__nav-item">
      <div className="home__nav-item-left">
        <span className="home__nav-item-char">{char}</span>
        <p className="home__nav-item-text">{label}</p>
      </div>
      <div className="home__nav-item-icons">
        <div className="svgContainer">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="home__nav-item-icon"
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            className="home__nav-item-icon"
          />
        </div>
      </div>
    </Link>
  );
}
