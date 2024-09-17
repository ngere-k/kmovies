// styles
import "./Loading.scss";

const Loading = ({ fullPageLoading }) => {
  if (fullPageLoading) {
    return (
      <div className="full-page-loading">
        <div className="loading" />
      </div>
    );
  }

  return (
    <div className="section section-center">
      <div className="loading" />
    </div>
  );
};

export default Loading;
