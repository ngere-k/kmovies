import Card from "../card/Card";

// styles
import "./Recommendations.scss";

const Recommendations = ({ recommendations }) => {
  return (
    <section className="section-recommendations">
      <div className="container">
        {recommendations.length > 0 && (
          <h2 className="heading-secondary recommendations__header">
            You may also like...
          </h2>
        )}
        <div className="grid-col-4">
          {recommendations.slice(0, 12).map((movie) => {
            return (
              <Card
                key={movie.id}
                {...movie}
                path={movie.media_type === "movie" ? "/movie" : "/series-info"}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
