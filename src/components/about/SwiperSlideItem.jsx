import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";


export default function SwiperSlideItem() {
  return (
    <div className="clients__feedback">
      <FontAwesomeIcon
        icon={faQuoteRight}
        className="clients__feedback-quotes"
      />
      <p className="clients__feedback-comment">
        "Working with Emma you can always expect top-quality and beyond. He
        brings innovative ideas to the table and always has his eyes open to
        improve any aspect of design to ensure it exceeds the expectations of
        both the client and the user. It is always a pleasure working alongside
        Dimitri, and I look forward to collaborating with him on future
        projects."
      </p>
      <div className="clients__feedback-info">
        <span className="clients__feedback-name">John Doe</span>
        <p className="clients__feedback__post">
          <span className="clients__feedback__post-label">Founder of</span>
          <a className="clients__feedback__post-society">Google</a>
        </p>
      </div>
    </div>
  );
}
