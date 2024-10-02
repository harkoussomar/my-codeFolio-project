import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function AboutSectionService({ title, description }) {
  const [isDown, setIsDown] = useState(false);

  return (
    <div className="service__item" onClick={() => setIsDown(prev => !prev)}>
      <div className="service__item-head">
        <h3 className="services__label">{title}</h3>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`services__icon ${isDown ? "rotate-down" : "rotate-up"}`}
        />
      </div>
      <div className={`services__info-container ${isDown ? "open" : "closed"}`}>
        <p className="services__info">{description}</p>
      </div>
    </div>
  );
}
