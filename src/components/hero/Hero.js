import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import customAxios from "../../utils/axios";
import { imageUrl } from "../../utils/imageUrl";

// components
import RatingYear from "../ratingYear/RatingYear";
import WatchTrailerBtn from "../watchTrailerBtn/WatchTrailerBtn";

// styles
import "swiper/swiper-bundle.css";
import "./Hero.scss";

const Hero = () => {
  const { newMovies } = useSelector((store) => store.newMovies);
  const slides = newMovies?.slice(0, 6);
  const [genres, setGenres] = useState(null);

  const getGenres = (genreIds) => {
    const getGenreNameById = (genreId) => {
      const g = genres?.find((g) => g.id === genreId);
      return g ? g.name : "Unknown Genre";
    };

    return genreIds.map((id) => getGenreNameById(id)).join(" / ");
  };

  useEffect(() => {
    const getGenreMovieList = async () => {
      const res = await customAxios("/genre/movie/list");
      setGenres(res.data.genres);
    };

    getGenreMovieList();
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      lazy="true"
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      navigation
      effect={"fade"}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5500,
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
          genre_ids,
        } = slide;

        const styles = {
          backgroundImage: `linear-gradient(to right, rgba(46, 46, 46, 0.8), rgba(112, 112, 112, 0.2)),url(${imageUrl}${backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        };

        return (
          <SwiperSlide key={id} style={styles}>
            <div className="swiper__container">
              <div className="swiper__content">
                <RatingYear rating={vote_average} date={release_date} />
                <h1 className="heading-primary">{title}</h1>
                <p className="swiper__overview">{overview}</p>
                <div className="swiper__genre">{getGenres(genre_ids)}</div>
              </div>

              <Link to={`/movie/${id}`} className="swiper__link">
                <WatchTrailerBtn />
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Hero;
