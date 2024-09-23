import { PiPlayFill } from "react-icons/pi";

// styles
import "./WatchTrailerBtn.scss";

const WatchTrailerBtn = ({ handleTrailerModal }) => {
  return (
    <button className="btn btn--round" onClick={handleTrailerModal}>
      <PiPlayFill />
      Watch Trailer
    </button>
  );
};

export default WatchTrailerBtn;
