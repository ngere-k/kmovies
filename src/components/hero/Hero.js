import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Rating from "../rating/Rating";
import { PiPlayFill } from "react-icons/pi";
import { getYear } from "../../utils/getYear";
import { Link } from "react-router-dom";

// styles
import "swiper/swiper-bundle.css";
import "./Hero.scss";

const Hero = () => {
  const { newMovies } = useSelector((store) => store.newMovies);
  const slides = newMovies?.slice(0, 6);

  return (
    <Swiper
      slidesPerView={1}
      lazy="true"
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      navigation
      effect={"fade"}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {slides?.map((slide) => {
        const {
          id,
          backdrop_path,
          vote_average,
          release_date,
          title,
          overview,
        } = slide;

        const styles = {
          backgroundImage: `linear-gradient(to right, rgba(46, 46, 46, 0.8), rgba(112, 112, 112, 0.2)),url(https://image.tmdb.org/t/p/original${backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        };

        return (
          <SwiperSlide key={id} style={styles}>
            <div className="swiper__container">
              <div className="swiper__content">
                <div className="swiper__rating">
                  <Rating rating={vote_average} />
                  <span className="swiper__iota">&Iota;</span>
                  <div className="swiper__year">{getYear(release_date)}</div>
                </div>
                <h1 className="heading-primary">{title}</h1>
                <p className="swiper__overview">{overview}</p>
                <div className="swiper__genre">Comedy / Action / Adventure</div>
              </div>

              <Link to={`/movies/${id}`} className="swiper__link">
                <button className="btn">
                  <PiPlayFill className="swiper__icon" />
                  Watch Trailer
                </button>
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Hero;
