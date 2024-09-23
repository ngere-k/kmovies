import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import customAxios from "../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCredits,
  fetchKeywords,
  fetchVideos,
} from "../../features/details/detailsSlice";

// components
import Loading from "../../components/loading/Loading";
import DetailsHeader from "../../components/detailsHeader/DetailsHeader";

// styles
import "./SeriesDetail.scss";

const SeriesDetail = () => {
  const { id } = useParams();
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { credits, keywords } = useSelector((store) => store.details);
  const dispatch = useDispatch();

  const {
    backdrop_path,
    poster_path,
    name,
    vote_average,
    first_air_date,
    episode_run_time,
    genres,
    overview,
    created_by,
  } = series;

  const seriesDetailObj = {
    backdrop: backdrop_path,
    poster: poster_path,
    title: name,
    vote: vote_average,
    release_date: first_air_date,
    runtime: episode_run_time,
    genres,
    overview,
    creator: created_by?.length < 1 ? "N/A" : created_by?.[0].name,
    credits,
    keywords,
  };

  const fetchSeries = async () => {
    setIsLoading(true);
    try {
      const res = await customAxios(`/tv/${id}`);
      setSeries(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSeries();
    dispatch(fetchCredits({ type: "tv", id }));
    dispatch(fetchKeywords({ type: "tv", id }));
    dispatch(fetchVideos({ type: "tv", id }));
  }, []);

  if (isLoading) return <Loading />;

  return (
    <article className="series-detail-article">
      <DetailsHeader {...seriesDetailObj} />

      {/* div for cast */}
      <div>
        <h2>Series Details</h2>
      </div>
      {/* div for cast */}
    </article>
  );
};

export default SeriesDetail;
