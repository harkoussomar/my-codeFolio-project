import { Link } from "react-router-dom";
import { convertToPath } from "../../utils/utils";

export default function WorkCard({ workItem }) {
  const { image, title, subtitle, description } = workItem;
  const param = convertToPath(title);

  return (
      <Link to={`/work/${param}`} className="work__card">
        <img src={image} alt="work1" />
        <div className="work__card-info">
          <div className="work__card-info-head">
            <h2>{title}</h2>
            <span>{subtitle}</span>
          </div>
          <p>{description}</p>
        </div>
      </Link>
  );
}
