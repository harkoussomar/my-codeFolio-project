import { Link } from "react-router-dom";
import "./mainButton.css";

export default function MainButton({
  label,
  link,
  colorType = "primary",
  newTab = false,
}) {
  const handleClick = e => {
    if (newTab) {
      e.preventDefault(); // Prevent the default behavior of Link
      window.open(link, "_blank", "noopener,noreferrer"); // Open in new tab
    }
  };

  return (
    <>
      {colorType === "primary" && (
        <Link to={link} className="main__button" onClick={handleClick}>
          <span>{label}</span>
        </Link>
      )}
      {colorType === "secondary" && (
        <Link
          to={link}
          className="main__button main__button-secondary"
          onClick={handleClick}
        >
          <span>{label}</span>
        </Link>
      )}
    </>
  );
}
