import Card from "../card/Card";

// styles
import "./Seasons.scss";

const Seasons = ({ seasons }) => {
  console.log(seasons);
  return (
    <section className="container">
      <h2 className="heading-secondary">seasons</h2>

      <div className="season grid-col-4">
        {seasons
          ?.filter((season) => season.name !== "Specials")
          .map((season) => {
            return <Card key={season.id} {...season} />;
          })}
      </div>
    </section>
  );
};

export default Seasons;
