import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink, useNavigate } from "react-router-dom";

export default function GoBackButton({ icon }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <NavLink onClick={goBack} className="header__nav-element">
      <FontAwesomeIcon icon={icon} className="header__nav-icon" />
    </NavLink>
  );
}
