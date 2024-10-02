import "./header.css";
import {
  faArrowLeft,
  faHouse,
  faListCheck,
  faPencil,
  faUserTie,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import NavigationLink from "./NavigationLink";

import { useLocation } from "react-router-dom";
import GoBackButton from "./GoBackButton";

export default function Header() {
  const location = useLocation();

  const isWorkDetailsPage = location.pathname.startsWith("/work/");

  return (
    <header className="header">
      <nav className="header__nav">
        {isWorkDetailsPage && (
          <div className="header__nav-primary">
            <GoBackButton icon={faArrowLeft} />
          </div>
        )}

        <nav className="header__nav-primary">
          <NavigationLink path="/" icon={faHouse} />
          <NavigationLink path="/work" icon={faListCheck} />
          <NavigationLink path="/blog" icon={faPencil} />
          <NavigationLink path="/about" icon={faUserTie} />
          <NavigationLink path="/contact" icon={faEnvelope} />
        </nav>
      </nav>
    </header>
  );
}
