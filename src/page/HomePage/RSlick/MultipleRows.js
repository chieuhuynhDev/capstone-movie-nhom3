import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styleSlick from "./MultipleRows.module.css";

const settings = {
  className: `${styleSlick[`slick-dots`]}`,
  dots: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  rows: 2,
  slidesPerRow: 2,
  appendDots: (dots) => (
    <div
      style={{
        borderRadius: "10px",
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
};
function MultipleRows({ movieArr, navigate }) {
  let renderMovie = () => {
    return movieArr.map((item, index) => (
      <div
        key={index}
        className={`${styleSlick[`carousel-item`]}`}
        onClick={() => {
          navigate(`/detail/${item.maPhim}`);
        }}
      >
        <div className={`${styleSlick[`movie-card`]}`}>
          <img
            src={item.hinhAnh}
            alt={item.maPhim}
            className={`${styleSlick[`movie-image`]}`}
          />
          <div className={`${styleSlick[`btn-position`]}`}>
            <div>
              <h1 className={`${styleSlick[`movie-title`]}`}>{item.tenPhim}</h1>
              <p className={`${styleSlick[`movie-description`]}`}>
                {item.moTa}
              </p>
            </div>
            <div>
              <a className={`${styleSlick[`btn-buy-ticket`]}`} href="/">
                MUA VÉ
              </a>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className={`${styleSlick[`carousel-container`]}`}>
      <Slider {...settings}>{renderMovie()}</Slider>
    </div>
  );
}

export default MultipleRows;
