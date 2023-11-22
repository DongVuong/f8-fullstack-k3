import React, { useEffect, useRef } from "react";
import ReactPaginate from "react-paginate";
import "./pagination.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProducts } from "../../redux/slice/productSlice";
import { config } from "../../api/config";
// import DoubleBubble from "../../helper/loading/DoubleBubble.jsx";
const { PAGE_LIMIT } = config;

function Pagination() {
  const dispatch = useDispatch();
  const totalPage = useSelector((state) => state.product.totalPage);
  const status = useSelector((state) => state.product.status);
  const { page } = useParams();
  // console.log(page);
  const prevPage = useRef(0);
  const navigate = useNavigate();
  const getData = (pageParams) => {
    dispatch(
      getProducts({
        limit: PAGE_LIMIT,
        page: pageParams,
      })
    );
  };
  // if (status === "pending") {
  //   return <DoubleBubble />;
  // }
  useEffect(() => {
    const pageParams = +page;
    if (!isNaN(pageParams) && pageParams > 0) {
      if (pageParams <= totalPage || totalPage === 0) {
        if (pageParams !== prevPage.current) {
          getData(pageParams);
          prevPage.current = pageParams;
        }
      } else {
        navigate(`/product/${totalPage}`);
        getData(totalPage);
      }
    } else {
      navigate(`/product/1`);
      getData(1);
      console.log(totalPage);
    }
  }, [page, totalPage]);
  const handlePageClick = (event) => {
    navigate(`/product/${event.selected + 1}`);
    getData(event.selected + 1);
  };
  if (status === "pending") {
    return;
  }
  return (
    <ReactPaginate
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={"..."}
      pageCount={totalPage}
      marginPagesDisplayed={3}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      activeClassName={"active"}
    />
  );
}

export default Pagination;
