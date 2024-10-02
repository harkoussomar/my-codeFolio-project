import { Link } from "react-router-dom";

export default function BlogCard({ blogItem }) {
  const { image, title, type, date, path } = blogItem;

  return (
    <Link className="blog__card" to={`/blog/${path}`}>
      <img src={image} alt="blog1" />
      <div className="blog__info">
        <span className="blog__info-title">{title}</span>
        <p className="blog__info-status">
          <span className="blog__info-status-type">{type}</span>
          <span className="blog__info-status-dote"></span>
          <span className="blog__info-status-date">{date}</span>
        </p>
      </div>
    </Link>
  );
}
