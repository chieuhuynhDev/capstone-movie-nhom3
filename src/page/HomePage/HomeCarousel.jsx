import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { movieService } from "../../service/movieService";

const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  backgroundPostion: "center",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
};

export default function HomeCarousel() {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    movieService
      .layDanhSachBanner()
      .then((result) => {
        console.log("result", result.data.content);
        setBanner(result.data.content);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  let renderBanner = () => {
    return banner.map((item, index) => {
      return (
        <div key={index}>
          <h3
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img src={item.hinhAnh} className="w-full opacity-0" alt="123" />
          </h3>
        </div>
      );
    });
  };

  return (
    <>
      <Carousel arrows infinite={false}>
        {renderBanner()}
      </Carousel>
    </>
  );
}
