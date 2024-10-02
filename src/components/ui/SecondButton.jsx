import { Link } from "react-router-dom";
import "./secondButton.css";

export default function SecondButton({ label, link, newTab = false }) {
  const handleClick = e => {
    if (newTab) {
      e.preventDefault(); // Prevent default Link behavior
      window.open(link, "_blank", "noopener,noreferrer"); // Open in a new tab
    }
  };

  return (
    <Link to={link} className="second__button" onClick={handleClick}>
      {label}
    </Link>
  );
}
