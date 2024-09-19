import { PiPlayFill } from "react-icons/pi";

// styles
import "./WatchTrailerBtn.scss";

const WatchTrailerBtn = ({ handleTrailer }) => {
  return (
    <button className="btn btn--round" onClick={handleTrailer}>
      <PiPlayFill />
      Watch Trailer
    </button>
  );
};

export default WatchTrailerBtn;
