import ReactPaginate from "react-paginate";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";

// styles
import "./Pagination.scss";

const Pagination = ({ handlePageClick, pageCount, page }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      breakClassName={"break"}
      breakLinkClassName={"break-link"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      forcePage={page}
      containerClassName="pagination"
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousLinkClassName={"page-prev page-link"}
      nextLinkClassName={"page-next page-link"}
      activeLinkClassName={"active"}
      previousLabel={
        <div className="prev-label">
          <RiArrowLeftDoubleFill className="link-icon" />
          <span>Prev</span>
        </div>
      }
      nextLabel={
        <div className="next-label">
          <span>Next</span>
          <RiArrowRightDoubleFill className="link-icon" />
        </div>
      }
    />
  );
};

export default Pagination;
