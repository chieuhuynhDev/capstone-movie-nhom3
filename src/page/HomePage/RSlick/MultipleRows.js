import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styleSlick from "./MultipleRows.module.css";
import downloadImage from "../../../assest/img/download.png";
import { VideoPopup } from "../VideoPopUp";

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
  const [showPopup, setShowPopup] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  const showDemoModal = (event, item) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(item);

    setTrailerUrl(item.trailer);
    setShowPopup(true);
  };
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
          <a
            className={`${
              styleSlick[`movie-image`]
            } flex justify-center items-center group`}
            style={{ backgroundImage: `url(${item.hinhAnh})` }}
            href={`/detail/${item.maPhim}`}
          >
            <div>
              <button
                onClick={(event) => {
                  showDemoModal(event, item);
                }}
                className="invisible group-hover:!visible"
              >
                <img src={downloadImage} alt="" />
              </button>
            </div>
          </a>
          <div className={`${styleSlick[`btn-position`]}`}>
            <div>
              <h1 className={`${styleSlick[`movie-title`]}`}>{item.tenPhim}</h1>
              <p className={`${styleSlick[`movie-description`]} line-clamp-2`}>
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
      {showPopup && (
        <VideoPopup
          videoUrl={trailerUrl}
          onClose={(event) => {
            console.log("close VideoPopup");
            setShowPopup(false);
          }}
        />
      )}
    </div>
  );
}

export default MultipleRows;
