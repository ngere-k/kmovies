import YouTube from "react-youtube";

// styles
import "./Trailer.scss";

const Trailer = ({ trailerKey }) => {
  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  if (!trailerKey) {
    return <div className="no-trailer-text">Trailer not available</div>;
  }

  return (
    <YouTube
      videoId={trailerKey}
      opts={opts}
      onReady={onReady}
      className="youtube-container"
      iframeClassName="youtube-iframe"
    />
  );
};

export default Trailer;
